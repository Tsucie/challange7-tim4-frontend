import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";

import { registerUser, loginWithGoogle } from "../redux/actions/authActions";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fullname === "") {
      alert("Username Kosong");
    }
    if (email === "") {
      alert("Email Kosong");
    }
    if (password === "") {
      alert("Password Kosong");
    }
    if (confPassword === "") {
      alert("Confirm Password Kosong");
    }
    if ( fullname !== "" && email !== "" && password !== "" && confPassword !== "") {
      dispatch(registerUser({ email, password, confPassword, fullname }));
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch(loginWithGoogle(tokenResponse.access_token));
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <>
      {!isAuthenticated ? (
        <div className="bg-aliceblue text-center m-5 auto">
          <Container className="py-5">
            <Row className="pb-5">
              <Col lg={5} className="my-auto form-register">
                <Form onSubmit={handleSubmit}>
                  <h3>Create Your Personal Account</h3>
                  <div className="form-group">
                    <label className="labelLogin">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="labelLogin">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="labelLogin">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="labelLogin"> Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter confirm password"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-md btn-block col-12 text-light signIn"
                  >
                    Register
                  </button>
                  <br></br>

                  <button
                    type="button"
                    onClick={() => googleLogin()}
                    className="btn btn-md btn-block col-12 text-light signGoogle"
                  >
                    <i className="bi bi-google me-2"></i>Register with Google
                  </button>
                  <br></br>

                  <p>
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      required
                    />

                    <span>
                      I agree all statements in 
                      <a
                        href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        terms of service
                      </a>
                    </span>
                  </p>

                  <p className="sign-up text-right">
                    Already have an Account? <a href="/login">Login Here</a>
                  </p>

                  <p>
                    <a href="/">Back to Homepage</a>
                  </p>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RegisterPage;
