import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope, faUser, faCog, faSignOutAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import '../accordian/TopBar.css';
import tmachine from "../../assets/tai_logo.png";
import vector from "../../assets/icons/Vector.png";
import home from "../../assets/icons/Home.png";
import file from "../../assets/icons/file.png";
import slider from "../../assets/icons/slider.png";
import group from "../../assets/icons/Group.png";
import power from "../../assets/icons/power.png";


const TopBar = () => {
  return (
    <div className="topbar-container">
      <nav className="topbar">
        {/* Left Side - Brand Name */}
        <div>
            <img src={tmachine} alt="logo" />
        </div>
        

        {/* Right Side - Icons */}
        <div className="icons">
          <img src={vector} alt="vector" size="lg" className="icon" />
          <img src={home} alt="home" size="lg" className="icon" />
          <img src={file} alt="file" size="lg" className="icon" />
          <img src={slider} alt="slider" size="lg" className="icon" />
          <img src={group} alt="group" size="lg" className="icon" />
          <img src={power} alt="power" size="lg" className="icon logout-icon" />
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
