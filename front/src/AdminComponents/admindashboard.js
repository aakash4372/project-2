import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { MdSpaceDashboard } from "react-icons/md";
import "../App.css";
import Userssection from "./Users";
import { FaUsers } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import Dashboardsection from "./Dashboard";
import Returnprocessadmin from "./returnprocess";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IoReorderThreeOutline } from "react-icons/io5";

const Admindashboard = () => {
  const [show, setshow] = useState(false);
  const [activeComponent, setactiveComponent] = useState("Dashboard");
  const navigate = useNavigate();

  const handleshow = () => setshow(true);
  const handleclose = () => setshow(false);

  const Dashboard = () => <div>Dashboard</div>;
  const Users = () => <Userssection />;
  const ReturnProcessing = () => <Returnprocessadmin />;

  const rendercomponents = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboardsection />;
      case "Users":
        return <Users />;
      case "ReturnProcessing":
        return <ReturnProcessing />;
      default:
        return <Dashboard />;
    }
  };
  const handlelogout = () => {
    Swal.fire({
      title: "Do you want to logout?",
      icon: "warning",
      iconColor: "red",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
      cancelButtonText: "No, stay logged in",
      customClass: {
        popup: "swal-custom-bg",
        title: "custom-title",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };
  return (
    <div className="d-flex">
      <div
        className="bg-dark side-content d-none d-md-block"
        style={{ width: "290px" }}
      >
        <div className="text-center avatar mt-4">
          <img
            className="img"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/user-2197891-1911014.png?f=webp&w=256"
            alt="user"
            width={90}
          />
          <p className="top-text fs-4">Welcome Admin</p>
        </div>
        <hr style={{ border: "1px solid white" }} />

        <Nav className="flex-column ps-4 font1">
          <Nav.Link
            onClick={() => setactiveComponent("Dashboard")}
            className="text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4 navlink"
          >
            {" "}
            <MdSpaceDashboard className="me-3 icon1" /> Dashboard
          </Nav.Link>

          <Nav.Link
            onClick={() => setactiveComponent("Users")}
            className="text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4 navlink"
          >
            {" "}
            <FaUsers className="me-3 icon1" /> All Users
          </Nav.Link>

          <Nav.Link
            onClick={() => setactiveComponent("ReturnProcessing")}
            className="text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4 navlink"
          >
            {" "}
            <TbTruckReturn className="me-3 icon1" /> Return Request
          </Nav.Link>

          <Nav.Link
            onClick={handlelogout}
            className="text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4 navlink"
          >
            {" "}
            <LuLogOut className="me-3 icon1" /> Logout
          </Nav.Link>
        </Nav>
      </div>

      <div className="flex-grow-1 p-3 main-content">
        <button
          className="navbar-toggler mb-3 d-md-none"
          onClick={handleshow}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IoReorderThreeOutline style={{ fontSize: "35px" }} />
        </button>

        {rendercomponents()}

        <Offcanvas
          show={show}
          onHide={handleclose}
          placement="start"
          className="d-md-none offcanvas-custom bg-dark"
          style={{ width: "70%" }}
        >
          <Offcanvas.Header>
            <div className="text-center avatar ms-4">
              <img
                className="img"
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/user-2197891-1911014.png?f=webp&w=256"
                alt="user"
                width={80}
              />
              <p className="top-text fs-4">Welcome Admin</p>
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body style={{ overflowY: "hidden" }}>
            <Nav className="flex-column font1">
              <Nav.Link
                onClick={() => {
                  setactiveComponent("Dashboard");
                  handleclose();
                }}
                className="text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4"
              >
                <MdSpaceDashboard className="me-3 icon1" /> Dashboard
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setactiveComponent("Users");
                  handleclose();
                }}
                className="text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4"
              >
                <FaUsers className="me-3 icon1" /> Users
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  setactiveComponent("ReturnProcessing");
                  handleclose();
                }}
                className="text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4"
              >
                <TbTruckReturn className="me-3 icon1" /> Return Books
              </Nav.Link>
              <Nav.Link
                className="text-white fs-4 d-flex align-items-center justify-content-start ps-4 mb-4"
                onClick={handlelogout}
              >
                <LuLogOut className="me-3 icon1" /> Logout
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Admindashboard;
