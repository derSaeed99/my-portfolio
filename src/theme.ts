// src/theme.js
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        primary: {
            main: "#F05365", // Custom primary color
        },
        secondary: {
            main: "#FABC2A", // Secondary color
        },
        text: {
            primary: "#000000", // Standard text color (black)
            secondary: "#FABC2A", // Secondary text color (for everything else)
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif", // Font for the application
        body1: {
            color: "black", // Standard color for body1
        },
        body2: {
            color: "black", // Standard color for body2
        },
        h1: {
            color: "#F05365", // Secondary color for headers (you can customize other header variants similarly)
        },
        h2: {
            color: "#F05365",
        },
        h3: {
            color: "#F05365",
        },
        h4: {
            color: "#F05365",
        },
        h5: {
            color: "#F05365",
        },
        h6: {
            color: "#F05365",
        },
        subtitle1: {
            color: "#FABC2A",
        },
        subtitle2: {
            color: "#FABC2A",
        },
        button: {
            color: "#FABC2A", // Optional: you can also change the button text color
        },
        caption: {
            color: "#FABC2A",
        },
        overline: {
            color: "#FABC2A",
        },
    },
})

export default theme
