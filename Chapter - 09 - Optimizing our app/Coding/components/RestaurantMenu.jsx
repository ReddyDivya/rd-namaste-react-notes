import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();//call useParam to get value of restaurant Id(resId) using object destructuring.
    
    //fetching restaurant info from custom hook (useRestaurantMenu)
    const resMenu = useRestaurantMenu(resId);

    if(resMenu === null) return <Shimmer/>;

    //destructuring the restaurant's menu details
    const {name, cuisines, costForTwoMessage, locality, avgRating, totalRatingsString
    } = resMenu?.cards[0]?.card?.card?.info;

    //order delivery details
    const {deliveryTime} = resMenu?.cards[0]?.card?.card?.info.sla;

    //menu
    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    return ( 
    <section>
        <h1>Menu</h1>
        <div>
            <section>
                <div>
                    <h1>{name}</h1>
                    <p>{cuisines.join(", ")} </p>
                    <p>{locality}</p>
                </div>
                <div>
                    <h2>⭐{avgRating}</h2>
                    <hr/>
                    <h4>{totalRatingsString}</h4>
                </div>
            </section>
            <hr/>
            <section>
                <h3>🕗{deliveryTime}</h3>
                <p>💵{costForTwoMessage}</p>
            </section>
            <hr/>
            <section>
                <h2>Recommended ({itemCards.length})</h2>
                <ul>
                {
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            <h3>
                                {item.card.info.name} 
                                &nbsp; - &nbsp;<span>{" Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                            </h3>
                            
                        </li>
                    ))
                }
                </ul>
            </section>
        </div>
    </section>
    )
}

export default RestaurantMenu;
