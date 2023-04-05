import React, { useState } from 'react';
import { useNavigate, NavLink, Routes, Route} from 'react-router-dom';
import Shortlist from './Shortlist';
import Onboarding from './Onboarding';
import Search from './Search';
import Query from '../Query';
import Offboarding from './Offboarding';
const Manage = () => {
  // const navigate = useNavigate()
  const employees = Query('employees');
 

  return (
    <>
    <div className="manage">
    <nav>
      <ul>
        <NavLink to="/manage/">Search</NavLink>
        <NavLink to="/manage/Shortlist">Shortlist</NavLink>
        <NavLink to="/manage/OnBoarding">Hire</NavLink>
        <NavLink to="/manage/OffBoarding">Fire</NavLink>
        {/* <Link to "/addEmployee">Hire</Link> */}
      </ul>
    </nav>
    <Routes>      
      <Route path="/" element={<Search employees={employees}/>}/>
      <Route path="/Shortlist" element={<Shortlist />}/>
      <Route path="/OnBoarding" element={<Onboarding />}/>
      <Route path="/OffBoarding" element={<Offboarding/>}/>
    </Routes>
      
    </div>
    </>
  );
};

export default Manage;
