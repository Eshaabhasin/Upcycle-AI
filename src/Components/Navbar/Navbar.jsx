import React from "react";
import './Navbar.css';
import Signin from "../Joinus/Signin";

const Navbar=()=>{
    return(
        <>
        <div class="market-navbar">
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Collection</li>
            <li><Signin></Signin></li>
            </ul>
        </div>
        </>
    )
}
export default Navbar;