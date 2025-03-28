

// import React, { useState } from "react";
// import "../accordian/sample.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown,  } from "@fortawesome/free-solid-svg-icons";
// import  book from "../../assets/icons/book.png";
// import topicicon from "../../assets/icons/topicr.png";

// const topic = [
//     "Merge Two Lists Without Using Extend",
//     "Merge Two Lists Without Using Extend",
//     "Merge Two Lists Without Using Extend",
//     "Merge Two Lists Without Using Extend",
    
//   ];
//   const subtopic =[
//     "Combine two lists using loops, the + operator, or the...",
//     "Combine two lists using loops, the + operator, or the...",
//     "Combine two lists using loops, the + operator, or the...",

//   ];
  


  
// const Topic = () => {
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [readTopics, setReadTopics] = useState({});
//   const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

//   const handleTopicClick = (index) => {
//     if (selectedTopic === index + 1) {
//       // Mark topic as read when closing
//       setReadTopics((prev) => ({ ...prev, [index + 1]: true }));
//       setSelectedTopic(null);
//     } else {
//       setSelectedTopic(index + 1);

      
//       setPopupPosition({ top: React.top + window.scrollY + 50, left: React.left + 150 });

//     }
//   };
    


//   return (

//     <div className="main-cont">
//         {/* topic container */}
//         <div className="outer-cont d-flex align-items-start gap-4">
//   {/* Left Section - Buttons */}
//   <div className="d-flex flex-column align-items-start gap-4" id="btns-topic">
//     <p id="No">Topic No</p>
//     {[...Array(2)].map((_, index) => {
//         let topicNumber = index + 1;
//         let isReading = selectedTopic === topicNumber;
//         let isRead = readTopics[topicNumber];
//         return(
//       <button key={index} className="btn topic-btn"
//       onClick={() => handleTopicClick(index)}
//       >

//         <img src={topicicon} className="icon-left" alt="Book Icon"
//            style={{
//             filter: isReading
//               ? "invert(31%) sepia(46%) saturate(530%) hue-rotate(248deg) brightness(91%) contrast(94%)" // Purple while reading
//               : isRead
//               ? "invert(40%) sepia(90%) saturate(500%) hue-rotate(100deg)" // Green after reading
//               : "none", // Default color
//           }} />
//         Topic - {topicNumber}
//         <FontAwesomeIcon icon={faChevronDown} className="icon-right" />
//       </button>
//         )
// })}
//      <button  className="btn topic-btn">
//         <img src={book} className="icon-left" alt="Book Icon" />
//         Mini Task
//       </button>

//       {[...Array(2)].map((_, index) => {
//           let topicNumber = index + 3;
//         return(
//       <button key={index} className="btn topic-btn">
//         <img src={topicicon} className="icon-left" alt="Book Icon" />
//         Topic - {topicNumber}

//         <FontAwesomeIcon icon={faChevronDown} className="icon-right" />
//       </button>
//         )
// })}
//      <button  className="btn topic-btn">
//         <img src={book} className="icon-left" alt="Book Icon" />
//         Mini Task
//       </button>


//   </div>

//   {/* Right Section - Cards */}
//   <div className="math-container">
//     <p id="chap">Topic </p>
//     {topic. slice(0,2).map((topic, index) => (
//       <div key={index} className="topic-card">
//        <p className="topic"> {topic}</p>
//       </div>
//     ))}
//      <div className="mini-task-message">
//   <span className="line-text">
//     There will be a mini task after the topic, complete it to proceed to the next topic.
//   </span>
// </div>
// <div className="math-container" style={{position:'relative',top:'10px'}}>
// {topic. slice(0,2).map((topic, index) => (
//       <div key={index} className="topic-card">
//        <p className="topic"> {topic}</p>
//       </div>
//     ))}
// </div>
// <div className="mini-task-message">
//   <span className="line-text">
//   There will be a final challenging task after the topic complete it to proceed to the next chapter.
//   </span>
// </div>
//   </div>
 
// </div>

// {/* subtopic container */}


// {selectedTopic !== null && (
  
//   <div className="subtopic-cont d-flex align-items-start gap-4"
//   style={{ position: "relative",
//     top: `${popupPosition.top}px`,
//     left: `${popupPosition.left}px`,
//     }}
//   >
    
//     <div className="d-flex flex-column align-items-start gap-4" id="btns-subtopic">
//       <p id="No" style={{position:'relative',top:'20px',color:'#E77500'}}>Subtopic No</p>
//       {[...Array(3)].map((_, index) => (
//         <button key={index} className="btn subtopic-btn">
//           <img src={book} className="icon-left" alt="Book Icon" />
//           SubTopic - {index + 1}
          
