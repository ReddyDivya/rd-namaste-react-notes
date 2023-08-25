import { useState, useEffect } from "react";
import {SWIGGY_MENU_API_URL} from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {resId} = useParams();//call useParam to get value of restaurant Id(resId) using object destructuring.
    const [restaurant, setRestaurant] = useState(null);//holds a restaurant details

    //calls only once after the initial component render
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    //get restaurant details
    const getRestaurantInfo = async () => {
        const restaurantData = await fetch(SWIGGY_MENU_API_URL + resId);//fetching menu data
        const jsonResData = await restaurantData.json();//converting fetched data to json
        
        //set restaurant
        setRestaurant(jsonResData.data);
    }

    if(restaurant === null) return <Shimmer/>;

    //destructuring the restaurant info
    const {name, cuisines, costForTwoMessage, locality, avgRating, totalRatingsString
    } = restaurant?.cards[0]?.card?.card?.info;
    const {deliveryTime} = restaurant?.cards[0]?.card?.card?.info.sla;
    
    console.log(restaurant?.cards[0]?.card?.card?.info)

    //menu
    const {itemCards} = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    // console.log(itemCards);
    return ( 
    <div className="res-details">
        <section className="res-header">
            <div>
                <h1>{name}</h1>
                <p>{cuisines.join(", ")} </p>
                <p>{locality}</p>
            </div>
            <div className="res-rating">
                <h2>⭐{avgRating}</h2>
                <hr/>
                <h4>{totalRatingsString}</h4>
            </div>
        </section>
        <hr/>
        <section className="res-deliveryInfo">
            <h3>🕗{deliveryTime}</h3>
            <p>💵{costForTwoMessage}</p>
        </section>
        <hr/>
        <section className="res-recomends">
            <h2>Recommended ({itemCards.length})</h2>
            <ul>
            {
                itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        <h3>{item.card.info.name}</h3>
                        <p>{" Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                    </li>
                ))
            }
            </ul>
        </section>
    </div>)

}

export default RestaurantMenu;