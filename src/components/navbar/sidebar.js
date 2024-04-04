import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./sidebar.css";

const Sidebar = ({
  homeRef,
  servicesRef,
  skillsRef,
  projectsRef,
  timelineRef,
  testimonialsRef,
  contactsRef,
}) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleCloseClick = () => {
    setShowSidebar(false);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setShowSidebar(false);
  };

  return showSidebar ? (
    <div className="sidebar">
      <AiOutlineClose className="close-icon" onClick={handleCloseClick} />
      <ul className="sidebar-items">
        <li className="sidebar-item" onClick={() => scrollToSection(homeRef)}>
          Home
        </li>
        <li
          className="sidebar-item"
          onClick={() => scrollToSection(servicesRef)}
        >
          Services
        </li>
        <li className="sidebar-item" onClick={() => scrollToSection(skillsRef)}>
          Skills
        </li>
        <li
          className="sidebar-item"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </li>
        <li
          className="sidebar-item"
          onClick={() => scrollToSection(timelineRef)}
        >
          Timeline
        </li>
        <li
          className="sidebar-item"
          onClick={() => scrollToSection(testimonialsRef)}
        >
          Testimonial
        </li>
        <li
          className="sidebar-item"
          onClick={() => scrollToSection(contactsRef)}
        >
          Contact Form
        </li>
      </ul>
    </div>
  ) : null;
};

export default Sidebar;
