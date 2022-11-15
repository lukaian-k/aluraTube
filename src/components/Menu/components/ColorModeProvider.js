import React from "react"


export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("me configure primeiro!") },
    toggleMode: () => { alert("me configure primeiro!") }
})

export default function ColorModeProvider({ children, ...props }) {
    const [mode, setMode] = React.useState(props.initialMode)

    function toggleMode() {
        if (mode === "dark") setMode("light")
        else setMode("dark")
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {children}
        </ColorModeContext.Provider >
    )
}