import {RestaurantsTabs} from "../../components/RestaurantsTab/component.jsx";
import {Restaurants} from "../../components/Restaurants/component.jsx";
export const RestaurantsPage = ({restaurants}) => {
    return (
        <>
            <RestaurantsTabs restaurants={restaurants}/>
            <Restaurants restaurants={restaurants}/>
        </>
    );
}