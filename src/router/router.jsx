import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import News from "../pages/news/News";
import Category from "../pages/category/Category";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/news/:id',
                element: <News/>
            },
            {
                path: '/category/:id',
                element: <Category/>,
            }
        ]
    }
])