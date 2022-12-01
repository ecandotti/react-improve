import style from "styled-components"

interface Props {
    text?: string
    onClick?: any
    styleBtn?: "normal" | "outline"
}

const CustomButton: React.FC<Props> = ({ text, onClick, styleBtn = "normal" }): JSX.Element => {
    return (
        <Button onClick={onClick} styleBtn={styleBtn}>
            {text}
        </Button>
    )
}

const Button = style("button")<Props>`
    background-color: ${({ theme, styleBtn }) =>
        styleBtn === "outline" ? "transparent" : theme.colors.black};
    color: ${({ theme, styleBtn }) =>
        styleBtn === "outline" ? theme.colors.black : theme.colors.white};
    border: ${({ styleBtn }) => (styleBtn === "outline" ? "2px solid #191919" : "none")};
    border-radius: 999rem;
    font-weight: 500;
    padding: 1rem 2rem;
    cursor: pointer;
`

export default CustomButton
