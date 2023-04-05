import axios from 'axios';
import React, { useState } from 'react'

function Onboarding() {
  const [Manager,setManager]= useState(true);
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  address: '',
  department: '',
  jobTitle: '',
  salary: '',
  manager:false,
  });
  const [isCreated,setisCreated] = useState(false);
  const { name,email, phone, address, department, jobTitle,salary,manager } = formData;
const [id,setId] = useState();
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
        setisCreated('true')
        navigator.clipboard.writeText(formData.password);
        axios.delete(`http://localhost:8080/applicants/${id}`);
        // formData.passwor
        // navigate("/newEmployee")
        console.log(res);
      });
      
    } catch (error) {
      console.error(error);
    }
  };
  const [hiring, setHiring] = React.useState(false);
  const [applicant, SetApplicant] = React.useState() 
  React.useEffect(() => {
    const fetchApplicant = async () => {
      const applicant = await axios.get("http://localhost:8080/applicants");
      SetApplicant(applicant)
    };
    fetchApplicant();
  }, []);
  const handleApplicant=(applicant)=>{
    console.log(applicant)
    setId(applicant.id);
    applicant.id = 'EP' + Math.random();
      setFormData({
        ...formData,
        name:applicant.name,
        email:applicant.email,
        phone:applicant.phone,
        address:applicant.address,
        manager:false,
        password:Math.random()})
    }
      
  
    if(!applicant){
      return(<p>Loading...</p>)
    }
    if(!hiring){
      
      return (
        <div className="onBoard">
      {applicant.data.filter((applicant)=>applicant.Shortlist).map(applicant => (
        <div key={applicant.id} className="app-icon">
          <span className='name'>{applicant.name}</span>
          <button onClick={()=>{
            setHiring(true);
            handleApplicant(applicant)
          }}>Hire</button>
        </div>
      ))}
    </div>
	  )
  }
  else{
     if(isCreated){
      return (
        <>
        <h2>Account Created</h2>
        <p>Click Send Password to mail password to employee</p>
        <a href={`mailto: ${formData.email}?
        &subject=Hr portal passowrd
        &body=Dear ${formData.name} is hr portal password is ${formData.password} please note and do not share with anyone`}>Send Password</a>
        </>
      )
  }
    return(
      <>
      <h2>On Board</h2>
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
		<label htmlFor="department">Department</label>
		<input type="text" name="department" id="department" value={department} onChange={onChange}/>
      <br />
		<label htmlFor="jobTitle">jobtitle</label>
		<input type="text" name="jobTitle" id="jobTitle" value={jobTitle} onChange={onChange} />
      <br />
    <label htmlFor="salary">Salary</label>
		<input type="text" name="salary" id="salary" value={salary} onChange={onChange} />
      <br />
    {/* <label htmlFor="jobTitle">jobtitle</label>
		<input type="text" name="jobTitle" id="jobTitle" value={jobTitle} onChange={onChange} />
      <br />
      		<label htmlFor="jobTitle">jobtitle</label>
		<input type="text" name="jobTitle" id="jobTitle" value={jobTitle} onChange={onChange} />
      <br /> */}
    <label htmlFor="manager">manager</label>
    <input name="manager" type="checkbox" value="manager" onChange={()=>{

      console.log(Manager)
      setManager(Manager=>!Manager)
      setFormData({
        ...formData,
        manager:Manager
      })
    }}/>
      <br />
		<button type="submit">Submit</button>

		</form>
      <button onClick={()=>setHiring(false)}>Back</button>
      </>
    )
  }
  }

export default Onboarding