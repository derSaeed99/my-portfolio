import { Button, Grid, Image, Layout, Popover, Space, Typography } from "antd"
import monkey from "./assets/top-monkey.svg"
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
} from "@ant-design/icons"

const { useBreakpoint } = Grid

export const HeroSection = () => {
    const screens = useBreakpoint()
    const isXs = screens.xs
    return (
        <Layout.Content
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: isXs ? "column" : "row",
            }}
        >
            <Space align="start" direction="vertical" size="small" style={{marginLeft:8}}>
                <Typography.Title  level={1} style={{ marginBottom: 0, color:"#fff" }}>
                    Well, hello there! 🤙,
                    <br /> I'm a Web Developer
                </Typography.Title>
                <Typography.Text style={{ fontSize: 24, color:"#fff" }}>
                    I make Apps for Web...you want one? ↓ 😉
                </Typography.Text>
                <Space style={{ width: "100%", marginTop: 18, marginLeft: !isXs ? 300 : 0, color:"#fff" }} size="large">
                    <Button
                    target="_blank"
                    href="https://github.com/derSaeed99/"
                        icon={<GithubOutlined style={{ color: "#500055" }} />}
                    />
                    <Button
                    target="_blank"
                    href="https://www.linkedin.com/in/armughan-saeed-35a8692ba/"
                        icon={<LinkedinOutlined style={{ color: "#500055" }} />}
                    />
                    <Button
                        icon={<Popover content={<Typography color="#000000">saeed@signatureapp.de</Typography>} title={<Typography.Text color="black">Write me!</Typography.Text>}><MailOutlined style={{ color: "#500055" }} /></Popover>}
                    />
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
                    <div
                        style={{
                            width: "90%", // Adjust as needed
                            height: "90vh",
                            position: "relative",
                            overflow: "hidden",
                            maskImage:
                                "radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)",
                            WebkitMaskImage:
                                "radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)",
                        }}
                    >
                        <Image
                            src={monkey}
                            alt="scientist-monkey"
                            width={"100%"}
                            height={"100%"}
                            preview={false}
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </Space>
        </Layout.Content>
    )
}
