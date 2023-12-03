import {Reviews} from "../Reviews/component.jsx";
import {Menu} from "../Menu/component.jsx";
import {NewReviewForm} from "../NewReviewForm/component.jsx";
import styles from "./styles.module.css";

export const Restaurant = ({restaurant}) => {

    if (!restaurant) {
        return null;
    }

    return (
        <div className={styles.restaurant}>
            <h2 className={styles.name}>{restaurant.name}</h2>
            <Menu restaurant={restaurant} className={styles.menu}/>
            <Reviews restaurant={restaurant} className={styles.reviews}/>
            <NewReviewForm className={styles.newReview}/>
        </div>
    );
}