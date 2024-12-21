import {
    Button,
    Typography,
    Box,
    Popover,
    IconButton,
    Grid,
    useTheme,
    Divider,
} from "@mui/material"
import monkey from "./assets/top-monkey.svg"
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useState } from "react"
import CheckIcon from "@mui/icons-material/Check"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

export const HeroSection = () => {
    const theme = useTheme()
    const [viewPort, setViewPort] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    const open = Boolean(anchorEl)

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("saeed@signatureapp.de").then(() => {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        })
    }
    return (
        <Grid
            id="home"
            container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "90vh",
            }}
        >
            <Grid item xs={12} sm={6}>
                <Typography
                    gutterBottom
                    variant={"h4"}
                    align="right"
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 2,
                        mr: 2,
                        fontWeight: "bold",
                    }}
                >
                    Well, hello there!{" "}
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{
                            opacity: viewPort ? 1 : 0,
                            x: viewPort ? 0 : 50,
                        }}
                        animate={{
                            opacity: viewPort ? 1 : 0,
                            x: viewPort ? 0 : 50,
                        }}
                        onViewportEnter={() => setViewPort(true)}
                        onViewportLeave={() => setViewPort(false)}
                    >
                        🤙
                    </motion.div>
                </Typography>
                <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ mr: 2, display: "flex", justifyContent: "flex-end" }}
                >
                    I'm a Web Developer
                </Typography>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mr: 2,
                    }}
                >
                    I make Apps for Web
                </Typography>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        mr: 2,
                        color: "black",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    ...you want one? ↓ 😉
                </Typography>
                <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "flex-end", mr: 2 }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            borderRadius: 50,
                            backgroundColor: theme.palette.primary.main,
                        }}
                    >
                        <motion.div whileTap={{ scale: 2 }}>
                            <Button
                                target="_blank"
                                href="https://github.com/derSaeed99/"
                                startIcon={<GitHub />}
                                sx={{ color: theme.palette.secondary.main }}
                            />
                        </motion.div>
                        <Divider orientation="vertical" />
                        <motion.div whileTap={{ scale: 2 }}>
                            <Button
                                target="_blank"
                                href="https://www.linkedin.com/in/armughan-saeed-35a8692ba/"
                                startIcon={<LinkedIn />}
                                sx={{ color: theme.palette.secondary.main }}
                            />
                        </motion.div>
                        <Divider orientation="vertical" />
                        <motion.div whileTap={{ scale: 2 }}>
                            <Button
                                onClick={handleClick}
                                startIcon={<Mail />}
                                sx={{ color: theme.palette.secondary.main }}
                            />
                            <Popover
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "center",
                                }}
                                sx={{
                                    width: "100%",
                                    "& .MuiPopover-paper": {
                                        backgroundColor:
                                            theme.palette.primary.main,
                                    },
                                }}
                            >
                                <Typography
                                    color="textSecondary"
                                    sx={{
                                        m: 2,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    saeed@signatureapp.de{" "}
                                    <IconButton
                                        disabled={copied}
                                        onClick={handleCopy}
                                        sx={{
                                            ml: 2,
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        {copied ? (
                                            <CheckIcon
                                                sx={{ color: "green" }}
                                            />
                                        ) : (
                                            <ContentCopyIcon />
                                        )}
                                    </IconButton>
                                </Typography>
                            </Popover>
                        </motion.div>
                    </Box>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", justifyContent: "flex-end" }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={monkey}
                        alt="scientist-monkey"
                        height={"90%"}
                        style={{
                            objectFit: "cover",
                            overflow: "hidden",
                            fill: "black",
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}
