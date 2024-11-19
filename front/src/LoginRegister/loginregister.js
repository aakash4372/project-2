import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { BookContext } from "../UsersComponents/BookContext";
import { AuthContext } from "../Protected/Authencontext";

const Loginregister = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { updateUserId } = useContext(BookContext);

  const [formInput, setformInput] = useState({
    email: "",
    password: "",
    name: "",
    role: "user",
    address: "",
    birthday: "",
    mobile: "",
    department: "",
    city: "",
    pincode: "",
    gender: "",
  });

  const ResetInputField = () => {
    setformInput({
      email: "",
      password: "",
      name: "",
      role: "user",
      address: "",
      birthday: "",
      mobile: "",
      department: "",
      city: "",
      pincode: "",
      gender: "",
    });
  };

  const [isRegistering, setIsRegistering] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformInput((prev) => ({ ...prev, [name]: value }));
  };

  const formchange = () => {
    setIsRegistering(!isRegistering);
  };

  const handlelogin = async (event) => {
    event.preventDefault();
    try {
      const dummyToken = "dummy-token-123";
      const res = await axios.post("http://localhost:4000/login", {
        email: formInput.email,
        password: formInput.password,
      });

      if (res.data.role === "admin") {
        toast.success("Admin Login Successfully");
        setTimeout(() => {
          login(dummyToken);
          navigate("/admin-dashboard", { state: { name: res.data.name } });
          ResetInputField();
        }, 1200);
      } else if (res.data.role === "user") {
        toast.success("User Login Successfully");
        setTimeout(() => {
          updateUserId(res.data.userId);
          login(dummyToken);
          navigate("/user-dashboard", { state: { name: res.data.name } });
          ResetInputField();
        }, 1200);
      }
    } catch (error) {
      toast.error("Login Failed. Invalid credentials");
    }
  };

  const handleregister = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:4000/register", {
        name: formInput.name,
        email: formInput.email,
        mobile: formInput.mobile,
        pincode: formInput.pincode,
        role: formInput.role,
        gender: formInput.gender,
        department: formInput.department,
        birthday: formInput.birthday,
        address: formInput.address,
        city: formInput.city,
        password: formInput.password,
      });
      toast.success("Registration Successfully! You can now login...");
      ResetInputField();
      setIsRegistering(false);
    } catch (error) {
      toast.error("Registration failed...");
      ResetInputField();
    }
  };


  return (
    <section className="section">
      <div className="form-section">
        {isRegistering ? (
          <div className="register-form">
            <h2>Register</h2>
            <Form onSubmit={handleregister}>
              <Row className="mb-3">
                <Form.Group as={Col} md={6} lg={6} controlId="formGridName">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="name"
                      name="name"
                      id="name"
                      value={formInput.name}
                      onChange={handleChange}
                      placeholder="Enter Your name"
                      required
                      className="input"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md={6}
                  lg={6}
                  controlId="formGridDepartment"
                >
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Department"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      id="department"
                      required
                      name="department"
                      value={formInput.department}
                      onChange={handleChange}
                      className="input"
                    >
                      <option>Select</option>
                      <option value="Bca">Bca</option>
                      <option value="Bsc">Bsc</option>
                      <option value="B.com">B.com</option>
                      <option value="Mca">Mca</option>
                      <option value="Msc">Msc</option>
                      <option value="M.com">M.com</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md={6} lg={6} controlId="formGridMobile">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Mobile"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="mobile"
                      id="mobile"
                      value={formInput.mobile}
                      onChange={handleChange}
                      placeholder="Enter Your Mobile"
                      required
                      className="input"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md={6} lg={6} controlId="formGridBirthday">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Birthday"
                    className="mb-2"
                  >
                    <Form.Control
                      type="date"
                      name="birthday"
                      id="birthday"
                      value={formInput.birthday}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md={6} lg={6} controlId="formGridAddress">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="address"
                      id="address"
                      value={formInput.address}
                      onChange={handleChange}
                      placeholder="Enter Your Address"
                      required
                      className="input"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md={6} lg={6} controlId="formGridCity">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="City"
                    className="mb-2"
                  >
                    <Form.Control
                      type="text"
                      name="city"
                      id="city"
                      value={formInput.city}
                      onChange={handleChange}
                      placeholder="Enter Your City"
                      required
                      className="input"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md={6} lg={6} controlId="formGridEmail">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      value={formInput.email}
                      onChange={handleChange}
                      placeholder="Enter Your email"
                      required
                      className="input"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md={6} lg={6} controlId="formGridPassword">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Password"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      name="password"
                      id="password"
                      value={formInput.password}
                      onChange={handleChange}
                      placeholder="Enter Your Password"
                      required
                      className="input"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md={6} lg={6} controlId="formGridGender">
                  <Form.Label className="check">Gender:</Form.Label>
                  <div className="d-flex">
                    <Form.Check
                      inline
                      type="radio"
                      label="Male"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleChange}
                      checked={formInput.gender === "male"}
                      required
                      className="me-4 check"
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Female"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleChange}
                      checked={formInput.gender === "female"}
                      required
                      className="check"
                    />
                  </div>
                </Form.Group>

                <Form.Group as={Col} md={6} lg={6} controlId="formGridRole">
                  <Form.Label className="me-2 check">Role:</Form.Label>
                  <Form.Check
                    type="radio"
                    label="User"
                    name="role"
                    value="user"
                    onChange={handleChange}
                    checked={formInput.role === "user"}
                    required
                    className="check"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  className="check"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="form-btn">
                Register
              </Button>
            </Form>
            <p>
              Already have an account?{""}
              <span className="form-change" onClick={formchange}>
                LogIn
              </span>
            </p>
          </div>
        ) : (
          <div className="login-form">
            <h2>Login</h2>
            <Form onSubmit={handlelogin}>
              <Form.Group as={Col} controlId="formGridEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    value={formInput.email}
                    onChange={handleChange}
                    placeholder="Enter Your email"
                    required
                    className="input"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    name="password"
                    id="password"
                    value={formInput.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    required
                    className="input"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  className="check"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="form-btn">
                Login
              </Button>
            </Form>
            <p>
              Don't have an account?{" "}
              <span className="form-change" onClick={formchange}>
                Create Account
              </span>
            </p>
          </div>
        )}
      </div>
      <Toaster />
    </section>
  );
};

export default Loginregister;
