import { createRoot } from "react-dom/client";
import {App} from "./App.jsx";
import { restaurants } from "./constants/mock";

const root = createRoot(document.getElementById("root"));

root.render(
    <App restaurants={restaurants}/>
);