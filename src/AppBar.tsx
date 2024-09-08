import { Anchor, Space, Typography } from "antd"
import { HeroSection } from "./HeroSection"
import { AboutMe } from "./AboutMe"
import { Skills } from "./Skills"
import { Projects } from "./Projects"

import monkey from "./assets/monkey.png"
const { Text } = Typography
export const AppBar: React.FC = () => {
    return (
        <>
            <Space
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    position: "sticky",
                    transition: "all 0.5s",
                    zIndex: 2,
                    height: 50,
                }}
            >
                <Space align="start" style={{ marginLeft: 8 }}>
                    <Anchor
                        direction="horizontal"
                        items={[
                            {
                                key: "home",
                                href: "#home",
                                title: (
                                    <Text style={{ color: "#fff" }}>Home</Text>
                                ),
                            },
                            {
                                key: "about",
                                href: "#about",
                                title: (
                                    <Text style={{ color: "#fff" }}>About</Text>
                                ),
                            },
                            {
                                key: "skills",
                                href: "#skills",
                                title: (
                                    <Text style={{ color: "#fff" }}>
                                        Skills
                                    </Text>
                                ),
                            },
                            {
                                key: "projects",
                                href: "#projects",
                                title: (
                                    <Text style={{ color: "#fff" }}>
                                        Projects
                                    </Text>
                                ),
                            },
                        ]}
                    />
                </Space>
            </Space>
            <div id="home">
                <HeroSection />
            </div>
            <div
                id="about"
                >
                <AboutMe />
            </div>
            <div 
    id="skills"
    style={{
        position: "relative",
        overflow: "hidden",
    }}
>
    <div
        style={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${monkey})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            backgroundSize: "400px",
            opacity: 0.5,
            zIndex: -1,
        }}
    />
    <div style={{ position: "relative", zIndex: 1 }}>
        <Skills />
    </div>
</div>
            <div id="projects">
                <Projects />
            </div>
        </>
    )
}
