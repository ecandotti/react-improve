import styled from "styled-components"

interface Props {
    imgSrc: string
    onClick: any
    active: any
    disabled?: boolean
}

const IngredientBtn: React.FC<Props> = ({ imgSrc, onClick, active, disabled }): JSX.Element => {
    const handleAction = () => {
        if (disabled) {
            return
        } else {
            onClick()
        }
    }

    return (
        <Button onClick={handleAction} active={active} disabled={disabled}>
            <Img src={imgSrc} />
        </Button>
    )
}

interface ButtonProps {
    disabled?: boolean
    active?: boolean
}

const Button = styled("button")<ButtonProps>`
    border: 2rem;
    background-color: ${({ disabled }) => (disabled ? "#bdc3c7" : "#ecf0f1")};
    border-radius: 1rem;
    width: 70px;
    height: 70px;
    padding: 1rem;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    transition: 0.3s;
    border: 4px solid ${({ active }) => (active ? "#3498db" : "#bdc3c7")};
`

const Img = styled("img")`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export default IngredientBtn
