import {useState} from "react";
import {RestaurantsTabs} from "../../components/RestaurantsTabs/component.jsx";
import {Restaurant} from "../../components/Restaurant/component.jsx";
import styles from "./styles.module.css";

export const RestaurantsPage = ({restaurants}) => {
    const [activeTab, setActiveTab] = useState();

    return (
        <>
            <RestaurantsTabs className={styles.tabs} restaurants={restaurants} setActiveTab={setActiveTab} />
            <Restaurant restaurant={restaurants[activeTab]} />
        </>
    );
}