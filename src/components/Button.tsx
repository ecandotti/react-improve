import style from "styled-components"
import ReactLoading from "react-loading"

interface Props {
    text?: string
    onClick?: any
    styleBtn?: "normal" | "outline"
    isLoading?: boolean
    type?: "button" | "submit"
    disabled?: boolean
}

const CustomButton: React.FC<Props> = ({
    text,
    onClick,
    styleBtn = "normal",
    isLoading = false,
    type = "button",
}): JSX.Element => {
    return (
        <Button onClick={onClick} styleBtn={styleBtn} type={type} disabled={isLoading}>
            {isLoading ? <ReactLoading type="spin" color="white" height={26} width={26} /> : text}
        </Button>
    )
}

const Button = style("button")<Props>`
    z-index: 10;
    background-color: ${({ theme, styleBtn }) =>
        styleBtn === "outline" ? "transparent" : theme.colors.blue};
    color: ${({ theme, styleBtn }) =>
        styleBtn === "outline" ? theme.colors.blue : theme.colors.white};
    border: ${({ styleBtn }) => (styleBtn === "outline" ? "2px solid #3498db" : "none")};
    border-radius: 999rem;
    font-weight: 500;
    padding: 1rem 2rem;
    cursor: pointer;
`

export default CustomButton
