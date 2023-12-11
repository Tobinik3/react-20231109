import styles from "./styles.module.css";
import {Button} from "../Button/component.jsx";

export const Counter = ({onPlus, onMinus, count, className}) => {


    return (
        <div className={`${styles.counter} ${className}`}>
            <Button onClick={onMinus} className={styles.button}>
                <span className={styles.icon}>
                    -
                </span>
            </Button>
            <span>{count}</span>
            <Button onClick={onPlus} className={styles.button}>
                <span className={styles.icon}>+</span>
            </Button>
        </div>
    );
}