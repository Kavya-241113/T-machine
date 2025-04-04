
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TopBar from "../components/accordian/TopBar";
import "../components/accordian/Chapter.css";
import TopCrumb from "./TopCrumb";
import "../learning_section/TrueFalse.css";
import book from "../assets/icons/book.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function TrueFalsePage() {
    const navigate = useNavigate();
    const location = useLocation();

    const [readChapters, setReadChapters] = useState({});
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [timer, setTimer] = useState(30);
    const [mergeStep, setMergeStep] = useState(location.state?.mergeStep || 0);

    // Countdown Timer Logic
    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    // True/False Questions
    const trueFalseQuestions = [
        { question: "The CPU is responsible for executing instructions for the computer.", answer: true },
        { question: "Python is a statically typed language.", answer: false },
        { question: "Tuples in Python are immutable.", answer: true },
        { question: "Machine learning does not use statistics.", answer: false },
    ];

    const currentQuestion = trueFalseQuestions[mergeStep % trueFalseQuestions.length];

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        if (answer === currentQuestion.answer) {
            console.log("✅ Correct Answer");
        } else {
            console.log("❌ Incorrect Answer");
        }
    };

    const handleNext = () => {
        if (selectedAnswer === currentQuestion.answer) {
            navigate("/subtopic/1/1/1", { state: { mergeStep: mergeStep + 1, showNewContent: true } });
        } else {
            navigate("/subtopic/1/1/1", { state: { mergeStep, showNewContent: false } });
        }
    };

    const handleButtonClick = (index) => {
        if (selectedButton === index + 1) {
            setReadChapters((prev) => ({ ...prev, [index + 1]: true }));
        } else {
            setSelectedButton(index + 1);
        }
    };

    return (
        <>
            <TopBar />
            <div className="arrow-container">Python Course</div>
            <div>
                <TopCrumb />
            </div>

            {/* Chapter Selection */}
            <div className="d-flex flex-column align-items-start gap-4" id="btns-chap" style={{ width: '120px', height: '500px', backgroundColor: '#EDF2FF', border: '1px solid #EDF2FF' }}>
                <p id="No" style={{ position: 'relative', top: '-30px' }}>Chapter No</p>

                {[...Array(5)].map((_, index) => {
                    let chapterNumber = index + 1;
                    let isReading = selectedButton === chapterNumber;
                    let isRead = readChapters[chapterNumber];
                    return (
                        <button key={index} className="btn chapter-btn"
                            onClick={() => handleButtonClick(index)}
                            style={{
                                width: '100px',
                                backgroundColor: '#E1EAFF', position: 'relative', top: '-40px', left: '10px'
                            }}>
                            <img src={book} className="icon-left" alt="Book Icon" style={{
                                position: 'relative', right: '10px',
                                filter: isReading
                                    ? "invert(31%) sepia(46%) saturate(530%) hue-rotate(248deg) brightness(91%) contrast(94%)"
                                    : isRead
                                        ? "invert(40%) sepia(90%) saturate(500%) hue-rotate(100deg)"
                                        : "none",
                            }} />
                            {chapterNumber}
                            <FontAwesomeIcon icon={faChevronDown} className="icon-right" style={{ width: '20px', height: '10px' }} />
                        </button>
                    )
                })}
            </div>
            {/* True/False Section */}
            {selectedButton !== null && (
            <div className="">
            <div className="content">
                <div className="question-section">
                   
                    <div className="question-box">
                    <h2 className="true-false-header">True / False</h2>
                        <p>{currentQuestion.question}</p>
                    </div>

                    {/* Progress Bar & Timer */}
                    <div className="progress-section">
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${(timer / 30) * 100}%` }}></div>
                        </div>
                        <div className="timer-circle">{timer}</div>
                    </div>

                    {/* Answer Buttons */}
                    <div className="answer-buttons">
                        <button className={`answer-btn ${selectedAnswer === true ? "selected" : ""}`} onClick={() => handleAnswerSelection(true)}>True</button>
                        <button className={`answer-btn ${selectedAnswer === false ? "selected" : ""}`} onClick={() => handleAnswerSelection(false)}>False</button>
                    </div>

                    {/* Next Button */}
                    <button className="next-btn" disabled={selectedAnswer === null} onClick={handleNext}>Next</button>
                </div>
            </div>
            </div>
            )}

            {/* Footer */}
            <div className="footer" style={{ position: 'relative', top: '-250px' }}>
                <a href="#">Terms and Conditions</a> |
                <a href="#">Privacy Policy</a> |
                <a href="#">About Us</a> |
                <a href="#">Refund Policy</a>
            </div>
        </>
    );
}

export default TrueFalsePage;
