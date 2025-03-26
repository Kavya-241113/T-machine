import { useState } from 'react'
import { Routes, Route } from "react-router-dom";


import './App.css'

import Chapter from './components/accordian/Chapter'
import TopCrumb from './learning_section/TopCrumb'
import ChapterDropdown from './learning_section/TopCrumb'
import Dropdown from './learning_section/Dropdown'
import ChapterOne from './components/accordian/sample'
import TrueFalsePage from './learning_section/TrueFalse'
import PopUp from './components/accordian/PopUp';



function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      <Chapter />
      {showPopup && <PopUp onClose={() => setShowPopup(false)} />}
      <Routes>
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
    </>
  );
}

export default App;
