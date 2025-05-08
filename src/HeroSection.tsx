import {
    Button,
    Typography,
    Box,
    Popover,
    IconButton,
    Grid,
    useTheme,
    Divider,
    TextField,
    InputAdornment,
    Snackbar,
    CircularProgress,
} from "@mui/material"
import monkey from "./assets/top-monkey.svg"
import { Close, GitHub, LinkedIn, Mail } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import CheckIcon from "@mui/icons-material/Check"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import SendIcon from "@mui/icons-material/Send"
import { useForm, ValidationError } from "@formspree/react"

export const HeroSection = () => {
    const theme = useTheme()
    const [state, handleSubmit] = useForm("xqaqbwqv")
    const [viewPort, setViewPort] = useState<boolean>(false)
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const [anchorElEmail, setAnchorElEmail] =
        useState<HTMLButtonElement | null>(null)
    const [anchorElForm, setAnchorElForm] = useState<HTMLButtonElement | null>(
        null
    )

    const handleClickEmailOpen = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorElEmail(event.currentTarget)
    }

    const handleClickFormOpen = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorElForm(event.currentTarget)
    }

    const handleCloseEmail = () => {
        setAnchorElEmail(null)
    }

    const handleCloseForm = () => {
        setAnchorElForm(null)
        setEmail("")
    }

    const closeSnackbar = () => {
        setSnackBarOpen(false)
    }

    const openEmail = Boolean(anchorElEmail)

    const openForm = Boolean(anchorElForm)

    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (state.succeeded) {
            setSnackBarOpen(true)
            handleCloseForm()
        }
    }, [state.succeeded])

    const handleCopy = () => {
        navigator.clipboard.writeText("saeed@signatureapp.de").then(() => {
            setCopied(true)
            setTimeout(() => {
                setAnchorElEmail(null)
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
                    I'm a{" "}
                    <span
                        style={{
                            color: "#3c3c3c",
                            marginLeft: 5,
                            marginRight: 5,
                        }}
                    >
                        Web
                    </span>{" "}
                    Developer
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
                    I make{" "}
                    <span
                        style={{
                            color: "#3c3c3c",
                            marginLeft: 5,
                            marginRight: 5,
                        }}
                    >
                        Apps
                    </span>{" "}
                    for Web
                </Typography>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        mr: 2,
                        color: "#3c3c3c",
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
                            borderRadius: 50,
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        <motion.div whileTap={{ scale: 2 }}>
                            <Button
                                target="_blank"
                                href="https://github.com/derSaeed99/"
                                startIcon={<GitHub />}
                                sx={{
                                    color: theme.palette.primary.main,
                                    ml: 2,
                                }}
                            />
                        </motion.div>
                        <Divider orientation="vertical" />
                        <motion.div whileTap={{ scale: 2 }}>
                            <Button
                                target="_blank"
                                href="https://www.linkedin.com/in/armughan-saeed-35a8692ba/"
                                startIcon={<LinkedIn />}
                                sx={{
                                    color: theme.palette.primary.main,
                                    ml: 1,
                                }}
                            />
                        </motion.div>
                        <Divider orientation="vertical" />
                        <motion.div whileTap={{ scale: 2 }}>
                            <Button
                                onClick={handleClickEmailOpen}
                                startIcon={<Mail />}
                                sx={{
                                    color: theme.palette.primary.main,
                                    ml: 1,
                                }}
                            />
                            <Popover
                                open={openEmail}
                                anchorEl={anchorElEmail}
                                onClose={handleCloseEmail}
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
                        <Divider orientation="vertical" />
                        <motion.div whileTap={{ scale: 2 }}>
                            <Button
                                onClick={handleClickFormOpen}
                                startIcon={<ContactMailIcon />}
                                sx={{
                                    color: theme.palette.primary.main,
                                    ml: 1,
                                }}
                            />
                            <Popover
                                open={openForm}
                                anchorEl={anchorElForm}
                                onClose={handleCloseForm}
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
                                <Box
                                    component="form"
                                    onSubmit={handleSubmit}
                                    gap={2}
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography variant="button">
                                        Get Contacted
                                    </Typography>
                                    <TextField
                                        variant="standard"
                                        autoComplete="off"
                                        type="email"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Email"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        type="submit"
                                                        disabled={
                                                            state.submitting
                                                        }
                                                    >
                                                        {state.submitting ? (
                                                            <CircularProgress
                                                                color="secondary"
                                                                size="1.5rem"
                                                            />
                                                        ) : (
                                                            <SendIcon />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </Box>
                            </Popover>
                        </motion.div>
                    </Box>
                    {state.succeeded && snackBarOpen && (
                        <Snackbar
                            autoHideDuration={3000}
                            onClose={closeSnackbar}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            ContentProps={{
                                sx: {
                                    backgroundColor: (theme) =>
                                        theme.palette.warning.main,
                                    color: "#fff",
                                },
                            }}
                            open={snackBarOpen && state.succeeded}
                            message={"Thanks! I'll answer you ASAP!"}
                            action={<Close onClick={closeSnackbar} />}
                        />
                    )}
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
                            fill: "#3c3c3c",
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}
