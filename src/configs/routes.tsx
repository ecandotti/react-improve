import { createBrowserRouter } from "react-router-dom"

import Contact from "../pages/Contact"

import App from "../App"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/test",
        element: <Contact />,
    },
])
