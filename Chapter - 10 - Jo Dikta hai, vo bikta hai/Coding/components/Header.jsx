import React, {useState} from "react";
import {LOGO_URL} from "../utils/constant";
import LOGO_URL from "./assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//1. Header Component
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
    <nav className="flex flex-wrap mx-auto items-center justify-between p-6 lg:px-8 text-slate-300 bg-sky-800">
        <div>
            <img className="w-[100px]" src={LOGO_URL}/>
        </div>
        <div>
            <ul className="flex flex-wrap m-1 p-1">
                <li className="p-2">
                    {onlineStatus === true ? "🟢" : "🔴" }
                </li>
                <li className="p-2">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-2">
                    <Link to="/about">About</Link>
                </li>
                <li className="p-2">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="p-2">
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li className="p-2">Cart</li>
                <button className="login-btn" onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
            </ul>
        </div>
    </nav>)
}//Header

export default Header;