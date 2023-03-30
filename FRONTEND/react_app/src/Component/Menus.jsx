import React from 'react'
import { Link } from 'react-router-dom'

export default function Menus() {
    return (
        <div>
            <ul className="list-group shadow">
                {/* <a href="/"> <li className="list-group-item text-center ">Home</li></a>
                <a href="/Registration"><li className="list-group-item text-center "></li></a>
                <a href="/AllEmployee"><li className="list-group-item text-center ">View Employee </li></a>
                <a href="/About"><li className="list-group-item text-center ">About Us</li></a>
                <a href="#"><li className="list-group-item text-center ">Contact</li></a> */}
                <Link className="list-group-item text-center " to="/" >Home</Link>
                <Link className="list-group-item text-center " to="/Registration" >Employee Registration</Link>
                <Link className="list-group-item text-center " to="/AllEmployee" >View  Employees</Link>
                <Link className="list-group-item text-center " to="/About" >About  Us</Link>
                <Link className="list-group-item text-center " to="#" >Contact Us</Link>
            </ul>
        </div>
    )
}
