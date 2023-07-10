import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Employee(props) {

    const deleteEmployee = async (id) => {
        console.log(id)
       await axios.delete(`http://myspringapp-env.eba-3eqktcg6.ap-south-1.elasticbeanstalk.com/Employee/${id}`).then((response) => {
            console.log("Data Deleted");
            props.removeEmp(id);

        }, (error) => {
            console.log(error)

        })


    }
   
    return (
        <div>
            <div className="card">
                <div className="card-header text-center">
                    Employee ID: {props.emp.emp_id}
                </div>
                <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5 className="card-title text-start">{props.emp.name}</h5>
                    <p className="card-text text-start">Email: {props.emp.email} Address: {props.emp.address}</p>
                    <div className='text-end me-2'><Link to={`/Update_Employee/${props.emp.emp_id}`} className="btn btn-warning">Update</Link></div>
                    <div className='  text-end me-2'><button onClick={()=>{deleteEmployee(props.emp.emp_id);}} className="btn btn-danger">Delete</button></div>

                </div>
            </div>
        </div>

    )
}
