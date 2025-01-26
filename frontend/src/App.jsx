import React from "react";
import Home from "./home/Home";
import { Route, Routes } from 'react-router-dom'
import Courses from "./courses/Courses";

function App() {

  return (
    
    // <div className="bg-white-500">
    //   <Home />
    //   <Course/>
    // </div>
    
    <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>

    </>

    // 1:22:9
  )
}

export default App
