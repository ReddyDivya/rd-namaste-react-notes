import {useState, useEffect} from "react";
import {SWIGGY_MENU_API_URL} from "../utils/constant";

//This custom hook is responsible for fetching restaurant info which is a single responsible.
const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);//holds a restaurant's menu

    //calls only once after the initial component render
    useEffect(() => {
        getRestaurantMenu();
    }, []);

    //get restaurant's menu details
    const getRestaurantMenu = async () => {
        const restaurantData = await fetch(SWIGGY_MENU_API_URL + resId);//fetching menu data
        const jsonResData = await restaurantData.json();//converting fetched data to json
        
        //set restaurant's menu
        setResMenu(jsonResData.data);
    }//getRestaurantMenu

    return resMenu;
};//useRestaurantMenu

export default useRestaurantMenu;
