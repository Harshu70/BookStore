import React from "react";
import Homee from "./Home/Homee";
import { Navigate, Route, Routes } from "react-router-dom";
import Course from "./Course/Course";
import Signup from "./Components/Signup";
import { Contact } from "./Components/Contact";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <Routes>
      <Route path="/" element={<Homee />}/>
      <Route path="/course" element={authUser ? <Course /> : <Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Toaster />
    </>
  );
}

export default App;
