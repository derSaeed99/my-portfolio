import { Button, Grid, Image, Layout, Popover, Space, Typography } from "antd";
import monkey from "./assets/top-monkey.svg";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useState } from "react";

const { useBreakpoint } = Grid;

export const HeroSection = () => {
    const [viewPort, setViewPort] = useState(false);
    const screens = useBreakpoint();
    const isXs = screens.xs;

    return (
        <Layout.Content
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: isXs ? "column" : "row",
            }}
        >
            <Space align="start" direction="vertical" size="small" style={{ marginLeft: !isXs ? 8 : 0 }}>
                <Typography.Title level={1} style={{ marginBottom: 0, color: "#fff", display: "flex" }}>
                    Well, hello there!{" "}
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: viewPort ? 1 : 0, x: viewPort ? 0 : 50 }}
                        animate={{ opacity: viewPort ? 1 : 0, x: viewPort ? 0 : 50 }}
                        onViewportEnter={() => setViewPort(true)}
                        onViewportLeave={() => setViewPort(false)}
                    >
                        🤙
                    </motion.div>
                    ,
                </Typography.Title>
                <Typography.Text style={{ fontSize: 24, color: "#fff" }}>I'm a Web Developer</Typography.Text>
                <Typography.Text style={{ fontSize: 24, color: "#fff" }}>
                    I make Apps for Web...you want one? ↓ 😉
                </Typography.Text>
                <Space style={{ width: "100%", marginTop: 18, marginLeft: !isXs ? 300 : 0, color: "#fff" }} size="large">
                    <motion.div whileTap={{ scale: 2 }}>
                        <Button
                            target="_blank"
                            href="https://github.com/derSaeed99/"
                            icon={<GithubOutlined style={{ color: "#500055" }} />}
                        />
                    </motion.div>
                    <motion.div whileTap={{ scale: 2 }}>
                        <Button
                            target="_blank"
                            href="https://www.linkedin.com/in/armughan-saeed-35a8692ba/"
                            icon={<LinkedinOutlined style={{ color: "#500055" }} />}
                        />
                    </motion.div>
                    <motion.div whileTap={{ scale: 2 }}>
                        <Button
                            icon={
                                <Popover
                                    content={<Typography color="#000000">saeed@signatureapp.de</Typography>}
                                    title={<Typography.Text color="black">Write me!</Typography.Text>}
                                >
                                    <MailOutlined style={{ color: "#500055" }} />
                                </Popover>
                            }
                        />
                    </motion.div>
                </Space>
            </Space>

            <Space align="end">
                <div
                    style={{
                        width: "100%",
                        height: "90vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        src={monkey}
                        alt="scientist-monkey"
                        height={"90%"}
                        preview={false}
                        style={{
                            objectFit: "cover",
                            overflow: "hidden",
                        }}
                    />
                </div>
            </Space>
        </Layout.Content>
    );
};
