import {Tab} from "../Tab/component.jsx";
import styles from "./styles.module.css";

export const RestaurantsTabs = ({ restaurants, setActiveTab, className }) => {
    return (
        <div className={`${styles.tabs} ${className}`}>
            {restaurants.map(({ name, id }, index) =>
                <Tab key={id} onClick={() => setActiveTab(index)}>{name}</Tab>
            )}
        </div>
    );
}