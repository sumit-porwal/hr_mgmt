import axios from "axios"
import React from "react";
function Query(path,deps=[]) {
	const [Employees, setEmployees] = React.useState() 
	React.useEffect(() => {
  	const fetchQuery = async () => {
    const employees = await axios.get(`http://localhost:8080/${path}`);
    setEmployees(employees)
    };
    fetchQuery();
  }, deps);
  return Employees
}

export default Query