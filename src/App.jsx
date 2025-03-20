import { useState } from 'react'

import './App.css'

import Chapter from './components/accordian/Chapter'
import TopCrumb from './learning_section/TopCrumb'
import ChapterDropdown from './learning_section/TopCrumb'
import Dropdown from './learning_section/Dropdown'
import ChapterOne from './components/accordian/sample'
import TrueFalsePage from './learning_section/TrueFalse'



function App() {

 

  return (
    <>
      
      {/* <Chapter/>  */}
      {/* <TopCrumb/> */}
      {/* <Dropdown/> */}
      {/* <ChapterOne/> */}
      <TrueFalsePage/>
    </>
  )
}

export default App
