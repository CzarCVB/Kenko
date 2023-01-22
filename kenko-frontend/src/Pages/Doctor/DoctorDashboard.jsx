import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../../components/SidebarDoctor";
import Navbar from "../../components/Navbar";
import Dashboard from "./DoctorDashboardHome";
import Appointments from "./DoctorAppointments";
import Records from "./DoctorRecords";
import ModifyRecords from "./DoctorModifyRecords";
import DoctorProfile from "./DoctorProfile";
import Support from "./DoctorSupport";
import ApproveTests from "./DoctorApproveTests";

import { useStateContext } from "../../contexts/ContextProvider";

const DoctorDashboard = () => {
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
            <Route path='/' element=<Dashboard /> />
            <Route path='/home' element=<Dashboard /> />
            <Route path='/appointments' element=<Appointments /> />
            <Route path='/records' element=<Records /> />
            <Route path='/modify' element=<ModifyRecords /> />
            <Route path='/approve' element=<ApproveTests /> />
            <Route path='/docinfo' element=<DoctorProfile /> />
            <Route path='/support' element=<Support /> />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
