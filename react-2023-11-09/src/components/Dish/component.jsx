import {Counter} from "../Counter/component.jsx";

export const Dish = ({children}) => {
    return (
        <div>
            <span>{children}</span>
            <Counter />
        </div>
    );
}