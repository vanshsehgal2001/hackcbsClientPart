import React, { Fragment, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import AuthContext from "../context/auth/authContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (authContext.isAuthenticated) {
      props.history.push("/");
    }
  }, [authContext.error, authContext.isAuthenticated]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    authContext.login({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <Animated animationIn="swing" isVisible={true}>
      <div style={{ textAlign: "center" }}>
        <section className="container">
          <h1
            className="large text-primary"
            style={{ marginTop: "100px", marginBottom: "40px" }}
          >
            Login
          </h1>
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group mb-4">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => onChange(e)}
                name="email"
                required
              />
            </div>
            <div className="form-group mt-4 mb-4">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={formData.password}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
          <p className="my-1">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </section>
      </div>
    </Animated>
  );
};

export default Login;
