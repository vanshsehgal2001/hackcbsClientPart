import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <>
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <h1
          style={{
            textAlign: "center",
            letterSpacing: "20px",
            marginTop: "40px",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          About
        </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="flash">
        <div className="container">This is about page...</div>
      </ScrollAnimation>
    </>
  );
};

export default About;
