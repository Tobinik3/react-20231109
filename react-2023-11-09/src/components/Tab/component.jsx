import {Button} from "../Button/component.jsx";

export const Tab = ({children, onClick}) => {
    return (
        <Button onClick={onClick}>{children}</Button>
    );
}