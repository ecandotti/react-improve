import styled from "styled-components"

const NotFound: React.FC = (): JSX.Element => {
    return (
        <FullScreen>
            <div>
                <h1>Vous avez perdu de vue votre pizza ?</h1>
                <h2>Revenir en arrière</h2>
            </div>
        </FullScreen>
    )
}

const FullScreen = styled("div")`
    width: 100vw;
    height: 100vh;
`

export default NotFound
