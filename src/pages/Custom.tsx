import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { Button } from "src/components"

import PizzaContext from "src/context/PizzaContext"

const Custom: React.FC = (): JSX.Element => {
    const { clearContent } = useContext(PizzaContext)
    const navigate = useNavigate()

    const cancelPizza = (e: Event) => {
        e.preventDefault()

        clearContent()
        return navigate("/")
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault()
    }
    return (
        <Flex>
            <Button text="Annuler" onClick={(e: Event) => cancelPizza(e)} styleBtn="outline" />
            <Button text="Recevoir ma pizza" onClick={(e: Event) => handleSubmit(e)} />
        </Flex>
    )
}

const Flex = styled("div")`
    display: flex;
    gap: 1rem;
`

export default Custom
