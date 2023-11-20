import {RestaurantsPage} from "./pages/Restaurants-page/component.jsx";

export const App = ({restaurants}) => {
    return (
        <RestaurantsPage restaurants={restaurants}/>
    );
}