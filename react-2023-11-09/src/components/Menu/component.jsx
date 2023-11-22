import {Dish} from "../Dish/component.jsx";

export const Menu = ({restaurant}) => {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                {restaurant.menu.map(menuItem => (
                    <li key={menuItem.id}>
                        <Dish>{menuItem.name}</Dish>
                    </li>
                ))}
            </ul>
        </div>
    );
}