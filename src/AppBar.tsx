import { Anchor, Space, Typography } from "antd";
import { HeroSection } from "./HeroSection";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import monkey from "./assets/monkey.png";
import { motion } from "framer-motion";

const { Text } = Typography;
export const AppBar = () => {
    return (
        <>
            <Space
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    position: "relative",
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
                                title: <Text style={{ color: "#ffd743" }}>Home</Text>,
                            },
                            {
                                key: "about",
                                href: "#about",
                                title: <Text style={{ color: "#ffd743" }}>About</Text>,
                            },
                            {
                                key: "skills",
                                href: "#skills",
                                title: <Text style={{ color: "#ffd743" }}>Skills</Text>,
                            },
                            {
                                key: "projects",
                                href: "#projects",
                                title: <Text style={{ color: "#ffd743" }}>Projects</Text>,
                            },
                        ]}
                    />
                </Space>
            </Space>
            <div id="home" style={{ position: 'relative', width: '100%' }}>
                <HeroSection />
            </div>
            <div id="about" style={{ position: 'relative', width: '100%' }}>
                <AboutMe />
            </div>
            <div style={{ position: 'relative', width: '100%' }} id="skills">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: 'smooth',
            repeatType: 'mirror',
            duration: 2,
            repeat: Infinity,
          }}
          src={monkey}
          alt="floater"
          style={{
            position: 'absolute',
            top: '0%',  // Adjusted position to keep it balanced in view
            left: '0%',
            transform: 'translateX(-50%)',  // Centers the image horizontally
            width: '100%',  // Half the width of the container
            height: '100%',  // Maintain aspect ratio at half the height
            objectFit: 'contain',  // Keeps the image fully visible without cropping
            zIndex: -1,
            opacity: 0.3, // Adjust to your preference
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Skills />
        </div>
    </div>
            <div id="projects">
                <Projects />
            </div>
        </>
    );
};
