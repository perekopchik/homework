import store from "../../engine/config/store";
import {Container, createTheme} from "@mui/material";
import {orange} from "@mui/material/colors";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header";


const theme = createTheme({
    palette: {
        primary: {
            main: orange[500]
        }
    }
})

export function Layout() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Header/>
                <Container>
                    <Outlet/>
                </Container>
            </ThemeProvider>
        </Provider>
    )
}