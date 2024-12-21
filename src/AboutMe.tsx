import { Box, Typography, useTheme, Grid } from "@mui/material"
import evolution from "./assets/evolution.png"
import { motion } from "framer-motion"
import { useState } from "react"
import { TypingText } from "./TypingText"

export const AboutMe = () => {
    const [viewPort, setViewPort] = useState(false)
    const theme = useTheme()
    const screens = theme.breakpoints.values
    const isXs = screens.xs

    return (
        <Grid
            id="about"
            container
            sx={{
                minHeight: "90vh",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                overflowX: "hidden",
                width: "100%",
            }}
        >
            <Grid
                item
                xs={8}
                sm={6}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <motion.img
                    transition={{
                        duration: 0.25,
                        delay: 0.2,
                    }}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{
                        opacity: viewPort ? 1 : 0,
                        x: viewPort ? 0 : 5,
                    }}
                    onViewportEnter={() => setViewPort(true)}
                    onViewportLeave={() => setViewPort(false)}
                    src={evolution}
                    alt="evolution-monkey"
                    style={{
                        width: "80%",
                    }}
                />
            </Grid>
            <Grid
                item
                xs={10}
                sm={4}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    mx: isXs ? 2 : 0,
                }}
            >
                <motion.div
                    style={{ width: "100%" }}
                    transition={{
                        duration: 0.25,
                        delay: 0.2,
                    }}
                    initial={{ opacity: 0, x: 10, dur: 1 }}
                    animate={{
                        opacity: viewPort ? 1 : 0,
                        x: viewPort ? 5 : 0,
                    }}
                    onViewportEnter={() => setViewPort(true)}
                    onViewportLeave={() => setViewPort(false)}
                >
                    <Box width="100%">{TypingText({ text: "About Me" })}</Box>
                    <Typography variant="body1">Hi, I'm Saeed!</Typography>
                    <Typography variant="body2">
                        I am a passionate developer specializing in React app
                        development. I have experience in building web
                        applications using React, Redux, and TypeScript.
                    </Typography>
                    <Typography variant="body2">
                        Familiarity with Google Cloud's back-end technologies
                        enables me to build full-stack applications for my
                        clients, and I am driven by a desire to create original
                        and innovative projects. I'm always eager to learn new
                        technologies and continually improve my skills.
                    </Typography>
                    <Typography variant="body2">
                        I am looking forward to working on exciting projects and
                        collaborating with other developers.
                    </Typography>
                </motion.div>
            </Grid>
        </Grid>
    )
}
