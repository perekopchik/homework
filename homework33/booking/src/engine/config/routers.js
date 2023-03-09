import {Main} from "../../ui/pages/Main";
import {About} from "../../ui/pages/About";


export const routes = {
    home: '/',
    about: '/about'
}
export const pages = [
    {
        link: routes.home,
        element: <Main/>
    },
    {
        link: routes.about,
        element: <About/>
    }
]