import {Review} from "../Review/component.jsx";
import styles from "./styles.module.css";


export const Reviews = ({restaurant, className}) => {
    return (
        <div className={`${styles.reviews} ${className}`}>
            <h3>Отзывы</h3>
            <ul>
                {restaurant.reviews.map(reviewItem => (
                    <li key={reviewItem.id} className={styles.review}>
                        <Review>{reviewItem.text}</Review>
                    </li>
                ))}
            </ul>
        </div>
    );
}