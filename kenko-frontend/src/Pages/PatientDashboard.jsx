import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardHome from "../components/DashboardHome";
import Calendar from "./Calendar";
import Appointments from "./Appointments";
import { useStateContext } from "../contexts/ContextProvider";

const PatientDashboard = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className='flex relative'>
      {activeMenu ? (
        <div className='w-72 fixed sidebar bg-white'>
          <Sidebar />
        </div>
      ) : (
        <div className='w-0'>
          <Sidebar />
        </div>
      )}
      <div
        className={`bg-main-bg min-h-screen w-full ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}>
        <div className='fixed md:static bg-main-bg navbar w-full justify-end'>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path='/' element=<DashboardHome /> />
            <Route path='/home' element=<DashboardHome /> />
            <Route path='/appointments' element=<Appointments /> />
            <Route path='/appointments' element=<Appointments /> />
            <Route path='/messages' element='Messages' />
            <Route path='/calendar' element=<Calendar /> />

            {/* Medical */}
            <Route path='/labresults' element='Lab Results' />
            <Route path='/medicalrecords' element='Medical Records' />
            <Route path='/prescriptions' element='Prescriptions' />
            <Route path='/reports' element='Reports' />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
