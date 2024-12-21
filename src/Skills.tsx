import { Box, Grid, Typography, Divider } from "@mui/material"
import reactIcon from "./assets/react-animated.gif"
import tsIcon from "./assets/ts-animated.gif"
import googleCloud from "./assets/google-animated.gif"
import skillIcon from "./assets/skills-animated.gif"
import { TypingText } from "./TypingText"
import { motion } from "framer-motion"
import monkey from "./assets/monkey.png"

const SkillsContent = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                px: 2,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Grid item xs={12}>
                {TypingText({ text: "Skills" })}
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{ my: 2 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        React{" "}
                        <img
                            src={reactIcon}
                            style={{
                                width: 20,
                                height: "100%",
                                marginLeft: "10px",
                            }}
                        />
                    </Typography>
                    <Typography variant="body1">
                        I started learning React.js on my own three years ago.
                        After just six months, I landed a job as a Junior Web
                        Developer at Signature F2F GmbH. Since then, I've
                        greatly improved my React.js skills and can now build
                        almost anything for the web with it. From creating
                        smooth user interfaces to developing full-featured web
                        applications, I've worked on a wide range of projects.
                        My experience with React.js has made me confident in
                        handling any web development task, and I’m always eager
                        to keep learning and improving.
                    </Typography>
                    <Divider sx={{ mt: 2, mb: 2, width: "50%" }} />
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{ my: 2 }}>
                    <Typography variant="h5">
                        Typescript{" "}
                        <img
                            src={tsIcon}
                            style={{
                                width: 20,
                                height: "100%",
                                marginLeft: "10px",
                            }}
                        />
                    </Typography>
                    <Typography variant="body1">
                        I began my coding journey with vanilla JavaScript, but
                        right from the start, I also started learning
                        TypeScript. Early on, I worked on React apps using
                        TypeScript, which quickly became my go-to language. Over
                        time, I’ve become highly proficient with TypeScript, and
                        it’s now my main programming language. Whether I’m
                        building complex web applications or enhancing existing
                        projects, TypeScript allows me to write clean,
                        efficient, and reliable code. I’m confident in using
                        TypeScript for any development task and continue to
                        refine my skills with it.
                    </Typography>
                    <Divider sx={{ mt: 2, mb: 2, width: "50%" }} />
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{ my: 2 }}>
                    <Typography variant="h5">
                        Google Cloud{" "}
                        <img
                            src={googleCloud}
                            style={{
                                width: 20,
                                height: "100%",
                                marginLeft: "10px",
                            }}
                        />
                    </Typography>
                    <Typography variant="body1">
                        I have solid experience with Google Cloud, which I use
                        to build, deploy, and manage scalable applications. From
                        setting up cloud-based infrastructure to leveraging
                        Google Cloud services like Firebase, Cloud Functions,
                        and Cloud Storage, I’ve worked on a variety of projects
                        that required reliable and efficient cloud solutions. My
                        knowledge of Google Cloud allows me to ensure that
                        applications run smoothly and can handle growth. I’m
                        comfortable working with different aspects of the
                        platform and continually explore new features to enhance
                        my cloud development skills.
                    </Typography>
                    <Divider sx={{ mt: 2, mb: 2, width: "50%" }} />
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{ my: 2 }}>
                    <Typography variant="h5">
                        Additional Skills{" "}
                        <img
                            src={skillIcon}
                            style={{
                                width: 20,
                                height: "100%",
                                marginLeft: "10px",
                            }}
                        />
                    </Typography>
                    <Typography variant="body1">
                        Beyond my core expertise, I have a strong grasp of
                        essential tools and practices that enhance the
                        development process. I'm proficient with GitHub, where I
                        manage code repositories, collaborate on projects, and
                        streamline version control. I’m also experienced in
                        using linting tools to ensure code quality and
                        consistency across projects. I have a solid
                        understanding of Redux for state management in React
                        applications, allowing me to build scalable and
                        maintainable apps. Additionally, I have hands-on
                        experience with end-to-end testing, which helps me
                        deliver reliable and bug-free applications. I’m
                        well-versed in hosting and deploying applications,
                        ensuring they are accessible, secure, and performant.
                        These skills enable me to manage the full lifecycle of
                        web development projects efficiently and effectively.
                    </Typography>
                    <Divider sx={{ mt: 2, mb: 2, width: "50%" }} />
                </Box>
            </Grid>
        </Grid>
    )
}

export const Skills = () => {
    return (
        <Box
            id="skills"
            sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
            }}
        >
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
                <SkillsContent />
            </Box>
        </Box>
    )
}
