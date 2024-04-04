// Navbar.js

import { FaBars } from "react-icons/fa";
import logo from "./svg-path (1).svg";
import logo2 from "./Designer.png";
import "./navbar.css";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";

const Navbar = ({
  homeRef,
  servicesRef,
  skillsRef,
  projectsRef,
  timelineRef,
  testimonialsRef,
  contactsRef,
}) => {
  const [showNavItems, setShowNavItems] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      setShowNavItems(false);
    } else {
      setShowNavItems(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #FFA07A, #FFA07A, red)",
        }}
      >
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar-C">
        <div className="navbar-left">
          <motion.img
            src={logo2}
            alt="logo"
            className="navbar-logo"
            animate={{
              x: [1, -1, 1, -1, 1, -1],
              y: [1, -1, 1, -1, 1, -1],
            }}
            transition={{
              x: {
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                repeat: Infinity,
                duration: 1,
              },
              y: {
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                repeat: Infinity,
                duration: 1,
              },
            }}
          />
        </div>
        <div className="navbar-right">
          {showNavItems ? (
            <ul className="navbar-items">
              <li
                className="navbar-item"
                onClick={() => scrollToSection(homeRef)}
              >
                Home
              </li>
              <li
                className="navbar-item"
                onClick={() => scrollToSection(servicesRef)}
              >
                Services
              </li>
              <li
                className="navbar-item"
                onClick={() => scrollToSection(skillsRef)}
              >
                Skills
              </li>
              <li
                className="navbar-item"
                onClick={() => scrollToSection(projectsRef)}
              >
                Projects
              </li>
              <li
                className="navbar-item"
                onClick={() => scrollToSection(timelineRef)}
              >
                Timeline
              </li>
              <li
                className="navbar-item"
                onClick={() => scrollToSection(testimonialsRef)}
              >
                Testimonial
              </li>
              <li
                className="navbar-item"
                onClick={() => scrollToSection(contactsRef)}
              >
                Contact Form
              </li>
            </ul>
          ) : (
            <FaBars
              className="navbar-icon"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          )}
          {showSidebar && (
            <Sidebar
              homeRef={homeRef}
              servicesRef={servicesRef}
              skillsRef={skillsRef}
              projectsRef={projectsRef}
              timelineRef={timelineRef}
              testimonialsRef={testimonialsRef}
              contactsRef={contactsRef}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
