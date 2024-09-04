import { Layout, Typography } from "antd"

const { Title, Paragraph, Text } = Typography

export const AboutMe = () => {
    return (
        <Layout.Content
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: 50,
                marginRight: 50,
            }}
        >
            <Title level={1} style={{color:"#fff"}}>About Me</Title>
            <Text style={{ fontSize: 18, marginBottom: 8,color:"#fff" }}>
                Hi, I'm Saeed!
            </Text>
            <Paragraph style={{color:"#fff"}}>
                I am a passionate developer specializing in React app
                development. I have experience in building web applications
                using React, Redux, and TypeScript.
            </Paragraph>
            <Paragraph style={{color:"#fff"}}>
            Familiarity with Google Cloud's back-end technologies enables
            me to build full-stack applications for my clients, and I am
            driven by a desire to create original and innovative projects.
            I'm always eager to learn new technologies and continually improve my skills.
            </Paragraph>
            <Paragraph style={{color:"#fff"}}>
                I am looking forward to working on exciting projects and
                collaborating with other developers.
            </Paragraph>
        </Layout.Content>
    )
}
