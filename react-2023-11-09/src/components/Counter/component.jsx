import styles from "./styles.module.css";

export const Counter = ({onPlus, onMinus, count, className}) => {


    return (
        <div className={`${styles.counter} ${className}`}>
            <button onClick={onMinus} className={styles.button}>
                <span className={styles.icon}>
                    -
                </span>
            </button>
            <span>{count}</span>
            <button onClick={onPlus} className={styles.button}>
                <span className={styles.icon}>+</span>
            </button>
        </div>
    );
}