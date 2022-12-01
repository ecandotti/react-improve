import Button from "./components/Button"

import Home from "./pages/Home"

const App: React.FC = () => {
    return (
        <div className="h-full relative">
            <Home />
            <Button text="test" />
        </div>
    )
}

export default App
