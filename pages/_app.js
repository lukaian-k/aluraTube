import React from "react"
import { ThemeProvider } from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorModeProvider"


const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222"
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF"
    }
}


export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
}

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"light"}>
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const context = React.useContext(ColorModeContext)

    return (
        <ThemeProvider theme={theme[context.mode]}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}



// _app.js -> Definições globais do NextJS
// ThemeProvider -> Prover o tema para a app toda
// ColorModeProvider -> Prove o state de light ou dark mode para todo mundo