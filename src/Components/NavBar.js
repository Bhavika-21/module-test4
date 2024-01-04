import React from "react";
import { Link,NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = ()=>{
    return(
        <nav className="nav">
            <div className="LOGO">
                <p>Shopping Cart</p>
            </div>

            <div className="links">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/cart"> 🛒</NavLink>
            </div>
        </nav>
    )
}

export default NavBar


