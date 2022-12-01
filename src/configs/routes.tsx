import { createBrowserRouter } from "react-router-dom"

import NotFound from "src/pages/NotFound"

import App from "../App"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
])
