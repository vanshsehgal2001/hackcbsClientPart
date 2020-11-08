import React from "react";
import "../Footer.css";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
    <ScrollAnimation animateIn="rubberBand">
      <footer
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          marginTop: "30px",
          paddingBottom: "60px",
        }}
        class="site-footer"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p
                style={{ color: "white", fontSize: "20px" }}
                class="copyright-text"
              >
                Copyright &copy; 2020 All Rights Reserved by <br />
                <span
                  style={{ marginTop: "10px", fontSize: "20px" }}
                  class="badge badge-secondary"
                >
                  Summarizer
                </span>
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </ScrollAnimation>
  );
};

export default Footer;
