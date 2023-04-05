import React from 'react';
import { useNavigate } from 'react-router-dom';
const WithAuth = (Component) => {
  const Navigate = useNavigate();
  return class extends React.Component {
    render() {
      const token = localStorage.getItem('token');
      if (!token) {
        return Navigate('/login');
      }
      return <Component/>;
    }
  };
};

export default WithAuth;