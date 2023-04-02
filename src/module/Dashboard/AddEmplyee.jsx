import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddEmployee = ()=>{
const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  address: '',
  department: '',
  jobTitle: ''
  });

  const { name,email, phone, address, department, jobTitle } = formData;

  const onChange = (e) => {
	
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
	
    try {
      const response = await axios({
		'method':'post',
		'url':'http://localhost:8080/employees',
		'content-type':'application/json',
		'data':formData,
	}).then((res)=>{
		
			navigate("/")
			console.log(res);
	});

    } catch (error) {
      console.error(error.response.data);
    }
  };

	return(
		<>
		<form onSubmit={onSubmit}>

		<label htmlFor="name">Name</label>
		<input type="text" name="name" id="name" value={name} onChange={onChange} />

		<label htmlFor="Email">Email</label>
		<input type="Email" name="email" id="email" value={email} onChange={onChange} />

		<label htmlFor="phone">Phone</label>
		<input type="number" name="phone" id="phone" value={phone} onChange={onChange} />

		<label htmlFor="address">Adress</label>
		<input type="text" name="address" id="address" value={address} onChange={onChange} />

		<label htmlFor="department">Department</label>
		<input type="text" name="department" id="department" value={department} onChange={onChange}/>

		<label htmlFor="jobTitle">jobtitle</label>
		<input type="text" name="jobTitle" id="jobTitle" value={jobTitle} onChange={onChange} />

		<button type="submit">Submit</button>

		</form>
		</>
	)
}
export default AddEmployee