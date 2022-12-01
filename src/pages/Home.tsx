import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import { Button } from "src/components"

const Home: React.FC = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <Flex>
            <Button text="Commencer ma pizza" onClick={() => navigate("/custom")} />
        </Flex>
    )
}

const Flex = styled("div")`
    display: flex;
`

export default Home
