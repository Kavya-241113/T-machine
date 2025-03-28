import React from "react";
import { useNavigate } from "react-router-dom";
import '../accordian/Popup.css';
import Ailogo from '../../assets/icons/Tlogo.png';


function PopUp ({onClose}){
  const navigate = useNavigate();

  const handleNavigate = () => {
    onClose(); // Optionally update local state before navigating
    navigate("/dropdown", { replace: true });
  };
    return(
        <>
    <div className="popup-overlay">
    
      <div className="popup-container">
      
        <div className="popup-message">
        <img src={Ailogo} alt="Ailogo" className="Tlogo" />
          <p className="pop-p">
           You're about to begin your learning journey! Dive in,
           explore, and enhance your knowledge. Let's get started!
          </p>
        </div>
        <div className="popup-button">
        <button onClick={handleNavigate}>Yes</button>    
        </div>
      </div>
    </div>

        </>     
    )      

}
export default PopUp;




