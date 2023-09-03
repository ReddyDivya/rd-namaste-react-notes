import {CDN_URL} from "../utils/constant";

//3. Restaurant Card
const RestaurantCard = (props) => {
    const {resData} = props;

    return (
    <div className="bg-slate-200 text-slate-600 p-4 m-4 rounded-md w-64 h-80 hover:bg-slate-300">
        <img className="w-[300px] border-solid" src={CDN_URL+resData.info.cloudinaryImageId}/>
        <h3 className="font-bold">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>⭐{resData.info.avgRating} stars</h4>
        <h4>{resData.info.sla.deliveryTime} mins</h4>
        <h4>{resData.info.costForTwo}</h4>
    </div>);
}

export default RestaurantCard;