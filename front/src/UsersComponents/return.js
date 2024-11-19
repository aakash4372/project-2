
import React, { useContext } from 'react';
import { BookContext } from '../UsersComponents/BookContext';
import Lottie from "lottie-react";
import Nobook from '../Animation - 1731679641129.json'
import './user.css'


const Returnusers = () => {
    const { userId } = useContext(BookContext);
    const userRecord = JSON.parse(localStorage.getItem(`userrecord_${userId}`)) || [];

    return (
        <div>
            {userRecord.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Take Date</th>
                            <th>Return Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userRecord.map((book, index) => (
                            <tr key={index}>
                                <td>{book.name}</td>
                                <td>{book.checkindate}</td>
                                <td>{book.checkoutdate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className='no-data'>
                    <Lottie animationData={Nobook} loop={true}/>

                </div>
            )}
        </div>
    );
};

export default Returnusers;
