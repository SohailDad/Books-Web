import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    
    // <div className="bg-white-500">
    //   <Home />
    //   <Course/>
    // </div>
    
    <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Routes>

    </>

    // 1:22:9
  )
}

export default App
