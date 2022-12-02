import styled from "styled-components"

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Center: React.FC<Props> = ({ children }): JSX.Element => {
    return <FullScreen>{children}</FullScreen>
}

const FullScreen = styled("div")`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f6fa;
`

export default Center