//         </button>
//       ))}
//       </div>
//       <div className="math-container">
//       <p id="chap" style={{color:'#E77500'}}>SubTopic </p>
//       {subtopic.map((subtopic, index) => (
//         <div key={index} className="subtopic-card">
//          <p className="topic"> {subtopic}</p>
//         </div>
//       ))}
//       </div>
//   </div>
//   )}

//     </div>

   
//   );
// };

// export default Topic;




















import React, { useState } from "react";
import "../accordian/sample.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import book from "../../assets/icons/book.png";
import topicicon from "../../assets/icons/topicr.png";

const topics = [
  "Merge Two Lists Without Using Extend",
  "Merge Two Lists Without Using Extend",
  "Merge Two Lists Without Using Extend",
  "Merge Two Lists Without Using Extend",
];
const subtopics = [
  "Combine two lists using loops, the + operator, or the...",
  "Combine two lists using loops, the + operator, or the...",
  "Combine two lists using loops, the + operator, or the...",
];

const Topic = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [readTopics, setReadTopics] = useState({});

  const handleTopicClick = (index) => {
    if (selectedTopic === index + 1) {
      setReadTopics((prev) => ({ ...prev, [index + 1]: true }));
      setSelectedTopic(null);
    } else {
      setSelectedTopic(index + 1);
    }
  };

  return (
    <div className="main-cont">
      {/* Topic container */}
      <div className="outer-cont d-flex align-items-start gap-4">
        {/* Left Section - Buttons */}
        <div className="d-flex flex-column align-items-start gap-4" id="btns-topic">
          <p id="No">Topic No</p>
          {[...Array(2)].map((_, index) => {
            let topicNumber = index + 1;
            let isReading = selectedTopic === topicNumber;
            let isRead = readTopics[topicNumber];
            return (
              <div key={index}>
                <button 
                  className="btn topic-btn"
                  onClick={() => handleTopicClick(index)}
                >
                  <img 
                    src={topicicon} 
                    className="icon-left" 
                    alt="Topic Icon"
                    style={{
                      filter: isReading
                        ? "invert(31%) sepia(46%) saturate(530%) hue-rotate(248deg) brightness(91%) contrast(94%)"
                        : isRead
                        ? "invert(40%) sepia(90%) saturate(500%) hue-rotate(100deg)"
                        : "none",
                    }} 
                  />
                  Topic - {topicNumber}
                  <FontAwesomeIcon icon={faChevronDown} className="icon-right" />
                </button>
                {/* Render subtopic container below the topic button */}
                {selectedTopic === topicNumber && (
                  <div className="subtopic-cont d-flex align-items-start gap-4">
                    <div className="d-flex flex-column align-items-start gap-4" id="btns-subtopic">
                      <p id="No" style={{ position: 'relative', top: '20px', color: '#E77500' }}>
                        Subtopic No
                      </p>
                      {[...Array(3)].map((_, subIndex) => (
                        <button key={subIndex} className="btn subtopic-btn">
                          <img src={book} className="icon-left" alt="Book Icon" />
                          SubTopic - {subIndex + 1}
                        </button>
                      ))}
                    </div>
                    <div className="math-container">
                      <p id="chap" style={{ color: '#E77500' }}>SubTopic</p>
                      {subtopics.map((subtopic, subIndex) => (
                        <div key={subIndex} className="subtopic-card">
                          <p className="topic">{subtopic}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <button className="btn topic-btn">
            <img src={book} className="icon-left" alt="Book Icon" />
            Mini Task
          </button>
          {[...Array(2)].map((_, index) => {
            let topicNumber = index + 3;
            return (
              <button key={index} className="btn topic-btn">
                <img src={topicicon} className="icon-left" alt="Topic Icon" />
                Topic - {topicNumber}
                <FontAwesomeIcon icon={faChevronDown} className="icon-right" />
              </button>
            );
          })}
          <button className="btn topic-btn">
            <img src={book} className="icon-left" alt="Book Icon" />
            Mini Task
          </button>
        </div>

        {/* Right Section - Cards */}
        <div className="math-container">
          <p id="chap">Topic</p>
          {topics.slice(0, 2).map((topic, index) => (
            <div key={index} className="topic-card">
              <p className="topic">{topic}</p>
            </div>
          ))}
          <div className="mini-task-message">
            <span className="line-text">
              There will be a mini task after the topic, complete it to proceed to the next topic.
            </span>
          </div>
          <div className="math-container" style={{ position: 'relative', top: '10px' }}>
            {topics.slice(0, 2).map((topic, index) => (
              <div key={index} className="topic-card">
                <p className="topic">{topic}</p>
              </div>
            ))}
          </div>
          <div className="mini-task-message">
            <span className="line-text">
              There will be a final challenging task after the topic; complete it to proceed to the next chapter.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;


















































































