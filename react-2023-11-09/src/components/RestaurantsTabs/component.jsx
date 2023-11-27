import {Tab} from "../Tab/component.jsx";

export const RestaurantsTabs = ({ restaurants, setActiveTab }) => {
    return (
        <div>
            {restaurants.map(({ name, id }, index) =>
                <Tab key={id} onClick={() => setActiveTab(index)}>{name}</Tab>
            )}
        </div>
    );
}