import { Layout, Space, Typography, Image, Grid } from "antd"
import evolution from "./assets/evolution.png"
const { Title, Paragraph, Text } = Typography
const { useBreakpoint } = Grid

export const AboutMe = () => {
    const screens = useBreakpoint()
    const isXs = screens.xs
    return (
        <Layout.Content
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginLeft: 50,
                marginRight: 50,
                flexDirection: isXs ? "column" : "row",
            }}
        >
            <Space align="start" style={{marginBottom: isXs ? -50 : 0, marginTop: isXs ? 50 : 0,}}>
                <Image
                    src={evolution}
                    alt="evolution-monkey"
                    height={"90%"}
                    width="300px"
                    preview={false}
                />
            </Space>
            <Space align="end" direction="vertical" size="small" style={{width:300}}>
                <Title style={{color:"#fff"}} level={1} >About Me</Title>
                <Text style={{ fontSize: 18, marginBottom: 8,color:"#fff", textAlign: "right" }}>
                    Hi, I'm Saeed!
                </Text>
                <Paragraph style={{color:"#fff", textAlign: "right"}}>
                    I am a passionate developer specializing in React app
                    development. I have experience in building web applications
                    using React, Redux, and TypeScript.
                </Paragraph>
                <Paragraph style={{color:"#fff", textAlign: "right"}}>
                    Familiarity with Google Cloud's back-end technologies enables
                    me to build full-stack applications for my clients, and I am
                    driven by a desire to create original and innovative projects.
                    I'm always eager to learn new technologies and continually improve my skills.
                </Paragraph>
                <Paragraph style={{color:"#fff", textAlign: "right"}}>
                    I am looking forward to working on exciting projects and
                    collaborating with other developers.
                </Paragraph>
            </Space>
        </Layout.Content>
    )
}
