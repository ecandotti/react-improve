import { useOutlet } from "react-router-dom"
import { CSSTransition, SwitchTransition } from "react-transition-group"

import Center from "./layout/Center"

import { routes } from "./configs/routes"

import "src/assets/styles/index.css"

const App: React.FC = () => {
    const currentOutlet = useOutlet()
    const { nodeRef } = routes.find(route => route.path === location.pathname) ?? {}

    return (
        <Center>
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    nodeRef={nodeRef as any}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                >
                    {state => (
                        <div ref={nodeRef as any} className="page">
                            {currentOutlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </Center>
    )
}

export default App
