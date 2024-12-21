import { Box } from "@mui/material"
import { HeroSection } from "./HeroSection"
import { AboutMe } from "./AboutMe"
import { Skills } from "./Skills"
import { Projects } from "./Projects"
import monkey from "./assets/monkey.png"
import { motion } from "framer-motion"

export const Content = () => {
    return (
        <Box>
            <Box id="home" sx={{ width: "100%" }}>
                <HeroSection />
            </Box>
            <Box id="about" sx={{ width: "100%" }}>
                <AboutMe />
            </Box>
            <Box sx={{ width: "100%" }} id="skills">
                <motion.img
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 2,
                        repeat: Infinity,
                    }}
                    src={monkey}
                    alt="floater"
                    style={{
                        position: "absolute",
                        top: "0%",
                        left: "0%",
                        transform: "translateX(-50%)",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        zIndex: -1,
                        opacity: 0.3,
                    }}
                />
                <Box sx={{ zIndex: 1 }}>
                    <Skills />
                </Box>
            </Box>
            <Box id="projects" sx={{ width: "100%" }}>
                <Projects />
            </Box>
        </Box>
    )
}
