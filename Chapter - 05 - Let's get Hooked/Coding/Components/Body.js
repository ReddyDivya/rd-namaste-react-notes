import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../utils/mockData";
import {useState} from "react";

//2. Body Component
const Body = () => {
    /*
    Local state variable = Super powerful variable
    restaurantList - default value
    */
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    return <div className="body">
        <button className="res-filter" onClick={() => 
            {
                const filteredList = restaurantList.filter((restaurants) => restaurants.data.avgRating > 4);
                setListOfRestaurants(filteredList);//updating the state
            }}>
            Top Rated Restaurants
        </button>
        <button className="res-filter" onClick={() => 
            {
                const filteredList = restaurantList.filter((restaurants) => restaurants.data.avgRating < 4);
                setListOfRestaurants(filteredList);//updating the state
            }}>
            Low Rated Restaurants
        </button>
        <div className="res-container">
            {
                listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
}

export default Body;
