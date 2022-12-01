import { useNavigate } from "react-router-dom"

import { Button } from "src/components"
import styled from "styled-components"

const NotFound: React.FC = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <>
            <Title>Vous avez perdu de vue votre pizza ?</Title>
            <Button text="Revenir au menu principal" onClick={() => navigate("/")} />
        </>
    )
}

const Title = styled("div")`
    text-transform: uppercase;
`

export default NotFound
