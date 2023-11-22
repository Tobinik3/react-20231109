import {Reviews} from "../Reviews/component.jsx";
import {Menu} from "../Menu/component.jsx";

export const Restaurant = ({restaurant}) => {

    if (!restaurant) {
        return null;
    }

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <Menu restaurant={restaurant}/>
            <Reviews restaurant={restaurant}/>
        </div>
    );
}