import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginSignup from "./components/Login_Signup/Login_Signup";
import PatientDashboard from "./Pages/PatientDashboard";

import "./App.css";
import Calendar from "./Pages/Calendar";
import Appointments from "./Pages/Appointments";

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>App</div>} />
      <Route path='/login' element={<LoginSignup />} />
      {/* Dashboard */}
      <Route path='/dashboard' element={<PatientDashboard />} />
      <Route path='/appointments' element=<Appointments /> />
      <Route path='/messages' element='Messages' />
      <Route path='/calendar' element=<Calendar /> />

      {/* Medical */}
      <Route path='/labresults' element='Lab Results' />
      <Route path='/medicalrecords' element='Medical Records' />
      <Route path='/prescriptions' element='Prescriptions' />
      <Route path='/reports' element='Reports' />
    </Routes>
  );
}

export default App;
