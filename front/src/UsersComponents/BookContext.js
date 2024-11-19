import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [userId, setUserId] = useState(() => localStorage.getItem('userId') || null);
    
    const getUserBooksFromStorage = (id) => {
        const storedBooks = localStorage.getItem(`takenbook_${id}`);
        return storedBooks ? JSON.parse(storedBooks) : [];
    };
    
    const [takenbook, settakenbook] = useState(() => userId ? getUserBooksFromStorage(userId) : []);
    const [returnQueue, setReturnQueue] = useState(() => JSON.parse(localStorage.getItem('returnQueue')) || []);
    
    const returnQueueLength = returnQueue.length;  

    const takingbook = (book, checkindate, checkoutdate) => {
        const newBookEntry = { ...book, checkindate, checkoutdate, userId };
        const newTakenbook = [...takenbook, newBookEntry];
        settakenbook(newTakenbook);
        localStorage.setItem(`takenbook_${userId}`, JSON.stringify(newTakenbook));
    };

    const returnBook = (book) => {
        const bookWithUserId = { ...book, userId };
        const updatedQueue = [...returnQueue, bookWithUserId];
        setReturnQueue(updatedQueue);
        localStorage.setItem('returnQueue', JSON.stringify(updatedQueue));
    };

    const confirmReturn = (bookToRemove) => {
        const updatedTakenbook = takenbook.filter(book => book.name !== bookToRemove.name);
        settakenbook(updatedTakenbook);
        localStorage.setItem(`takenbook_${userId}`, JSON.stringify(updatedTakenbook));

        const updatedReturnQueue = returnQueue.filter(book => book.name !== bookToRemove.name);
        setReturnQueue(updatedReturnQueue);
        localStorage.setItem('returnQueue', JSON.stringify(updatedReturnQueue));

        const userRecords = JSON.parse(localStorage.getItem(`userrecord_${userId}`)) || [];
        const updatedRecords = [...userRecords, bookToRemove];
        localStorage.setItem(`userrecord_${userId}`, JSON.stringify(updatedRecords));
    };

    const updateUserId = (id) => {
        setUserId(id);
        localStorage.setItem('userId', id);
        settakenbook(getUserBooksFromStorage(id));
    };

    return (
        <BookContext.Provider value={{ takenbook, takingbook, userId, updateUserId, returnBook, returnQueue, confirmReturn, returnQueueLength }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
