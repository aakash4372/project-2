import React, { useContext } from 'react';
import { BookContext } from '../UsersComponents/BookContext';
import {Button} from 'react-bootstrap'
import Lottie from "lottie-react";
import Nobook from '../Animation - 1731681312635.json'
import '../UsersComponents/user.css'


const Returnprocessadmin = () => { 
    const { returnQueue, confirmReturn } = useContext(BookContext);

    return (
        <div>
            {returnQueue.length > 0 ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Take Date</th>
                                <th>Return Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {returnQueue.map((book, index) => (
                                <tr key={index}>
                                    <td>{book.name}</td>
                                    <td>{book.checkindate}</td>
                                    <td>{book.checkoutdate}</td>
                                    <td>
                                        <Button onClick={() => confirmReturn(book)}>OK</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <button onClick={clearReturnQueue}>Clear All Records</button> */}
                </div>
            ) : (
                <div className='no-data'>
                    <Lottie animationData={Nobook} loop={true}/>

                </div>
            )}
        </div>
    );
};

export default Returnprocessadmin;
