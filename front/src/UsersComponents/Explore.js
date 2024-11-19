import React, { useContext, useState } from 'react';
import { BookContext } from './BookContext';
import toast, { Toaster } from 'react-hot-toast';
import '../App.css';
import './user.css';
import { Modal, Button } from 'react-bootstrap';
import { BookList } from '../AdminComponents/Book'; 
import { PiMagnifyingGlassMinusDuotone    } from "react-icons/pi";
import Lottie from "lottie-react";
import Nodata from '../Animation - 1731679641129.json'

const Exploresection = () => {
  const [removebook, setremovebook] = useState(BookList); 
  const [selectbook, setselectbook] = useState(null);
  const [takedate, settakedate] = useState('');
  const [returndate, setreturndate] = useState('');
  const [showmodal, setshowmodal] = useState(false);
  const { takingbook } = useContext(BookContext);
  const { userId } = useContext(BookContext);

  const [searchtext, setsearchtext] = useState('');
  const [showsearch, setshowsearch] = useState(false);

  const handlesearchtext = event => {
    setsearchtext(event.target.value);
  };

  const handleshowsearch =()=>{
    setshowsearch(true);
  }

  const triggerblur =()=>{
    setshowsearch(false);
  }

  const filterbooks = removebook.filter((book) =>
    book.name.toLowerCase().includes(searchtext.trim().toLowerCase())
  );

  const handletakebook = (event) => {
    setselectbook(event);
    setshowmodal(true);
  };

  const handleclose = () => {
    setshowmodal(false);
    setselectbook(null);
    settakedate('');
    setreturndate('');
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (selectbook && takedate && returndate) {
      const bookWithUserId = { ...selectbook, userId: userId };
      takingbook(bookWithUserId, takedate, returndate);
      toast.success(`You have taken the book: ${selectbook.name}`);
      handleclose();
      setremovebook((prev) => prev.filter((remove) => remove.name !== selectbook.name));
    } else {
      toast.error('Please fill in both dates');
    }
  };

  return (
    <div onClick={triggerblur}>
      <Toaster />
      {!showsearch ?(

        <PiMagnifyingGlassMinusDuotone  onClick={(e)=> {e.stopPropagation();handleshowsearch()}} className='explore-icon'  />

        ):(
        <input type='search' className="search-input" placeholder='🔍  Search Book here...!' value={searchtext} onChange={handlesearchtext} onClick={(e)=>{e.stopPropagation()}} />

      )}

      {filterbooks.length > 0 ? (
        <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Book name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterbooks.map((book, index) => (
            <tr key={index}>
              <td><img src={book.image} alt={book.name} /></td>
              <td>{book.name}</td>
              <td>
                <Button className='primary' onClick={() => handletakebook(book)}>Take</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ):(
        <div className='no-data'>
          <Lottie animationData={Nodata} loop={true}/>
        </div>
      )}

      <Modal show={showmodal} onHide={handleclose}  aria-labelledby="contained-modal-title-vcenter"
      centered animation={false} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectbook?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <label htmlFor='takeDate' className='pb-3'>Take Date:</label>
            <input
              id='takeDate'
              type='date'
              className='form-control'
              value={takedate}
              onChange={(e) => settakedate(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='returnDate' className='pb-3'>Return Date:</label>
            <input
              id='returnDate'
              type='date'
              className='form-control'
              value={returndate}
              onChange={(e) => setreturndate(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handlesubmit}>Submit</Button>
          <Button variant='secondary' onClick={handleclose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Exploresection;
