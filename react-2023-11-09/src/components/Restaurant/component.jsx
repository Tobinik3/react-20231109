export const Restaurant = ({restaurant}) => {
    return (
        <div>
            {restaurant.name}
            <h3>Меню</h3>
            <ul>
                {restaurant.menu.map(menuItem => (
                    <li key={menuItem.id}>
                        {menuItem.name}
                    </li>
                ))}
            </ul>
            <h3>Отзывы</h3>
            <ul>
                {restaurant.reviews.map(reviewItem => (
                    <li key={reviewItem.id}>
                        {reviewItem.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}