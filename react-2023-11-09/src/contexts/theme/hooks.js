import {ThemeContext} from "./context.js";
import {useContext} from "react";


export function useTheme () {
    return useContext(ThemeContext);
}