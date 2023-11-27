import {useState} from "react";

export const Counter = ({onPlus, onMinus, count}) => {


    return (
        <div>
            <button onClick={onMinus}>-</button>
            <span>{count}</span>
            <button onClick={onPlus}>+</button>
        </div>
    );
}