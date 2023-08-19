import {LOGO_URL} from "../utils/constant";

//1. Header Component
const Header = () => {
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
            </ul>
        </div>
    </div>
}//Header

export default Header;
