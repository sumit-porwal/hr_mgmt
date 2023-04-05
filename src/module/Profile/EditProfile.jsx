import axios from 'axios';
import React, { useEffect } from 'react'


function EditProfile({employee}) {
	console.log("Edit says" + employee)
  	const [formData, setFormData] = React.useState({
  		name: '',
  		email: '',
  		phone: '',
  		address: '',
  	});
	const { name,email, phone, address } = formData;

  	useEffect(()=>setFormData(
  		{
			name:employee.name,
			email:employee.email,
			phone: employee.phone,
			address: employee.address,
			department:employee.department,
			jobTitle:employee.jobTitle,
		}
 	 ),[]
	)
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {

    e.preventDefault();
	axios.patch(`http://localhost:8080/employees/${employee.id}`,employee)

  };
  return (
	<div>
 <form onSubmit={onSubmit}>
		<label htmlFor="name">Name</label>
		<input type="text" name="name" id="name" value={name} onChange={onChange} />
      <br />
		<label htmlFor="Email">Email</label>
		<input type="Email" name="email" id="email" value={email} onChange={onChange} />
      <br />
		<label htmlFor="phone">Phone</label>
		<input type="number" name="phone" id="phone" value={phone} onChange={onChange} />
      <br />
		<label htmlFor="address">Adress</label>
		<input type="text" name="address" id="address" value={address} onChange={onChange} />
      <br />
		<button type="submit">Submit</button>

		</form>
	</div>
  )
}

export default EditProfile