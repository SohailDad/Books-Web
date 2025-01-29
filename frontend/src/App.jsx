import React from "react";
import Home from "./home/Home";
import { Route, Routes } from 'react-router-dom'
import Courses from "./courses/Courses";
import SignUp from "./components/SignUp";

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
          <Route path="/signup" element={<SignUp />} />
        </Routes>

    </>

    // 1:54:55
  )
}

export default App
