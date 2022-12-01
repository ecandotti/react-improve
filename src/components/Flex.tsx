import style from "styled-components"

interface Props {
    text: string
}

const Flex: React.FC<Props> = ({ text }): JSX.Element => {
    return <Button>{text}</Button>
}

const Button = style.button`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
`

export default Flex
