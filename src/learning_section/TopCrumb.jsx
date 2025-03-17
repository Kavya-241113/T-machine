

import React, { useState } from "react";
import { Navbar, Container, Breadcrumb, Dropdown } from "react-bootstrap";
import bookIcon from "../assets/icons/book-1.png";  
import topicIcon from "../assets/icons/topic.png"; 
import subtopicIcon from "../assets/icons/subtopic.png"; 
import '../learning_section/TopCrumb.css';
const TopCrumb = () => {
  
  const [selectedChapter, setSelectedChapter] = useState("Chapter - 1 : Evaluate Mathematical Expre...");
  const [selectedTopic, setSelectedTopic] = useState("Topic - 1 : Merge Two Lists Without Using...");
  const [selectedSubtopic, setSelectedSubtopic] = useState("Subtopic - 1 : Combine two lists using...");

  const chapters = [
    "Chapter - 1 : Evaluate Mathematical Expre...",
    "Chapter - 2 : Python Tutorial Python is one of the...",
    "Chapter - 3 : Foundational These are the...",
    "Chapter - 4 : collections of data including lists..."
  ];

  const topics = [
    "Topic - 1 : Merge Two Lists Without Using...",
    "Topic - 2 : Python Tutorial - Python is one of the...",
    "Topic - 3 : Foundational Libraries: These are the...",
    "Topic - 4 : collections of data types, including lists..."
  ];

  const subtopics = [
    "Subtopic - 1 : Merge Two Lists Without Using...",
    "Subtopic - 2 : Python Tutorial - Python is one of the...",
    "Subtopic - 3 : Foundational These are the...",
    "Subtopic - 4 : collections of including lists..."
  ];

  return (
    <>
      {/* Top Bar with Breadcrumb */}
      
        <Container fluid className="crumb">
          <Breadcrumb className="mb-0">

            {/* Chapter Dropdown */}
            <Dropdown id="chapter">
              <Dropdown.Toggle variant="link" className="text-dark" style={{ textDecoration: 'none' }}>
                <img src={bookIcon} className="me-2" alt="Book Icon" /> {selectedChapter}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {chapters.map((ch, index) => (
                  <Dropdown.Item key={index} onClick={() => setSelectedChapter(ch)}>
                    <img src={bookIcon} className="me-2" alt="Book Icon"  style={{width:'16px',height:'9px'}}/> {ch}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* Topic Dropdown */}
            <Dropdown id="topic">
              <Dropdown.Toggle variant="link" className="text-dark" style={{ textDecoration: 'none' }}>
                <img src={topicIcon} className="me-2" alt="Topic Icon"  style={{width:'16px',height:'9px'}}/> {selectedTopic}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {topics.map((tp, index) => (
                  <Dropdown.Item key={index} onClick={() => setSelectedTopic(tp)}>
                    <img src={topicIcon} className="me-2" alt="Topic Icon" style={{width:'16px',height:'9px'}} /> {tp}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* Subtopic Dropdown */}
            <Dropdown id="subtopic">
              <Dropdown.Toggle variant="link" className="text-dark" style={{ textDecoration: 'none' }}>
                <img src={subtopicIcon} className="me-2" alt="Subtopic Icon" /> {selectedSubtopic}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {subtopics.map((st, index) => (
                  <Dropdown.Item key={index} onClick={() => setSelectedSubtopic(st)}>
                    <img src={subtopicIcon} className="me-2" alt="Subtopic Icon" /> {st}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

          </Breadcrumb>
          
        </Container>
      
    </>
  );
};

export default TopCrumb;
