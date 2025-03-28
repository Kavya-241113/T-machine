import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";



import './App.css'

import Chapter from './components/accordian/Chapter'
import TopCrumb from './learning_section/TopCrumb'
import ChapterDropdown from './learning_section/TopCrumb'
import Dropdown from './learning_section/Dropdown'
import ChapterOne from './components/accordian/sample'
import TrueFalsePage from './learning_section/TrueFalse'
import PopUp from './components/accordian/PopUp';
import Topic from './components/accordian/sample';



function App() {
  const [learningStarted, setLearningStarted] = useState(false);
  

  return (
    <Routes>
      {/* When learning hasn't started, render Chapter at "/" */}
      <Route 
        path="/" 
        element={
          learningStarted 
            ? <Navigate to="/dropdown" replace /> 
            : <Chapter onStartLearning={() => setLearningStarted(true)} />
        }  
      />
      {/* Render Dropdown at "/dropdown" */}
      <Route path="/dropdown" element={<Dropdown />} />
    </Routes>
    // <>
    // <Topic/>
    // </>

  );
}
export default App;
