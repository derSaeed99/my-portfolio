import { ThemeProvider } from "@emotion/react"
import { AboutMe } from "./AboutMe"
import { AppBar } from "./AppBar"
import { Footer } from "./Footer"
import { HeroSection } from "./HeroSection"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import theme from "./theme"
import { CssBaseline } from "@mui/material"

export const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar />
                <HeroSection />
                <AboutMe />
                <Skills />
                <Projects />
                <Footer />
            </ThemeProvider>
        </>
    )
}
