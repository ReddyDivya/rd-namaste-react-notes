import RestaurantCard from "./RestaurantCard";
import {SWIGGY_API_URL} from "../utils/constant";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

//2. Body Component
const Body = () => {
    //Local state variable = Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);//All Restaurants
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); //Filtered Restaurants
    const [searchRestaurant, setSearchRestaurant] = useState("");//Search Restaurants

    //useEffect(2 params) - callback function, dependencies
    useEffect(() => {
        getRestaurants();
    }, []);

    //get restaurants list
    const getRestaurants = async () => {
        //making swiggy api call
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };//getRestaurants

    if(listOfRestaurants.length === 0)
        return <Shimmer/>

    return ( <div className="body">
       <div className="filter">
            <input type="text" value={searchRestaurant}
                onChange={(e) => {
                    setSearchRestaurant(e.target.value);
                    const filteredRes = listOfRestaurants.filter((res) => 
                    { 
                        return res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
                    })
                    
                    setFilteredRestaurants(filteredRes);
                }}
            />
            {/* <button className="res-search" onClick={() => 
            {
                const filteredRes = listOfRestaurants.filter((res) => 
                { 
                    return res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
                })
                
                setFilteredRestaurants(filteredRes);
            }}>
            Search
            </button> */}

            <button className="res-filter" onClick={() => 
                {
                    const filteredList = listOfRestaurants.filter((restaurants) => restaurants.info.avgRating > 4);
                    setFilteredRestaurants(filteredList);//updating the state
                }}>
                Top Rated Restaurants
            </button>
       </div>
        <div className="res-container">
            {
                (searchRestaurant.length > 0) ?
                //showing only filtered restaurants
                filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))
                : 
                //showing all the restaurants
                listOfRestaurants.map((restaurant) => (
                    <Link to={"/restaurant/" + restaurant.info.id} 
                        key={restaurant.info.id}>
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    </Link>
                    // <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
    )
}

export default Body;