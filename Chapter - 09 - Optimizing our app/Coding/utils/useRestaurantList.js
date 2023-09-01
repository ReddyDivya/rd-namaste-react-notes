import {useState, useEffect} from "react";
import {SWIGGY_API_URL} from "../utils/constant";

//This custom hook is responsible for fetching restaurants list which is a single responsible.
const useRestaurantList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);//All Restaurants
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); //Filtered Restaurants

    //get restaurants list
    useEffect(() => {
        getRestaurants(); //fetch restaurants list
    }, []);

    //get restaurants list
    const getRestaurants = async () => {
        //making api call
        const restaurantList = await fetch(SWIGGY_API_URL);
        const jsonResData = await restaurantList.json();

        //set restaurants list
        setListOfRestaurants(jsonResData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        //filtered restaurants
        setFilteredRestaurants(jsonResData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }//getRestaurants

    return listOfRestaurants;
}

export default useRestaurantList;