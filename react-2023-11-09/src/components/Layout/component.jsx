import {Footer} from "../Footer/component.jsx";
import {Header} from "../Header/component.jsx";
import {ThemeProvider} from "../../contexts/theme/component.jsx";


export const Layout = ({ children }) => {
    return (
        <ThemeProvider>
            <div>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};