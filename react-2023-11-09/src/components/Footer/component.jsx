
import styles from "./styles.module.css";
import {Button} from "../Button/component.jsx";
import {ThemeProvider} from "../../contexts/theme/component.jsx";
import classNames from "classnames";

export const Footer = ({className}) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ThemeProvider>
                <Button>Contacts</Button>
            </ThemeProvider>
        </div>
    );
};