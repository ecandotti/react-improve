import React, { useState, createContext, useEffect } from "react"

import { TOKEN_ID } from "src/configs/constants"

import { IPizzaContext } from "src/types/context/IPizzaContext"

interface Props {
    children: JSX.Element | JSX.Element[]
}

const PizzaContext = createContext<IPizzaContext>({
    pizza: {},
    setPizza: () => {},
    addContent: () => {},
    removeContent: () => {},
    clearContent: () => {},
})

export const PizzaContextProvider: React.FC<Props> = ({ children }) => {
    const [pizza, setPizza] = useState({})

    const addContent = (item: any) => {
        setPizza({ ...pizza, item })
    }

    const removeContent = (item: any) => {}

    const clearContent = () => {
        setPizza({})
    }

    useEffect(() => {
        localStorage.setItem(TOKEN_ID, JSON.stringify(pizza))
    }, [pizza])

    const context: IPizzaContext = {
        pizza,
        setPizza,
        addContent,
        removeContent,
        clearContent,
    }

    return <PizzaContext.Provider value={context}>{children}</PizzaContext.Provider>
}

export default PizzaContext
