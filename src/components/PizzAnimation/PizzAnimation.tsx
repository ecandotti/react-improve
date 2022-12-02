import React, { useContext } from "react"
import styled from "styled-components"

import PizzaContext from "src/context/PizzaContext"

import basePizza from "src/assets/pizza/base.png"

import "./index.css"

interface SauceProps {
    sauce?: "tomato" | "creme"
}

const PizzAnimation: React.FC = (): JSX.Element => {
    const { pizza } = useContext(PizzaContext)

    return (
        <div className="relative mb-4">
            <img src={basePizza} width="350px" height="350px" />
            {pizza.sauce && <Sauce sauce={pizza.sauce} />}
            {pizza.done && <Cover />}
        </div>
    )
}

const Sauce = styled("div")<SauceProps>`
    position: absolute;
    top: 4.7rem;
    left: 9.5rem;
    z-index: 11;
    width: 190px;
    height: 190px;
    border: 4px solid
        ${({ sauce, theme }) =>
            sauce === "creme"
                ? theme.colors.white
                : sauce === "tomato"
                ? theme.colors.ketchup
                : "none"};
    border-radius: 999rem;
    background-color: ${({ sauce, theme }) =>
        sauce === "creme"
            ? theme.colors.white
            : sauce === "tomato"
            ? theme.colors.ketchup
            : "none"};
`

const Cover = styled("div")`
    position: absolute;
    top: 0;
    left: 4.1rem;
    z-index: 11;
    width: 350px;
    height: 340px;
    opacity: 0.8;
    border: 10px solid #aeaeae;
    background-color: #cecece;
`

export default PizzAnimation
