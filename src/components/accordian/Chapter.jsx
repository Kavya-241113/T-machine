import React, { useState } from "react";
import "../accordian/Chapter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,  } from "@fortawesome/free-solid-svg-icons";
import  book from "../../assets/icons/book.png";


import TopBar from "./TopBar";

import PopUp from "./PopUp";
import Sidebar from "./RightNav";
import Topic from "./sample";

const topics = [
    "Evaluate Mathematical Expressions in Python",
    "Find the GCD and LCM of Two Numbers",
    "Convert Decimal to Binary and Hexadecimal",
    "Swap Two Variables Without Temp Variable",
    "Generate Random Numbers Using Python"
  ];


  
const Chapter = ({ onStartLearning }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(-1);


  const handleStartLearning = () => {
    setPopupVisible(true);
  };

  const handleChapterClick = (index) => {
    if (selectedChapter === index) {
      setSelectedChapter(-1); // close if already open
    } else {
      setSelectedChapter(index);
    }
  };

  return (


    <div className="main-cont">
        <TopBar/>
        <div className="out-comt">
        <div className="arrow-container">
        Python Course
       </div>
       <div id="btn-lern">
       <button className="btn-start" onClick={handleStartLearning}>
        Start learning
      </button>
      {isPopupVisible && (
        <PopUp
          onClose={() => {
            setPopupVisible(false);
            onStartLearning(); // trigger global change to show Dropdown
          }}
        />
      )}
       </div>

       
       <Sidebar/>
        </div>
        <div className="inner-cont d-flex align-items-start gap-4">
  {/* Left Section - Buttons */}
  <div className="d-flex flex-column align-items-start gap-4" id="btns-chap">
    <p id="No">Chapter No</p>
    
   

 {[...Array(5)].map((_, index) => (
            <div key={index} >
              <button
                className="btn chapter-btn"
                onClick={() => handleChapterClick(index)}
              >
                <img src={book} className="icon-left" alt="Book Icon" />
                Chapter - {index + 1}
                <FontAwesomeIcon icon={faChevronDown} className="icon-right" />
              </button>

              {/* If this chapter is selected, show the Topic component below */}
              {selectedChapter === index && (
                <div style={{ marginLeft: "20px" }}>
                <Topic/>
                </div>
              )}
            </div>
          ))}

  </div>

  {/* Right Section - Cards */}
  <div className="math-container">
    <p id="chap">Chapter </p>
    {topics.map((topic, index) => (
      <div key={index} className="math-card">
       <p className="topic"> {topic}</p>
      </div>
    ))}
  </div>
</div>

       
<div className="footer">
      <a href="#">Terms and Conditions</a> | 
      <a href="#">Privacy Policy</a> | 
      <a href="#">About Us</a> | 
      <a href="#">Refund Policy</a>
    </div>
    {isPopupVisible && <PopUp onClose={() => setPopupVisible(false)} />}

    </div>

   
  );
};

export default Chapter;



















