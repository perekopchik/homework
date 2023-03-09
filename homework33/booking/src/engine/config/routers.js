import {Main} from "../../ui/pages/Main";
import {About} from "../../ui/pages/About";
import {Hotels} from "../../ui/pages/Hotels";


export const routes = {
    home: '/',
    about: '/about',
    hotels: '/hotels'
}
export const pages = [
    {
        link: routes.home,
        element: <Main/>
    },
    {
        link: routes.about,
        element: <About/>
    },
    {
        link: routes.hotels,
        element: <Hotels/>
    }
]