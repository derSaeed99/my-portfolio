import { Card, Typography, Button, Box, Grid } from "@mui/material"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { TypingText } from "./TypingText"
import githubIcon from "./assets/github-icon.png"
import agencyScreen from "./assets/agency.png"
import ptottScreen from "./assets/ptott.png"
import butaScreen from "./assets/buta.png"

export const Projects = () => {
    return (
        <Grid
            id="projects"
            container
            spacing={2}
            sx={{ pb: 2, minHeight: "90vh" }}
        >
            <Grid
                item
                xs={12}
                sx={{ display: "flex", alignItems: "flex-end", m: 2 }}
            >
                {TypingText({ text: "Projects" })}
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card sx={{ mx: 2, height: "100%" }}>
                    <img
                        alt="example"
                        src={agencyScreen}
                        style={{ width: "100%" }}
                    />
                    <Box sx={{ p: 2 }}>
                        <Typography>
                            This is a basic landing page that can be used for a
                            web development agency
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            p: 2,
                        }}
                    >
                        <Button
                            target="_blank"
                            href="https://github.com/derSaeed99/landingAgency?tab=readme-ov-file"
                            variant="text"
                            startIcon={
                                <img
                                    src={githubIcon}
                                    alt="github-icon"
                                    style={{ width: 20, marginBottom: 4 }}
                                />
                            }
                        >
                            View Code
                        </Button>
                        <Button
                            target="_blank"
                            href="https://agencylanding.web.app/"
                            variant="text"
                            startIcon={<OpenInNewIcon />}
                        >
                            Visit
                        </Button>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card sx={{ mx: 2, height: "100%" }}>
                    <img
                        alt="example"
                        src={ptottScreen}
                        style={{ width: "100%" }}
                    />
                    <Box sx={{ p: 2 }}>
                        <Typography>
                            This is a fun project that showcases some of the
                            animation variety that can be achieved with
                            React-Spring
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            p: 2,
                        }}
                    >
                        <Button
                            target="_blank"
                            href="https://github.com/derSaeed99/vite-ptottsshop"
                            variant="text"
                            startIcon={
                                <img
                                    src={githubIcon}
                                    alt="github-icon"
                                    style={{ width: 20, marginBottom: 4 }}
                                />
                            }
                        >
                            View Code
                        </Button>
                        <Button
                            target="_blank"
                            href="https://ptotts-shop.web.app/home/"
                            variant="text"
                            startIcon={<OpenInNewIcon />}
                        >
                            Visit
                        </Button>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card sx={{ mx: 2, height: "100%" }}>
                    <img
                        alt="example"
                        src={butaScreen}
                        style={{ width: "100%" }}
                    />
                    <Box sx={{ p: 2 }}>
                        <Typography>
                            This is an E-Commerce Page that allows the user to
                            add products to a cart and calculate the total cost.
                            Users can also rate the product.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            p: 2,
                        }}
                    >
                        <Button
                            target="_blank"
                            href="https://github.com/derSaeed99/butaasia"
                            variant="text"
                            startIcon={
                                <img
                                    src={githubIcon}
                                    alt="github-icon"
                                    style={{ width: 20, marginBottom: 4 }}
                                />
                            }
                        >
                            View Code
                        </Button>
                        <Button
                            target="_blank"
                            href="https://butalanding.web.app/"
                            variant="text"
                            startIcon={<OpenInNewIcon />}
                        >
                            Visit
                        </Button>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}
