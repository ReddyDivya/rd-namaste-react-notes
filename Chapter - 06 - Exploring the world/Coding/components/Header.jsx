import React, {useState} from "react";
import {LOGO_URL} from "../utils/constant";

//1. Header Component
const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return <div className="header">
        <div>
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
            </ul>
        </div>
    </div>
}//Header

export default Header;