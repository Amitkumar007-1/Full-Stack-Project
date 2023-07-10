import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Loader';

export default function Update_Employee() {
    const [employee, setEmployee] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getDataFromServer();

    }, [])

    const { id } = useParams();
    let navigateToAllEmp = useNavigate();
    const getDataFromServer = async () => {
        await axios.get(`http://myspringapp-env.eba-3eqktcg6.ap-south-1.elasticbeanstalk.com/Employee/${id}`).then((response) => {
            setEmployee(response.data);
        }, (error) => {
            console.log(error);
        })

    }

    const handleForm = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(async () => {
            await axios.put(`http://myspringapp-env.eba-3eqktcg6.ap-south-1.elasticbeanstalk.com/Employee/${id}`, employee).then((response) => {
                if(response.status==200){
                    setLoading(false);
                    toast.success("Updated Successfully!!");
                    navigate();
                }
                else if(response.status==204){
                    setLoading(false);
                    toast.error("Something Went Wrong Try Again!!");
                }

            }, (error) => {
                   toast.warning("Server Down!!");
            })
        }, 3000);

    }

    const navigate = () => {
        navigateToAllEmp("/AllEmployee");
    }


    return (
        <div>
            <div>
                <h2 className='text-center'>Update Employee's</h2>
                <form onSubmit={handleForm} className='shadow-lg'>
                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => { setEmployee({ ...employee, name: e.target.value }) }} class="form-control" name='name' id="emp_name" value={employee.name} placeholder="Enter Your Name" />
                        <label for="emp_name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" onChange={(e) => { setEmployee({ ...employee, email: e.target.value }) }} class="form-control" name='email' id="emp_email" value={employee.email} placeholder="Enter Your Email" />
                        <label for="emp_email">Email</label>
                    </div>
                    <div className="form-floating">
                        <textarea class="form-control" onChange={(e) => { setEmployee({ ...employee, address: e.target.value }) }} name='address' value={employee.address} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Address</label>
                    </div>
                    {
                        loading == true ? <Loader /> : <div className='container text-center mt-3'>
                            <button type="submit" className="btn btn-success me-2">Submit</button>
                            <button onClick={() => { navigate(); }} className="btn btn-warning">Cancel</button>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}
