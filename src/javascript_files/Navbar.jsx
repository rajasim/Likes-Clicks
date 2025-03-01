import React, { useRef } from "react";
import "../css_files/Navbar.css";

function Navbar() {
  const service = useRef();
  return (
    <nav
      className="navbar"
      onMouseLeave={() => {
        if (service.current) {
          service.current.style.display = "none";
        }
      }}
    >
      <h1>Likes and Clicks</h1>
      <blockquote>
        <mark>
          
        </mark>
        <mark
          onMouseEnter={() => {
            if (service.current) {
              service.current.style.display = "block";
            }
          }}
        >
          <h3>Services</h3>
          <i className="fa-solid fa-angle-down" />
        </mark>
        <mark>
          <h3>About Us</h3>
        </mark>
        <mark>
          <h3>Blog</h3>
        </mark>
        <mark>
          <h3>Contact Us</h3>
          <i className="fa-solid fa-arrow-right" />
        </mark>
      </blockquote>
      <div
        className="navbar-service"
        ref={service}
        onMouseLeave={() => {
          if (service.current) {
            service.current.style.display = "none";
          }
        }}
      >
        <ul>
          <li> <a href="#aboutus">Marketing Automation</a></li>
          <li><a a href="#aboutus">SEO (Search Engine Optimization)</a></li>
          <li><a a href="#aboutus">CRO (Conversion Rate Optimization)</a></li>
          <li><a a href="#aboutus">App development</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
