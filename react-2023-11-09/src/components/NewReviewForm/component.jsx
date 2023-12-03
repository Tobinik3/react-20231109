import { useReducer } from "react";
import {Counter} from "../Counter/component.jsx";
import styles from "./styles.module.css";


const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 1,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setName":
            return {...state, name: action.payload};
        case "setText":
            return {...state, text: action.payload};
        case "setRating":
            return {...state, rating: action.payload};
        default:
            return state;
    }
};

export const NewReviewForm = ({className}) => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const handleCounterPlus = () => {
        if (formValue.rating === 5) return null;
        dispatch({type: 'setRating', payload: formValue.rating + 0.5})
    };

    const handleCounterMinus = () => {
        if (formValue.rating === 1) return null;
        dispatch({type: 'setRating', payload: formValue.rating - 0.5})
    };

    return (
        <div className={`${styles.newReview_wrap} ${className}`}>
            <h3>Добавить отзыв</h3>
            <div className={styles.newReview}>
                <div>
                    <label htmlFor="name" className={styles.name_label}>Name</label>
                    <input
                        type="name"
                        onChange={(e) =>
                            dispatch({type: 'setName', payload: e.target.value})
                        }
                        value={formValue.name}
                    />
                </div>
                <div>
                    <label htmlFor="text" className={styles.text_label}>Text</label>
                    <input
                        type="text"
                        onChange={(e) =>
                            dispatch({type: 'setText', payload: e.target.value})
                        }
                        value={formValue.text}

                    />
                </div>
                <div className={styles.rating}>
                    <span>Rating</span>
                    <Counter count={formValue.rating} onPlus={handleCounterPlus} onMinus={handleCounterMinus} className={styles.counter}/>
                </div>
            </div>
        </div>
    );
}