import React, {useState} from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";

//1. Header Component
const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return <div className="header">
        <div>
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
            </ul>
        </div>
    </div>
}//Header

export default Header;