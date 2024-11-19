import React, { useEffect, useState, useContext } from 'react';
import '../App.css';
import axios from 'axios';
import { BookList } from './Book';
import { Bar, Pie } from 'react-chartjs-2';
import { BookContext } from '../UsersComponents/BookContext';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import '../UsersComponents/user.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboardsection = () => {
  const [usercount, setusercount] = useState(0);
  const totalbook = BookList.length;

  const { returnQueueLength } = useContext(BookContext);  

  const fetchusers = () => {
    axios.get("http://localhost:4000/all")
      .then((res) => {
        if (res.data.getusers) {
          setusercount(res.data.getusers.length);
        } else {
          console.log("can't find the users");
        }
      });
  };

  useEffect(() => {
    fetchusers();
  }, []);

  const barData = {
    labels: ['Users', 'Books', 'Requests'],
    datasets: [
      {
        label: 'Count',
        data: [usercount, totalbook, returnQueueLength],
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


  const pieData = {
    labels: ['Users', 'Books', 'Requests'],
    datasets: [
      {
        data: [usercount, totalbook, returnQueueLength],
        backgroundColor: ['#ffab2d', '#4a80ed', '#ff3ca6'],
        borderWidth: 1,
      },
    ],
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
    <div className="dashboard-section">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 mb-3 card-admin">
          <div className="card h-100 card1 background-row">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between align-items-center">
                <span className="span-text">Total Users</span>
              </h5>
              <h1 className="number-text">No:&nbsp;{usercount}</h1>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 mb-3 card-admin">
          <div className="card h-100 card1 background-row1">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between align-items-center">
                <span className="span-text">Total Books</span>
              </h5>
              <h1 className="number-text">No:&nbsp;{totalbook}</h1>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 mb-3 card-admin">
          <div className="card h-100 card1 background-row4">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between align-items-center">
                <span className="span-text">Total Requests</span>
              </h5>
              <h1 className="number-text">No:&nbsp;{returnQueueLength}</h1> 
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 mb-3">
          <div className="card h-auto">
            <div className="card-body-1">
              <h5 className="card-title ps-3 pt-3">User, Book, and Request Count - Bar Chart</h5>
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 mb-3">
          <div className="card h-auto">
            <div className="card-body-1">
              <h5 className="card-title ps-3 pt-3">User, Book, and Request Count - Pie Chart</h5>
              <Pie data={pieData} options={pieOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardsection;
