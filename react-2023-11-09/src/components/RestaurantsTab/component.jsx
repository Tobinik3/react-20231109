import {Tab} from "../Tab/component.jsx";

export const RestaurantsTabs = ({ restaurants }) => {
    return (
        <div>
            {restaurants.map(({ name, id }) =>
                <Tab key={id}>{name}</Tab>
            )}
        </div>
    );
}