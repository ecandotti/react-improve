import styled from "styled-components"

interface Props {
    img: string
    rotation: number
}

interface ImgProps {
    x: number
    y: number
}

const SomeFood: React.FC<Props> = ({ img, rotation }): JSX.Element => {
    return (
        <Container rotation={rotation}>
            <Img src={img} y={-16} x={11} />
            <Img src={img} y={-12} x={9} />
            <Img src={img} y={-9} x={11} />
            <Img src={img} y={-9.5} x={16} />
            <Img src={img} y={-15} x={16} />
        </Container>
    )
}

const Container = styled("div")<{ rotation: number }>`
    position: relative;
    z-index: 12;
    transform: rotate(${({ rotation }) => rotation + "deg"});
`

const Img = styled("img")<ImgProps>`
    position: absolute;
    top: ${({ y }) => y + "rem"};
    left: ${({ x }) => x + "rem"};
    width: 26px;
    height: 26px;
`

export default SomeFood
