import {useContext} from 'react';
import {CDN_URL} from "../utils/constant";
import UserContext from '../utils/UserContext';

//3. Restaurant Card
const RestaurantCard = (props) => {
    const {resData} = props;

    const {loggedInUser} = useContext(UserContext);

    return (
    <div className="bg-slate-200 text-slate-600 p-4 m-4 rounded-md w-64 h-84 hover:bg-slate-300">
        <img className="w-[300px] border-solid" src={CDN_URL+resData.info.cloudinaryImageId}/>
        <h3 className="font-bold">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>⭐{resData.info.avgRating} stars</h4>
        <h4>{resData.info.sla.deliveryTime} mins</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h3 className="font-bold">User : {loggedInUser}</h3>
    </div>);
}

//RestaurantCard is an input component
export const withPromotedLabel = (RestaurantCard) => {
    
    //This returns RestaurantCardPromoted component where it receives props sent from Body.js
    //{...props} => passing extra components to RestaurantCard
    return (props) => {
        //returning another component(RestaurantCardPromoted) which can be accessed by withPromotedLabel()
        return ( <div>
            <label className="absolute w-30 bg-black text-slate-200 m-3 ml-8 mt-4 p-1 rounded-md">
                Promoted
            </label>
            <RestaurantCard {...props}/>
    </div> )
    }
}
export default RestaurantCard;