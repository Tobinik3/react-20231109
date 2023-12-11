import {RestaurantsPage} from "./pages/RestaurantsPage/component.jsx";
import {Layout} from "./components/Layout/component.jsx";

export const App = ({restaurants}) => {
    return (
        <Layout>
            <RestaurantsPage restaurants={restaurants}/>
        </Layout>
    );
}