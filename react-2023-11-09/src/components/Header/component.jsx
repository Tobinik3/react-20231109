import classNames from "classnames";
import styles from "./styles.module.css";
import {Button} from "../Button/component.jsx";
import {useTheme} from "../../contexts/theme/hooks.js";
import {ThemeProvider} from "../../contexts/theme/component.jsx";

export const Header = ({className}) => {
    const { toggleTheme } = useTheme();
    return (
      <div className={classNames(styles.root, className)}>
          <ThemeProvider>
              <Button onClick={toggleTheme}>Toggle Theme</Button>
          </ThemeProvider>
      </div>
    );
}