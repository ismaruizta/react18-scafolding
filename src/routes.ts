import { Home } from "./pages/home/Home";
import { Tour } from "./pages/tour/Tour";

export function getRoutes():myRoute[]{
    return[
        { path: "/home", element: Home , text:"Home"},
        { path: "/tour", element: Tour , text:"Tour"},
        // { path: "/", element: Home },
    ]
}

export interface myRoute{
    path:string,
    element:Function,
    text:string,
}