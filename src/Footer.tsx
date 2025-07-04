import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"

export const Footer = () => {
    const [isAtBottom, setIsAtBottom] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user is near the bottom of the page
            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 10

            setIsAtBottom(scrolledToBottom)
        }

        window.addEventListener("scroll", handleScroll)

        // Cleanup event listener
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <Box
            sx={{
                mt: 4,
                textAlign: "center",
                backgroundColor: "transparent",
                padding: "16px",
                opacity: isAtBottom ? 1 : 0.5,
                transition: "opacity 0.3s ease-in-out",
            }}
        >
            <Typography color="primary">
                {" "}
                Armughan Saeed • Cologne, Germany ❤️ 🍌
            </Typography>
        </Box>
    )
}
