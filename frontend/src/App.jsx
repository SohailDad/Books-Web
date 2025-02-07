import React from "react";
import Home from "./home/Home";
import { Route, Routes } from 'react-router-dom'
import Courses from "./courses/Courses";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import { Toaster } from 'react-hot-toast';

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
    </>

    // 3:50:51
  )
}

export default App
