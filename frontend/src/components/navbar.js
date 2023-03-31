import './navbar.css'
import {NavLink} from 'react-router-dom'
import logo from  '../assets/logo.jpeg' 
export default function Navbar(){
    return(
        <div className='navbar'>
            <img src={logo} className="logo-img"/>

            <div className="nav-links">

            </div>
        </div>
    )
}