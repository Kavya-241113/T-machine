import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog, faBell } from "@fortawesome/free-solid-svg-icons";
import "../accordian/RightNav.css";



const RightNavbar = () => {
    return (
      <div className="right-navbar">
        <FontAwesomeIcon icon={faHome} className="nav-icon" />
        <FontAwesomeIcon icon={faUser} className="nav-icon" />
        <FontAwesomeIcon icon={faBell} className="nav-icon" />
        <FontAwesomeIcon icon={faCog} className="nav-icon" />
      </div>
    );
  };
  
  export default RightNavbar;
