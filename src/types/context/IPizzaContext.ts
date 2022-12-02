export interface IPizzaContext {
    pizza: IPizza
    setPizza: React.Dispatch<React.SetStateAction<{}>>
    clearContent: () => void
}
