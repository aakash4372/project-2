import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import React, { useContext } from 'react';
import '../App.css';

import { BookContext } from './BookContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);


const Dashboard = () => {
    
    const { takenbook, userId } = useContext(BookContext);

    const totalBooksTaken = takenbook.filter(book => book.userId === userId).length;

 
    const userRecord = JSON.parse(localStorage.getItem(`userrecord_${userId}`)) || [];
    const totalReturnedBooks = userRecord.length;

    const barData = {
        labels: ['Books', 'Pending', 'Returned'],
        datasets: [
            {
                label: 'Books Count',
                data: [totalBooksTaken, totalBooksTaken, totalReturnedBooks],
                backgroundColor: ['#ffab2d', '#4a80ed', '#ff3ca6'],
                borderWidth: 1,
            },
        ],
    };

    const pieData = {
        labels: ['Books', 'Pending', 'Returned'],
        datasets: [
            {
                data: [totalBooksTaken, totalBooksTaken, totalReturnedBooks],
                backgroundColor: ['#ffab2d', '#4a80ed', '#ff3ca6'],
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 12,
                    },
                    color: ' #716f6fc5',
                },
                grid: {
                    color: ' #716f6fc5',
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 12,
                    },
                    color: ' #716f6fc5', 
                },
                grid: {
                    color: ' #716f6fc5',
                },
                title: {
                    display: true,
                    text: 'Count',
                    font: {
                        size: 16,
                    }, 
                },
            },
        },
        barThickness: 35,
    };
    

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                    <div className="card h-100 card1 background-row">
                        <div className="card-body">
                            <h5 className="card-title d-flex justify-content-between align-items-center">
                                <span className="span-text">Total Books</span>
                            </h5>
                            <h1 className="number-text">No: {totalBooksTaken}</h1>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                    <div className="card h-100 card2 background-row2">
                        <div className="card-body">
                            <h5 className="card-title d-flex justify-content-between align-items-center">
                                <span className="span-text">Pending Books</span>
                            </h5>
                            <h1 className="number-text">No: {totalBooksTaken}</h1>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                    <div className="card h-100 card3 background-row3">
                        <div className="card-body">
                            <h5 className="card-title d-flex justify-content-between align-items-center">
                                <span className="span-text">Returned Books</span>
                            </h5>
                            <h1 className="number-text">No: {totalReturnedBooks}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-12 mb-3">
                    <div className="card h-auto">
                        <div className="card-body-1">
                            <h5 className="card-title ps-3 pt-3">Books Overview - Bar Chart</h5>
                            <Bar data={barData} options={barOptions} />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 mb-3">
                    <div className="card h-auto">
                        <div className="card-body-1">
                            <h5 className="card-title ps-3 pt-3">Books Overview - Pie Chart</h5>
                            <Pie data={pieData} options={pieOptions} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
