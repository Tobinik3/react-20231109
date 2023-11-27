import {Restaurant} from "../Restaurant/component.jsx";

export const Restaurants = ({restaurants}) => {
    //для дз 3 не использую компонент, если дальше он не понадобится - выпилю
    return (
        <div>
            {restaurants && restaurants.map(restaurant =>(
                <Restaurant restaurant={restaurant} key={restaurant.id}/>
            ))}
        </div>
    );
}