// import React from "react";
// import "../accordian/sample.css";
// import book from "../../assets/icons/book.png";

// const SubtopicModal = ({ isOpen, onClose, subtopics }) => {
//   if (!isOpen) return null;

//   return (
    
//     <div className="subtopic-cont d-flex align-items-start gap-4">
//       {/* Left Section - Buttons */}
//       <div className="d-flex flex-column align-items-start gap-4" id="btns-subtopic">
//         <p id="No" style={{position:'relative',top:'20px',color:'#E77500'}}>Subtopic No</p>
//         {[...Array(3)].map((_, index) => (
//           <button key={index} className="btn subtopic-btn">
//             <img src={book} className="icon-left" alt="Book Icon" />
//             SubTopic - {index + 1}
            
//           </button>
//         ))}
//         </div>
//         <div className="math-container">
//         <p id="chap" style={{color:'#E77500'}}>SubTopic </p>
//         {subtopics.map((subtopic, index) => (
//           <div key={index} className="subtopic-card">
//            <p className="topic"> {subtopic}</p>
//           </div>
//         ))}
//         </div>
//     </div>
// )}

// export default SubtopicModal;
