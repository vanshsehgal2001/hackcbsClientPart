import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";

const Register = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (authContext.isAuthenticated) {
      props.history.push("/");
    }
    if (authContext.error === "User already registered") {
      alertContext.setAlert(authContext.error, "danger");
      authContext.clearError();
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
    if (formData.password !== formData.confirmPassword) {
      alertContext.setAlert("Passwords don't match", "danger");
    } else if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      alertContext.setAlert("Please fill up all the details", "danger");
    } else {
      console.log(formData);
      alertContext.setAlert("User registered successfully!!!", "success");
      authContext.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
    }
  };
  return (
    <Animated
      animationIn="swing"
      //   animationOut="fadeOut"
      isVisible={true}
    >
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <section className="container">
          <h1 className="large text-primary">Register</h1>
          <p style={{ color: "white" }} className="lead">
            <i style={{ color: "white" }} className="fa fa-user"></i> Create
            Your Account
          </p>
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => onChange(e)}
                name="name"
                // required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => onChange(e)}
                name="email"
                // required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                // minLength="6"
                value={formData.password}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                // minLength="6"
                value={formData.confirmPassword}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
          </form>
          <p className="my-1">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </section>
      </div>
    </Animated>
  );
};

export default Register;
