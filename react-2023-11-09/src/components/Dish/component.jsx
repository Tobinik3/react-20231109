import {useState} from "react";
import {Counter} from "../Counter/component.jsx";
import styles from "./styles.module.css";


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
        <div className={styles.dish}>
            <span>{children}</span>
            <Counter onPlus={handleCounterPlus} onMinus={handleCounterMinus} count={count} className={styles.counter}/>
        </div>
    );
}