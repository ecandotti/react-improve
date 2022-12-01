export interface IPizzaContext {
    pizza: {}
    setPizza: React.Dispatch<React.SetStateAction<{}>>
    addContent: (item: any) => void
    removeContent: (item: any) => void
    clearContent: () => void
}
