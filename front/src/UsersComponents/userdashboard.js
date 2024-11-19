

import React, { useState } from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import Exploresection from './Explore';
import { MdSpaceDashboard } from "react-icons/md";
import {useLocation} from 'react-router-dom'
import { GiBlackBook } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import '../App.css'
import Aakash from './Dashboard';
import { LuLogOut } from "react-icons/lu";
import DueDate from './duedate';
import Returnusers from './return';
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';
import { IoReorderThreeOutline } from "react-icons/io5";


const Sidebar = () => {
  const location = useLocation();
  const { name } = location.state || {}; 
  const [show, setShow] = useState(false);
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const navigate = useNavigate()

  const handlelogout =()=>{
    Swal.fire({
      title: 'Do you want to logout?',
      icon: 'warning',
      iconColor:'red',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'No, stay logged in',
      customClass: {
        popup: 'swal-custom-bg',
        title: 'custom-title', 
        
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Dashboard = () => <h2>Dashboard Content</h2>;
  const Explore = () => <div><Exploresection/></div>
  const Track = () => <div><DueDate/></div>
const Takeover = () => <Returnusers/>;

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Aakash/>;
      case 'Explore':
        return <Explore />;
      case 'Track':
        return <Track />;
      case 'Takeover':
        return <Takeover />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="d-flex">
      <div className="bg-dark side-content text-white d-none d-md-block" style={{width:'290px',}} >
      <div className="text-center mt-4">
           <img className='img' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/user-2197891-1911014.png?f=webp&w=256" alt='user' width={90}  />
          <p className="top-text fs-4">Welcome {name}</p>
           
       </div>
       <hr style={{border:"1px solid white"}}/>
        <Nav className="flex-column ps-4 font1">
          <Nav.Link onClick={() => setActiveComponent('Dashboard')} className='text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4 nav-link'>
          <MdSpaceDashboard  className='me-3 icon1'/> Dashboard
          </Nav.Link>

          <Nav.Link onClick={() => setActiveComponent('Explore')} className='text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4 nav-link'>
          <GiBlackBook  className='me-3 icon1'/> Explore
          </Nav.Link>
          
          <Nav.Link onClick={() => setActiveComponent('Track')} className='text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4 nav-link'>
          <BsCalendar2Date    className='me-3 icon1'/> Due Date
          </Nav.Link>
          <Nav.Link onClick={() => setActiveComponent('Takeover')} className='text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4 nav-link'>
          <TbTruckReturn    className='me-3 icon1'/> Return Books
          </Nav.Link>
          <Nav.Link className='text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4 nav-link' onClick={handlelogout}>
          <LuLogOut  className='me-3 icon1'/> Logout
          </Nav.Link>
          
        </Nav>  
         
      </div>

      <div className="flex-grow-1 p-3 main-content">
        <button   
          className="navbar-toggler mb-3 d-md-none"  
          onClick={handleShow} 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <IoReorderThreeOutline style={{fontSize:'35px'}} />  
        </button>

        {renderComponent()}

        <Offcanvas 
          show={show} 
          onHide={handleClose} 
          placement="start" 
          className="d-md-none offcanvas-custom bg-dark"
          style={{ width: '70%' }}>
          <Offcanvas.Header> 
          <div className="text-center ms-4">
           <img className='img' src="https://cdn.iconscout.com/icon/premium/png-512-thumb/user-2197891-1911014.png?f=webp&w=256" alt='user' width={80} />
          <p className="top-text fs-4">Welcome {name}</p>
           
       </div>
               
          </Offcanvas.Header>
         

          <Offcanvas.Body style={{overflowY:'hidden'}}>
          <Nav className="flex-column font1">
          <Nav.Link onClick={() => {setActiveComponent('Dashboard'); handleClose(); }}className='text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4'>
          <MdSpaceDashboard  className='me-3 icon1'/> Dashboard
          </Nav.Link>
          <Nav.Link onClick={() => {setActiveComponent('Explore'); handleClose(); }} className='text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4'>
          <GiBlackBook  className='me-3 icon1'/> Explore
          </Nav.Link>
          
          <Nav.Link onClick={() => {setActiveComponent('Track'); handleClose(); }} className='text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4'>
          <BsCalendar2Date    className='me-3 icon1'/> Due Date
          </Nav.Link>
          <Nav.Link onClick={() => {setActiveComponent('Takeover'); handleClose(); } }className='text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4'>
          <TbTruckReturn    className='me-3 icon1'/> Return Books
          </Nav.Link>
          <Nav.Link className='text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4' onClick={handlelogout}>
          <LuLogOut  className='me-3 icon1'/> Logout
          </Nav.Link>
          
        </Nav>  
          </Offcanvas.Body>
        
        </Offcanvas>
      </div>
    </div>
  );
};

export default Sidebar;
