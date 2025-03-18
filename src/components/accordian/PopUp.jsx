import React from "react";
import '../accordian/Popup.css';
import Ailogo from '../../assets/icons/Tlogo.png';

 
function PopUp ({onClose}){
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
          <button onClick={onClose}>Yes</button>
        </div>
      </div>
    </div>

        </>
    )

}
export default PopUp;