import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js"
import styled from "styled-components"
import Modal from "react-modal"
import { loadStripe } from "@stripe/stripe-js"

import { Button, IngredientBtn, RandomPhoto, PizzAnimation, PaymentForm } from "src/components"

import PizzaContext from "src/context/PizzaContext"

import cheese from "src/assets/pizza/cheese.png"
import mushroom from "src/assets/pizza/mushroom.png"
import olives from "src/assets/pizza/olives.png"
import spicy from "src/assets/pizza/spicy.png"
import tomato from "src/assets/pizza/tomato.png"
import creme from "src/assets/pizza/creme.png"

const stripePromise = loadStripe(
    "pk_test_51KYJ3ZJO1egPqWNOg8VLzFOFTywkgceLeInavQNDaQatoJoweJzFUqhWUVMhxyGjaxVQOAPr0RpVIung0iKFtpWP004ujGjdUZ",
)

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        height: "20rem",
        width: "26rem",
    },
    overlay: {
        zIndex: 30,
    },
}
Modal.setAppElement("#app")

const Custom: React.FC = (): JSX.Element => {
    const { pizza, setPizza, clearContent } = useContext(PizzaContext)
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false)

    const cancelPizza = (e: Event) => {
        e.preventDefault()

        clearContent()
        return navigate("/")
    }

    const handleSubmit = async (e: Event) => {
        e.preventDefault()

        setIsLoading(true)
        setIsOpen(true)
    }
    return (
        <>
            <RandomPhoto />
            <Flex direction="column">
                <IngredientList style={{ textAlign: "center" }}>
                    <PizzAnimation />
                    <Flex>
                        <IngredientBtn
                            imgSrc={cheese}
                            onClick={() => setPizza({ ...pizza, cheese: !pizza?.cheese })}
                            disabled={pizza?.done}
                            active={pizza?.cheese}
                        />
                        <IngredientBtn
                            imgSrc={mushroom}
                            onClick={() => setPizza({ ...pizza, mushroom: !pizza?.mushroom })}
                            disabled={pizza?.done}
                            active={pizza?.mushroom}
                        />
                        <IngredientBtn
                            imgSrc={olives}
                            onClick={() => setPizza({ ...pizza, olives: !pizza?.olives })}
                            disabled={pizza?.done}
                            active={pizza?.olives}
                        />
                        <IngredientBtn
                            imgSrc={spicy}
                            onClick={() => setPizza({ ...pizza, spicy: !pizza?.spicy })}
                            disabled={pizza?.done}
                            active={pizza?.spicy}
                        />
                        <IngredientBtn
                            imgSrc={tomato}
                            onClick={() => setPizza({ ...pizza, sauce: "tomato" })}
                            disabled={pizza?.done}
                            active={pizza?.sauce === "tomato"}
                        />
                        <IngredientBtn
                            imgSrc={creme}
                            onClick={() => setPizza({ ...pizza, sauce: "creme" })}
                            disabled={pizza?.done}
                            active={pizza?.sauce === "creme"}
                        />
                    </Flex>
                </IngredientList>
                <Flex>
                    <Button
                        text="Annuler"
                        onClick={(e: Event) => cancelPizza(e)}
                        styleBtn="outline"
                    />
                    <Button
                        text="Recevoir ma pizza"
                        onClick={(e: Event) => handleSubmit(e)}
                        isLoading={isLoading}
                    />
                </Flex>
            </Flex>
            <Modal
                isOpen={modalIsOpen}
                onAfterClose={() => setIsLoading(false)}
                style={customStyles}
                contentLabel="Payment Process"
            >
                <Elements stripe={stripePromise}>
                    <PaymentForm onClose={() => setIsOpen(false)} />
                </Elements>
            </Modal>
        </>
    )
}

const Flex = styled("div")<any>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: center;
    gap: 1rem;
    z-index: 10;
    margin-bottom: 2rem;
`

const IngredientList = styled("div")`
    text-align: center;
    margin-bottom: 1rem;
`

export default Custom
