import React from "react";
import Homee from "./Home/Homee";
import { Route, Routes } from "react-router-dom";
import Course from "./Course/Course";
import Signup from "./Components/Signup";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homee />}/>
      <Route path="/course" element={<Course />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
