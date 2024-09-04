import { Card, Image, Layout, Space, Typography } from "antd"
import reactIcon from "./assets/react-icon.png"
import tsIcon from "./assets/ts-icon.png"
import googleCloud from "./assets/google-cloud.webp"
const { Title, Paragraph } = Typography
export const Skills = () => {
    return (
        <Layout.Content
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
                marginLeft: 20,
                
            }}
        >
            <Title style={{marginBottom:-16, color:"#fff", marginLeft: 20,}} level={1}>Skills</Title>
            <Card bordered={false} style={{ background:"transparent"}}>
                <Card.Meta
                    title={<Space align="center"><Title style={{color:"#fff"}} level={3}>React</Title><Image width={30} height={"100%"} preview={false} src={reactIcon} alt="react-icon"/></Space>}
                    description={
                        <Paragraph style={{color:"#fff"}}>
                            I started learning React.js on my own three years ago. After just six months, I landed a job as a Junior Web Developer at Signature F2F GmbH. Since then, I've greatly improved my React.js skills and can now build almost anything for the web with it.

From creating smooth user interfaces to developing full-featured web applications, I've worked on a wide range of projects. My experience with React.js has made me confident in handling any web development task, and I’m always eager to keep learning and improving.
                        </Paragraph>
                    }
                />
            </Card>
            <Card bordered={false} style={{ background:"transparent"}}>
                <Card.Meta
                    title={<Space align="center"><Title style={{color:"#fff"}} level={3}>Typescript</Title><Image width={30} height={"100%"} preview={false} src={tsIcon} alt="ts-icon"/></Space>}
                    description={
                        <Paragraph style={{color:"#fff"}}>
                            I began my coding journey with vanilla JavaScript, but right from the start, I also started learning TypeScript. Early on, I worked on React apps using TypeScript, which quickly became my go-to language.

Over time, I’ve become highly proficient with TypeScript, and it’s now my main programming language. Whether I’m building complex web applications or enhancing existing projects, TypeScript allows me to write clean, efficient, and reliable code. I’m confident in using TypeScript for any development task and continue to refine my skills with it.
                        </Paragraph>
                    }
                />
            </Card>
            <Card bordered={false} style={{ background:"transparent"}}>
                <Card.Meta
                    title={<Space align="center"><Title style={{color:"#fff"}} level={3}>Google Cloud</Title><Image width={30} height={"100%"} preview={false} src={googleCloud} alt="gcloud-icon"/></Space>}
                    description={
                        <Paragraph style={{color:"#fff"}}>
                            I have solid experience with Google Cloud, which I use to build, deploy, and manage scalable applications. From setting up cloud-based infrastructure to leveraging Google Cloud services like Firebase, Cloud Functions, and Cloud Storage, I’ve worked on a variety of projects that required reliable and efficient cloud solutions.

My knowledge of Google Cloud allows me to ensure that applications run smoothly and can handle growth. I’m comfortable working with different aspects of the platform and continually explore new features to enhance my cloud development skills.
                        </Paragraph>
                    }
                />
            </Card>
            <Card bordered={false} style={{width:"90%", background:"transparent"}}>
                <Card.Meta
                    title={<Title style={{color:"#fff"}} level={3}>Additional Skills

                    </Title>}
                    description={
                        <Paragraph style={{color:"#fff"}}>
                            Beyond my core expertise, I have a strong grasp of essential tools and practices that enhance the development process. I'm proficient with GitHub, where I manage code repositories, collaborate on projects, and streamline version control. I’m also experienced in using linting tools to ensure code quality and consistency across projects.

I have a solid understanding of Redux for state management in React applications, allowing me to build scalable and maintainable apps. Additionally, I have hands-on experience with end-to-end testing, which helps me deliver reliable and bug-free applications. I’m well-versed in hosting and deploying applications, ensuring they are accessible, secure, and performant.

These skills enable me to manage the full lifecycle of web development projects efficiently and effectively.
                        </Paragraph>
                    }
                />
            </Card>
        </Layout.Content>
    )
}
