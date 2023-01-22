import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import LoginSignup from "./components/Login_Signup/Login_Signup";
import PatientDashboard from "./Pages/PatientDashboard";
import DoctorDashboard from "./Pages/Doctor/DoctorDashboard";
import { useStateContext } from "./contexts/ContextProvider";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";

function App() {
  const { loggedIn } = useStateContext();
  const doctor = localStorage.getItem("Doctor");
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route
        path='/login'
        element={!loggedIn ? <LoginSignup /> : <Navigate to='/' replace />}
      />
      {/* Dashboard */}
      <Route
        path='/dashboard/*'
        element={
          loggedIn ? (
            doctor === null ? (
              <PatientDashboard />
            ) : (
              <DoctorDashboard />
            )
          ) : (
            <Navigate to='/' replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
