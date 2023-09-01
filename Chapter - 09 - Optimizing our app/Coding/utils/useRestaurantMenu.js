import {useState, useEffect} from "react";
import {SWIGGY_MENU_API_URL} from "../utils/constant";

//This custom hook is responsible for fetching restaurant info which is a single responsible.
const useRestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);//holds a restaurant details

    //calls only once after the initial component render
    useEffect( () => {
        //fetch restaurants data
        getRestaurantsInfo();
    }, [])

    //get restaurant details
    const getRestaurantsInfo = async () => {
        const restaurantData = await fetch(SWIGGY_MENU_API_URL);
        const jsonResData = await restaurantData.json();

        //set restaurants
        setResInfo(jsonResData.data);
    }

    return resInfo;
};//useRestaurantMenu

export default useRestaurantMenu;