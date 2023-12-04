import {Dish} from "../Dish/component.jsx";
import styles from "./styles.module.css";
export const Menu = ({restaurant, className}) => {
    return (
        <div className={`${styles.menu} ${className}`}>
            <h3>Меню</h3>
            <ul>
                {restaurant.menu.map(menuItem => (
                    <li key={menuItem.id} className={styles.menuItem}>
                        <Dish>{menuItem.name}</Dish>
                    </li>
                ))}
            </ul>
        </div>
    );
}