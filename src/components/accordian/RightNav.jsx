import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog, faBell } from "@fortawesome/free-solid-svg-icons";
import "../accordian/RightNav.css";



// const RightNavbar = () => {
//     return (
//       <div className="right-navbar">
//         <FontAwesomeIcon icon={faHome} className="nav-icon" />
//         <FontAwesomeIcon icon={faUser} className="nav-icon" />
//         <FontAwesomeIcon icon={faBell} className="nav-icon" />
//         <FontAwesomeIcon icon={faCog} className="nav-icon" />
//       </div>
//     );
//   };
  
//   export default RightNavbar;






 
  import progressIcon from "../../assets/icons/progress.png";
  import statisticsIcon from "../../assets/icons/statistic.png";
  import statisticsIconArrow from "../../assets/icons/statistic1.png";
  import notesIcon from "../../assets/icons/notes.png";
  import highlightsIcon from "../../assets/icons/Highlits.png";

   
  const Sidebar = () => {
    return (
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul>
            <li>
              <img src={progressIcon} alt="Progress" />
            </li>
            <li>
            <img src={statisticsIconArrow} alt="Arrow" className="arrow-icon" />
              <img src={statisticsIcon} alt="Statistics" />
            </li>
            <li>
              <img src={notesIcon} alt="Notes" />
            </li>
            <li>
              <img src={highlightsIcon} alt="Highlights" />
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
   
  export default Sidebar;

