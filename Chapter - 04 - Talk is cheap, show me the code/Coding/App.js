import React from 'react';
import { createRoot } from 'react-dom/client';
/*
    1. Header
        - Logo
        - Nav Items
    2. Body
        - Search
        - Restaurant Card
    3. Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

//1. Header Component
const Header = () => {
    return <div className="header">
        <div>
            <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"/>
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

const resList = [
    {
        id: "1001",
        name : "Santosh Family Dhaba",
        receipe: "Tomato Soup",
        rating: "4.0",
        price : "₹300 for two",
        deliveryTime: "22 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkcibe6x1ychvzjkywxk",
    },
    {
        id: "1002",
        name : "Cafe Niloufer",
        receipe: "Maska Bun",
        rating: "4.5",
        price : "₹400 for two",
        deliveryTime: "32 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dc9t0kiq7lhsd3pndohf",
    },
    {
        id: "1003",
        name : "Santosh Family Dhaba",
        receipe: "Crispy Corn",
        rating: "4.5",
        price : "₹560 for two",
        deliveryTime: "32 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dwqb8nhiop8fvqya0alq",
    },
    {
        id: "1004",
        name : "Grameen Kulfi",
        receipe: "Sitaphal Stick Kulfi",
        rating: "4.6",
        price : "₹120 for two",
        deliveryTime: "18 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vu0thsifji9wgfuzfmic",
    },
    {
        id: "1005",
        name : "Nrs Nandini",
        receipe: "Idli",
        rating: "4.4",
        price : "₹150 for two",
        deliveryTime: "21 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9fa5ca30c3db622c69cec0326ff63b41",
    },
    {
        id: "1006",
        name : "Utsav Vegetarian",
        receipe: "Kaju Paneer Biryani",
        rating: "4.1",
        price : "₹300 for two",
        deliveryTime: "32 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y2lkcxxax3794vepe2se",
    },
    {
        id: "1007",
        name : "Subbayya Gari Hotel",
        receipe: "Butta Bojanam",
        rating: "4.0",
        price : "₹300 for two",
        deliveryTime: "24 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
    },
]


//2. Body Component
const Body = () => {
    return <div className="body">
        <div className="res-search">
            Search
        </div>
        <div className="res-container">
            {
                resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
}

//3. Restaurant Card
const RestaurantCard = (props) => {
    const {resData} = props;

    return (<div className="res-card">
        <img className="res-logo" src={resData.image}/>
        <h3>{resData.name}</h3>
        <h4>{resData.receipe}</h4>
        <h4>{resData.rating}</h4>
        <h4>{resData.deliveryTime}</h4>
        <h4>{resData.price}</h4>
    </div>);
}

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}
const root = createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
