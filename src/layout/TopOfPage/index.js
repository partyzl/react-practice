import React from "react";
import { NavLink } from "react-router-dom";

const TopOfPage = () => {
    return(
        <>
        <nav>
            <li><NavLink exact to='/'>Home</NavLink> </li>
            <li><NavLink to= '/main'>Main</NavLink> </li>
            <li><NavLink to='/about'>About Us</NavLink></li>
        </nav>
        </>
    )
}

export default TopOfPage;