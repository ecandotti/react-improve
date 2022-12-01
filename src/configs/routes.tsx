import { createBrowserRouter } from "react-router-dom"
import { createRef } from "react"

import NotFound from "src/pages/NotFound"
import Custom from "src/pages/Custom"
import Home from "src/pages/Home"

import Center from "src/layout/Center"

import App from "../App"

export const routes = [
    {
        path: "/",
        name: "Home",
        nodeRef: createRef(),
        element: (
            <Center>
                <Home />
            </Center>
        ),
    },
    {
        path: "/custom",
        name: "Custom",
        nodeRef: createRef(),
        element: (
            <Center>
                <Custom />
            </Center>
        ),
    },
    {
        path: "*",
        element: (
            <Center>
                <NotFound />
            </Center>
        ),
    },
]

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: routes.map(route => ({
            index: route.path === "/",
            path: route.path === "/" ? undefined : route.path,
            element: route.element,
        })),
    },
])
