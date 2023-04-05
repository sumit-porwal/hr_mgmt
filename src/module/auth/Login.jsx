import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
const Login = ({ setAuth }) => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const [err_msg,setErr_msg] = useState('')
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    setErr_msg(' ');
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:8080/login', formData);
      const token = response.data;
      localStorage.setItem('token', token);
      const {user} = jwt_decode(token);
      setAuth({ isAuthenticated: true, user: user });
    } catch (error) {
      setErr_msg("Wrong Email or password")
      console.error(error);
    }
  };

  if (localStorage.getItem('token')) {
    useEffect(()=>{
      Navigate("/profile");

    },[])
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
  
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <p className='wrong-pass'>{err_msg}</p>
        <button className='submit' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
