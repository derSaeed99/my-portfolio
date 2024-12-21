import {
    AppBar as MuiAppBar,
    Box,
    Typography,
    Toolbar,
    Button,
} from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Slide from "@mui/material/Slide"
import { animate } from "framer-motion"

interface Props {
    window?: () => Window
    children?: React.ReactElement<unknown>
}

function HideOnScroll(props: Props) {
    const { children, window } = props
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    })

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children ?? <div />}
        </Slide>
    )
}

const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        const topPosition = element.offsetTop
        animate(window.scrollY, topPosition, {
            duration: 0.8,
            ease: "easeInOut",
            onUpdate: (latest) => window.scrollTo(0, latest),
        })
    }
}

export const AppBar = ({ ...props }: Props) => {
    return (
        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                <MuiAppBar
                    position="sticky"
                    sx={{
                        backgroundColor: "transparent",
                        zIndex: 2,
                        boxShadow: "0",
                    }}
                >
                    <Toolbar>
                        <Box sx={{ display: "flex" }}>
                            <Button
                                variant="text"
                                sx={{
                                    marginLeft: 2,
                                    textDecoration: "underline",
                                    textTransform: "none",
                                }}
                                onClick={() => scrollToSection("home")}
                            >
                                <Typography variant="body1" color="primary">
                                    home
                                </Typography>
                            </Button>
                            <Button
                                variant="text"
                                sx={{
                                    marginLeft: 2,
                                    textDecoration: "underline",
                                    textTransform: "none",
                                }}
                                onClick={() => scrollToSection("about")}
                            >
                                <Typography color="primary" variant="body1">
                                    about
                                </Typography>
                            </Button>
                            <Button
                                variant="text"
                                sx={{
                                    marginLeft: 2,
                                    textDecoration: "underline",
                                    textTransform: "none",
                                }}
                                onClick={() => scrollToSection("skills")}
                            >
                                <Typography color="primary" variant="body1">
                                    skills
                                </Typography>
                            </Button>
                            <Button
                                variant="text"
                                sx={{
                                    marginLeft: 2,
                                    textDecoration: "underline",
                                    textTransform: "none",
                                }}
                                onClick={() => scrollToSection("projects")}
                            >
                                <Typography color="primary" variant="body1">
                                    projects
                                </Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </MuiAppBar>
            </HideOnScroll>
        </>
    )
}
