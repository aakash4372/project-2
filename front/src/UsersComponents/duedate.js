import React, { useContext, useState } from "react";
import { BookContext } from "../UsersComponents/BookContext";
import toast, { Toaster } from "react-hot-toast";
import {Button} from 'react-bootstrap'
import Lottie from "lottie-react";
import Nobook from '../Animation - 1731681312635.json'
import './user.css'

const Duedate = () => {
    const { takenbook, userId, returnBook } = useContext(BookContext);
    const [returnedBooks, setReturnedBooks] = useState(new Set());

    const userBooks = takenbook.filter(book => book.userId === userId);

    const handleReturn = (book) => {
        if (!returnedBooks.has(book.name)) {
            returnBook(book);
            toast.success(`${book.name} has been returned successfully!`);
            setReturnedBooks(new Set(returnedBooks).add(book.name));
        }
    };

    return (
        <div>
            <Toaster />
            {userBooks.length > 0 ? (
                <>
                    <h3>You have taken {userBooks.length} book(s)</h3>
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
                            {userBooks.map((book, index) => (
                                <tr key={index}>
                                    <td>{book.name}</td>
                                    <td>{book.checkindate}</td>
                                    <td>{book.checkoutdate}</td>
                                    <td>
                                        <Button
                                            onClick={() => handleReturn(book)}
                                            disabled={returnedBooks.has(book.name)}
                                        >
                                            {returnedBooks.has(book.name) ? "Returned" : "Return"}
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <div className='no-data'>
                    <Lottie animationData={Nobook} loop={true}/>

                </div>
            )}
        </div>
    );
};

export default Duedate;
