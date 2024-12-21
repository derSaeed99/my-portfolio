import { Box, Typography, useTheme } from "@mui/material"

export const BananaIcon = () => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "1rem",
                borderRadius: 50,
                background: "lightGray",
                borderColor: "transparent",
                width: 40,
                height: 40,
            }}
        >
            <Typography sx={{ fontSize: "1rem" }}>🍌</Typography>{" "}
            {/* Emoji size */}
            <Typography
                sx={{ fontSize: "0.5rem", color: theme.palette.primary.main }}
            >
                Collect
            </Typography>{" "}
            {/* Text size */}
        </Box>
    )
}
