import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginSignup from "./components/Login_Signup/Login_Signup";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginSignup />} />
    </Routes>
  );
}

export default App;
