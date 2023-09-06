import {useState} from 'react';
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const handleShowItems = () => {
        //lifting state up, this function is coming from the parent.
        setShowIndex();
    }

    return (<div className="mx-auto my-4 bg-gray-100 shadow-lg p-4">
        {/*Accordian Header*/}
        <div onClick={() => handleShowItems()}
        className="flex flex-wrap justify-between">
            <span className="text-black text-left font-bold">
                {data.title} ({data.itemCards.length})
            </span>
            <span>⬇️</span>
        </div>

        {/*Accordian Body*/}
        {showItems && <ItemList items={data.itemCards}/>} 
    </div>)
}

export default RestaurantCategory;