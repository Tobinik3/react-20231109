export const RestaurantsTabs = ({restaurants}) => {
    return (
        <div>
            <button>{restaurants[0].name}</button>
            <button>{restaurants[1].name}</button>
            <button>{restaurants[2].name}</button>
            <button>{restaurants[3].name}</button>
        </div>
    );
}