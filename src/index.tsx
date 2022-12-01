/** eslint-disabled @typescript-eslint/no-non-null-assertion */
import React from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { router } from "./configs/routes"
import { lightMode } from "./configs/themes"

const container = document.getElementById("app")
const root = createRoot(container!)
root.render(
    <React.StrictMode>
        <ThemeProvider theme={lightMode}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
)
