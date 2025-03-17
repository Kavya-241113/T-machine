

      
      





































// import React, { useState } from "react";
// import "../accordian/Chapter.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import book from "../../assets/icons/book.png";

// import TopBar from "./TopBar";
// import RightNavbar from "./RightNav";
// import PopUp from "./PopUp";

// // Sample Data
// const chapters = [
//   {
//     id: 1,
//     title: "Evaluate Mathematical Expressions in Python",
//     topics: [
//       {
//         id: 1,
//         title: "Merge Two Lists Without Using Extend",
//         subtopics: [
//           { id: 1, title: "Using Loops and Operators" },
//           { id: 2, title: "Using Built-in Functions" },
//           { id: 3, title: "Using List Comprehensions" },
//         ],
//       },
//       {
//         id: 2,
//         title: "Understanding Python Arithmetic Operations",
//         subtopics: [
//           { id: 1, title: "Addition & Subtraction" },
//           { id: 2, title: "Multiplication & Division" },
//           { id: 3, title: "Exponentiation & Modulus" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Find the GCD and LCM of Two Numbers",
//     topics: [],
//   },
// ];

// const ChapterOne = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);
//   const [expandedChapters, setExpandedChapters] = useState({});
//   const [expandedTopics, setExpandedTopics] = useState({});

//   const toggleChapter = (id) => {
//     setExpandedChapters({ ...expandedChapters, [id]: !expandedChapters[id] });
//   };

//   const toggleTopic = (id) => {
//     setExpandedTopics({ ...expandedTopics, [id]: !expandedTopics[id] });
//   };

//   return (
//     <div className="main-cont">
//       <TopBar />
//       <div className="out-comt">
//         <div className="arrow-container">Python Course</div>
//         <div id="btn-lern">
//           <button className="btn-start" onClick={() => setPopupVisible(true)}>
//             Start Learning
//           </button>
//         </div>
//         <RightNavbar />
//       </div>

//       {/* Main Container */}
//       <div className="inner-cont d-flex align-items-start gap-4">
//         {/* Left - Chapter Buttons */}
//         <div className="d-flex flex-column align-items-start gap-4" id="btns-chap">
//           <p id="No">Chapter No</p>
//           {chapters.map((chapter) => (
//             <button
//               key={chapter.id}
//               className="btn chapter-btn"
//               onClick={() => toggleChapter(chapter.id)}
//             >
//               <img src={book} className="icon-left" alt="Book Icon" />
//               {chapter.title}
//               <FontAwesomeIcon icon={expandedChapters[chapter.id] ? faChevronUp : faChevronDown} className="icon-right" />
//             </button>
//           ))}
//         </div>

//         {/* Right - Chapter Details */}
//         <div className="math-container">
//           {chapters.map(
//             (chapter) =>
//               expandedChapters[chapter.id] && (
//                 <div key={chapter.id} className="chapter-details">
//                   <p id="chap">Chapter {chapter.id}</p>

//                   {/* Topics Section */}
//                   {chapter.topics.length > 0 ? (
//                     chapter.topics.map((topic) => (
//                       <div key={topic.id} className="topic-card">
//                         <div className="topic-header" onClick={() => toggleTopic(topic.id)}>
//                           <span className="topic-no">Topic-{topic.id}</span>
//                           <span className="topic-title">{topic.title}</span>
//                           <FontAwesomeIcon icon={expandedTopics[topic.id] ? faChevronUp : faChevronDown} className="icon-right" />
//                         </div>

//                         {/* Subtopics Section */}
//                         {expandedTopics[topic.id] && (
//                           <div className="subtopics-container">
//                             {topic.subtopics.map((subtopic) => (
//                               <div key={subtopic.id} className="subtopic-card">
//                                 <span className="subtopic-no">Subtopic-{subtopic.id}</span>
//                                 <span className="subtopic-title">{subtopic.title}</span>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))
//                   ) : (
//                     <p className="no-topics">No topics available.</p>
//                   )}
//                 </div>
//               )
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="footer">
//         <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a> |{" "}
//         <a href="#">About Us</a> | <a href="#">Refund Policy</a>
//       </div>

//       {isPopupVisible && <PopUp onClose={() => setPopupVisible(false)} />}
//     </div>
//   );
// };

// export default ChapterOne;



























import React, { useState } from "react";
import "../accordian/Chapter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,  } from "@fortawesome/free-solid-svg-icons";
import  book from "../../assets/icons/book.png";


import TopBar from "./TopBar";
import RightNavbar from "./RightNav";
import PopUp from "./PopUp";

const topic = [
    "Merge Two Lists Without Using Extend",
    "Merge Two Lists Without Using Extend",
    "Merge Two Lists Without Using Extend",
    "Merge Two Lists Without Using Extend",
    
  ];


  
const Topic = () => {
    const [isPopupVisible,setPopupVisible] = useState(false)


  return (


    <div className="main-cont">
        <TopBar/>
        <div className="out-comt">
        <div className="arrow-container">
        Python Course
       </div>
       <div id="btn-lern">
        <button className="btn-start" onClick={() => setPopupVisible(true)} > Start learning</button>
        
       </div>
       
       <RightNavbar/>
        </div>
        <div className="inner-cont d-flex align-items-start gap-4">
  {/* Left Section - Buttons */}
  <div className="d-flex flex-column align-items-start gap-4" id="btns-chap">
    <p id="No">Topic No</p>
    {[...Array(5)].map((_, index) => (
      <button key={index} className="btn chapter-btn">
        <img src={book} className="icon-left" alt="Book Icon" />
        Topic - {index + 1}
        <FontAwesomeIcon icon={faChevronDown} className="icon-right" />
      </button>
    ))}
  </div>

  {/* Right Section - Cards */}
  <div className="math-container">
    <p id="chap">Topic </p>
    {topic.map((topic, index) => (
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

export default Topic;



















