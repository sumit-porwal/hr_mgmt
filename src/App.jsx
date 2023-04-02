import {Link, Routes, Route} from 'react-router-dom'
import withAuth from './module/auth/WithAuth';
import './App.css'
import AddEmployee from './module/Dashboard/AddEmplyee'
import Dashboard from './module/Dashboard/Dashboard'
import Manage from './module/Manage'
import Profile from './module/Profile'
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Login from './module/auth/Login';
import Apply from './module/hire/Apply';
function App() {
    const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null
  });
  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ isAuthenticated: false, user: null });
  };
const [Employees, setEmployees] = useState() 
React.useEffect(() => {
  const fetchUserEmail = async () => {
    const employees = await axios.get("http://localhost:8080/employees");
    setEmployees(employees)
    };
    fetchUserEmail();
  }, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/Manage">Manage</Link></li>
          <li><Link to="/">Dashboard</Link></li>
          {/* <li><Link to="/Profile">Profile</Link></li> */}
          <li><Link to="/AddEmployee">NewEmployee</Link></li>
          <li><Link to="/Apply">Apply</Link></li>

        </ul>
      </nav>
    <Routes>
       
      {/* <Route exact path="/" component={Login} /> */}
      {/* <Route path="/dashboard" component={withAuth(Dashboard)} /> */}
      
      <Route path="/" element={<Dashboard employees={Employees}/>}/>
      <Route path="/manage" element={<Manage employees={Employees} />}/>
      <Route path="/profile" element={<Profile employee={Employees} />}/>
      <Route path="/AddEmployee" element={<AddEmployee />}/>
      <Route path="/Apply" element={<Apply />}/>

      
    </Routes>
      
    </div>
  )
}

export default App
