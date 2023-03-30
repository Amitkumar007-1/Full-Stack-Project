import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Loader from '../Loader';
import Employee from './Employee'

export default function AllEmployee() {

    const [employee, setEmployee] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        employees_from_server();
        console.log("In useEffect")
    }, [])
    const employees_from_server = () => {
        setLoading(true);
        setTimeout(async () => {
            await axios.get("https://creepy-cemetery-production.up.railway.app/Employee").then((response) => {
                if (response.status == 200) {
                    toast.success("Employees's Loaded Succesfully!!");
                    setEmployee(response.data);
                    setLoading(false);
                    console.log(response.data);
                }
                else if (response.status == 204) {

                    toast.error("No Employee's Available");
                    setLoading(false);
                }

            }, (error) => {

                toast.warning("Something Went Wrong");
                setLoading(false);
                console.log(error);

            });
        }, 3000);

    }
    const removeEmployee = (id) => {
        setEmployee(employee.filter((c) => { return c.emp_id != id }))
    }


    return (

        <div>

            {
                loading == true ? <Loader /> :
                    employee.length > 0 ? employee.map((item) => {
                        return <Employee key={item.emp_id} emp={item} removeEmp={removeEmployee} />
                    }) : 'No Employee'


            }

        </div>
    )
}
