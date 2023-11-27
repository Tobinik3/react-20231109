import {useState} from "react";

export const Counter = () => {
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
            <button onClick={handleCounterMinus}>-</button>
            <span>{count}</span>
            <button onClick={handleCounterPlus}>+</button>
        </div>
    );
}