import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css'

import Chapter from './components/accordian/Chapter'
import TopCrumb from './learning_section/TopCrumb'
import ChapterDropdown from './learning_section/TopCrumb'
import Dropdown from './learning_section/Dropdown'
import ChapterOne from './components/accordian/sample'
import TrueFalsePage from './learning_section/TrueFalse'
import PopUp from './components/accordian/PopUp';



function App() {

 

  return (
    <>
    
    <Chapter />
      <Routes>
        <Route path="/" element={<PopUp />} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
      
     
      {/* <TopCrumb/> */}
      {/* <Dropdown/> */}
      {/* <ChapterOne/> */}
      {/* <TrueFalsePage/> */}
    </>
  )
}

export default App
