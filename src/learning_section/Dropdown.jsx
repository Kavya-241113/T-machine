import React, { useState } from "react";
import TopBar from "../components/accordian/TopBar";
import "../components/accordian/Chapter.css";
import TopCrumb from "./TopCrumb";
import  book from "../assets/icons/book.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,  } from "@fortawesome/free-solid-svg-icons";
import Ailogo from "../assets/icons/Tlogo.png";

function Dropdown (){
    const [selectedButton, setSelectedButton] = useState(null);
    const [readChapters, setReadChapters] = useState({});


    const handleButtonClick = (index) => {
        if (selectedButton === index + 1) {
          // If closing, mark chapter as "read"
          setReadChapters((prev) => ({ ...prev, [index + 1]: true }));
          setSelectedButton(null);
        } else {
          setSelectedButton(index + 1);
        }
      };


    return(
        <>
         <TopBar/>
         
        <div className="arrow-container">
        Python Course
       </div>
      
       <div>
        <TopCrumb/>
       </div>

         <div className="d-flex flex-column align-items-start gap-4" id="btns-chap" style={{width:'120px',height:'500px',backgroundColor:'#EDF2FF',border:'1px solid #EDF2FF'}}>
            <p id="No" style={{position:'relative',top:'-30px'}}>Chapter No</p>

           {[...Array(5)].map((_,index) => {
            let chapterNumber = index + 1;
          let isReading = selectedButton === chapterNumber;
          let isRead = readChapters[chapterNumber];
          return(

            <button  key={index} className="btn chapter-btn" 
             onClick={() => handleButtonClick(index)}
            style={{width:'100px',
            backgroundColor:'#E1EAFF', position:'relative',top:'-40px',left:'10px'}}>
                <img src={book} className="icon-left" alt="Book Icon" style={{position:'relative',right:'10px', 
                  filter: isReading
                    ? "invert(31%) sepia(46%) saturate(530%) hue-rotate(248deg) brightness(91%) contrast(94%)" // Purple while reading
                    : isRead
                    ? "invert(40%) sepia(90%) saturate(500%) hue-rotate(100deg)" // Green after reading
                    : "none", // Default color
                 }}/>

                {chapterNumber}
                <FontAwesomeIcon icon={faChevronDown} className="icon-right" style={{width:'20px',height:'10px'}} />

            </button>
           )})}
         </div>
          {/* Display Content when a Chapter is Clicked */}
          {selectedButton !== null && (
            
            <div  className="content-container"

            style={{
                border: "2px solid pink", // Pink border
                padding: "15px",
                width: "1000px",
                height:'200px',
                position: 'relative',
                top:'-500px',
                left:'200px',
                marginTop: "20px",
                backgroundColor: "#fff",
              }}
            >
                    <img src={Ailogo} alt="Ailogo" className="Tlogo" style={{
                         width: '44px',
                         height: '47px',
                         position: 'relative',
                         right:'490px',
                         top: '-30px'
                    }} />
                <div style={{
                    fontSize:'16px',
                    fontWeight:'400',
                    lineHeight:'30px',
                    letterSpacing:'5%',
                    position:'relative',
                    top:'-40px',
                    right:'20px'
                    
                }}>
                    <div>
                    <span>Python Tutorial - Python is one of the most popular programming languages today,
                    known for its simplicity, extensive</span>
                    </div>
            <div>
                <span>features, and library support. Its clean and straightforward
            syntax makes it beginner-friendly, while its powerful libraries...</span>
            </div>

            
          </div>



            </div>
          )}

       




         <div className="footer" style={{position:'relative',top:'00px'}}>
      <a href="#">Terms and Conditions</a> | 
      <a href="#">Privacy Policy</a> | 
      <a href="#">About Us</a> | 
      <a href="#">Refund Policy</a>
    </div>

        </>
    )

}
export default Dropdown;