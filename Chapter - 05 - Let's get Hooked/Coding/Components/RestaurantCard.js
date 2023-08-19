import {CDN_URL} from "../utils/constant";

//3. Restaurant Card
const RestaurantCard = (props) => {
    const {resData} = props;

    return (<div className="res-card">
        <img className="res-logo" src={CDN_URL+resData.data.cloudinaryImageId}/>
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>{resData.data.deliveryTime} mins</h4>
        <h4>₹{resData.data.costForTwo/100} FOR TWO</h4>
    </div>);
}

export default RestaurantCard;
