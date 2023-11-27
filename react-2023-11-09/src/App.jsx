import {RestaurantsPage} from "./pages/RestaurantsPage/component.jsx";

export const App = ({restaurants}) => {
    return (
        <RestaurantsPage restaurants={restaurants}/>
    );
}