import {Review} from "../Review/component.jsx";

export const Reviews = ({restaurant}) => {
    return (
        <div>
            <h3>Отзывы</h3>
            <ul>
                {restaurant.reviews.map(reviewItem => (
                    <li key={reviewItem.id}>
                        <Review>{reviewItem.text}</Review>
                    </li>
                ))}
            </ul>
        </div>
    );
}