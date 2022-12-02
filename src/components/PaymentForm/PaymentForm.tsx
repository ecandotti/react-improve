import styled from "styled-components"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { FormEvent } from "react"

import "./index.css"
import { Button } from ".."

interface Props {
    onClose: any
}

const PaymentForm: React.FC<Props> = ({ onClose }): JSX.Element => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (elements == null) {
            return
        }

        const { error, paymentMethod } = await stripe!.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement) as any,
        })
    }

    return (
        <form onSubmit={e => handleSubmit(e)} className="stripe__form">
            <Title>Régler la somme</Title>
            <CardElement className="custom-cardd" />
            <div className="cta">
                <Button text="X" onClick={() => onClose()} styleBtn="outline" />
                <Button text="Payer" type="submit" disabled={!stripe || !elements} />
            </div>
        </form>
    )
}

const Title = styled("h2")`
    text-align: center;
    margin-bottom: 2rem;
`

export default PaymentForm
