import axios from 'axios';
import React, { useState } from 'react'
import { toast, Zoom } from 'react-toastify';
import Loader from '../Loader';

export default function Registration() {
  const [employee, setEmployee] = useState({ name: '', email: '', address: '' });

  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {

    e.preventDefault();
    console.log(employee)
    postDataOnServer(employee);

  }
  const postDataOnServer = (data) => {
    setLoading(true);
    setTimeout(async () => {
      await axios.post("http://myspringapp-env.eba-3eqktcg6.ap-south-1.elasticbeanstalk.com/Employee", data).then((response) => {

        console.log(response.data);
        setEmployee({ name: '', email: '', address: '' });
        setLoading(false);
        toast.success("Registered Successfully!!");


      }, (error) => {
        if (error.response.status == 409) {
          setLoading(false);
          toast.error("Employee Already Exist!");
        }
        else {
          

          console.log(error);
          setLoading(false);
          toast.warning("Server Down!!");
        }
      })
    }, 3000);
  }

  return (
    <div>


      <h2 className='text-center'>Registration</h2>
      <form onSubmit={handleForm} className='shadow-lg'>
        <div className="form-floating mb-3">
          <input type="text" onChange={(e) => { setEmployee({ ...employee, name: e.target.value }) }} class="form-control" value={employee.name} name='name' required id="emp_name" placeholder="Enter Your Name" />
          <label for="emp_name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" onChange={(e) => { setEmployee({ ...employee, email: e.target.value }) }} class="form-control" value={employee.email} name='email' required id="emp_email" placeholder="Enter Your Email" />
          <label for="emp_email">Email</label>
        </div>
        <div className="form-floating">
          <textarea class="form-control" onChange={(e) => { setEmployee({ ...employee, address: e.target.value }) }} name='address' value={employee.address} required placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Address</label>
        </div>
        {
          loading == true ? <Loader /> : <div className='container text-center mt-3'>
            <button type="submit" className="btn btn-success me-2">Submit</button>
            <button type="reset" onClick={() => { setEmployee({ name: '', email: '', address: '' }); }} className="btn btn-warning">Reset</button>

          </div>
        }

      </form>
    </div>
  )
}

