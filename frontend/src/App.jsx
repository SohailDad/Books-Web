import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from "./courses/Courses";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {

  const [authUser, setAuthUser] = useAuth()
  // console.log(authUser)

  return (

    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={authUser ? <Courses /> : <Navigate to='/signup'/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </>

    // 3:50:51
  )
}

export default App
