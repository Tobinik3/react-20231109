import {Counter} from "../Counter/component.jsx";
import {useState} from "react";

export const Dish = ({children}) => {
    const [count, setCount] = useState(0);

    const handleCounterPlus = () => {
        if (count === 5) return null;
        setCount(count + 1);
    };

    const handleCounterMinus = () => {
        if (count === 0) return null;
        setCount(count - 1);
    }
    return (
        <div>
            <span>{children}</span>
            <Counter onPlus={handleCounterPlus} onMinus={handleCounterMinus} count={count}/>
        </div>
    );
}