import {NavLink, Routes, Route} from 'react-router-dom'
import withAuth from './module/auth/WithAuth';
import './App.css'
import AddEmployee from './module/Dashboard/AddEmplyee'
import Dashboard from './module/Dashboard/Dashboard'
import Manage from './module/Manage/Manage'
import Profile from './module/Profile/Profile'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Login from './module/auth/Login';
import Apply from './module/Apply';
import Query from './module/Query';
import jwtDecode from 'jwt-decode';

function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null
  });
  useEffect(()=>{

    if (localStorage.getItem('token')){
      let {user} = jwtDecode(localStorage.getItem('token'));
      setAuth({
        isAuthenticated:true,
        user:user
      })
    }
  },[])
  
 
    const logout = () => {
    localStorage.removeItem('token');
    setAuth({ isAuthenticated: false, user: null });
    };

    console.log(auth.user);
    
    const Employees = Query('employees');
    return (
      <div className="App">
        {/* <li><Link onClick={()=>logout()} to="/">logoout</Link></li> */}
    {
    auth.isAuthenticated?(
    <>
      {auth.user.manager?
      (
        <>
          <nav>
            <ul>
              <li><NavLink to="/Manage">Manage</NavLink></li>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
              <li><NavLink to="/Profile">Profile</NavLink></li>
              <li><NavLink onClick={()=>logout()} to="/">logout</NavLink></li>
              {/* <li><Link to="/AddEmployee">NewEmployee</Link></li> */}
              {/* <li><Link to="/Apply">Apply</Link></li> */}
            </ul>
            </nav>
          <Routes>    
      {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        <Route path="/dashboard" element={<Dashboard employees={Employees}/>}/>
        <Route path="/manage/*" element={<Manage employees={Employees} />}/>
        <Route path="/profile/" element={<Profile employee={auth.user} />}/>
        <Route path="/AddEmployee" element={<AddEmployee />}/>
        <Route path="/Apply" element={<Apply />}/>
        <Route path="/submitted" element={<><h2>Your Response has been recorded</h2></>}/>
        <Route  path="/" element={<Login setAuth={setAuth}/>} />
      <Route path="*" element={<><h2>404 Not Found</h2></>} />
               
          </Routes>
        </>
      )
      :
      (
      <>
        <h1>Employee Portal</h1>
        <nav>
          <ul>
            <li><NavLink onClick={()=>logout()} to="/">logoout</NavLink></li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Profile employee={auth.user}/>}/>
        <Route path="*" element={<><h2>404 Not Found</h2></>} />
        {console.log("employee")}
        </Routes>
      </>
      )
    }
    </>
        )
        :(
          <Routes>

          <Route  path="/" element={<Login setAuth={setAuth}/>} /> 
          {/* <Route path="*" element={<><h2>404 Not Found</h2></>} /> */}

          </Routes>
          
          )
        }
      
    </div>
  )
}



export default App
