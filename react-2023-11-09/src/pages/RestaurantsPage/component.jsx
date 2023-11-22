import {useState} from "react";
import {RestaurantsTabs} from "../../components/RestaurantsTabs/component.jsx";
import {Restaurant} from "../../components/Restaurant/component.jsx";

export const RestaurantsPage = ({restaurants}) => {
    const [activeTab, setActiveTab] = useState();

    return (
        <>
            <RestaurantsTabs restaurants={restaurants} setActiveTab={setActiveTab} />
            <Restaurant restaurant={restaurants[activeTab]} />
        </>
    );
}