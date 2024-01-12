import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";

function MainSection() {
  return (
    <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue/>}></Route>
          <Route path='/red' element={<Red/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
  )
}

export default MainSection