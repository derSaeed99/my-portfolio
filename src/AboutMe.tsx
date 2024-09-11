import { Layout, Space, Typography, Image, Grid } from "antd";
import evolution from "./assets/evolution.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { TypingText } from "./TypingText";

const { Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

export const AboutMe = () => {
    const [viewPort, setViewPort] = useState(false);
    const screens = useBreakpoint();
    const isXs = screens.xs;

    return (
        <Layout.Content
            style={{
                minHeight: isXs ? "120vh" : "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: isXs ? "column" : "row",
                marginRight:16
            }}
        >
            <Space align="start">
                <motion.div
                    transition={{
                        duration: 0.25,
                        delay: 0.2,
                    }}
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: viewPort ? 1 : 0, x: viewPort ? 0 : 10 }}
                    animate={{ opacity: viewPort ? 1 : 0, x: viewPort ? 0 : 10 }}
                    onViewportEnter={() => setViewPort(true)}
                    onViewportLeave={() => setViewPort(false)}
                >
                    <Image
                        src={evolution}
                        alt="evolution-monkey"
                        height={"90%"}
                        width="300px"
                        preview={false}
                    />
                </motion.div>
            </Space>
            <Space align="end" direction="vertical" size="small">
                <motion.div
                    transition={{
                        duration: 0.25,
                        delay: 0.2,
                    }}
                    initial={{ opacity: 0, x: -50, dur: 1 }}
                    whileInView={{ opacity: viewPort ? 1 : 0, x: viewPort ? 5 : 0 }}
                    animate={{ opacity: viewPort ? 1 : 0, x: viewPort ? 5 : 0 }}
                    onViewportEnter={() => setViewPort(true)}
                    onViewportLeave={() => setViewPort(false)}
                    style={{ display:"flex", flexDirection:"column", alignItems:"flex-end" }}
                >
                    <Space>{TypingText({ text: "About Me" })}</Space>
                    <Text style={{ fontSize: 18, marginBottom: 8, marginTop:24, color: "#fff", textAlign: "right" }}>
                        Hi, I'm Saeed!
                    </Text>
                    <Paragraph style={{ color: "#fff", textAlign: "right" }}>
                        I am a passionate developer specializing in React app development. I have experience in building web applications
                        using React, Redux, and TypeScript.
                    </Paragraph>
                    <Paragraph style={{ color: "#fff", textAlign: "right" }}>
                        Familiarity with Google Cloud's back-end technologies enables me to build full-stack applications for my clients, and I am
                        driven by a desire to create original and innovative projects. I'm always eager to learn new technologies and continually improve my skills.
                    </Paragraph>
                    <Paragraph style={{ color: "#fff", textAlign: "right" }}>
                        I am looking forward to working on exciting projects and collaborating with other developers.
                    </Paragraph>
                </motion.div>
            </Space>
        </Layout.Content>
    );
};
