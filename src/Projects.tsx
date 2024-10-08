import { Card, Layout, Image, Space, Button, Grid } from "antd";
import Text from "antd/es/typography/Text";
import githubIcon from "./assets/github-icon.png";
import agencyScreen from "./assets/agency.png";
import ptottScreen from "./assets/ptott.png";
import butaScreen from "./assets/buta.png";
import { ExportOutlined } from "@ant-design/icons";
import { TypingText } from "./TypingText";

const { useBreakpoint } = Grid;

export const Projects = () => {
    const screens = useBreakpoint();
    const isXs = screens.xs;

    return (
        <Layout.Content
            style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
                flexDirection: "column",
            }}
        >
            <Space>{TypingText({text:"Projects"})}</Space>
            <Space
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-evenly",
                    flexDirection: isXs ? "column" : "row",
                    paddingBottom: 80,
                    paddingTop: 50,
                }}
            >
                <Card
                    style={{ width: 300 }}
                    cover={<img alt="example" src={agencyScreen} />}
                    actions={[
                        <Button
                            target="_blank"
                            style={{ width: "100%" }}
                            type="link"
                            href="https://github.com/derSaeed99/landingAgency?tab=readme-ov-file"
                            icon={
                                <Space style={{ marginRight: 8 }}>
                                    <Image
                                        preview={false}
                                        width="20px"
                                        alt="github-icon"
                                        src={githubIcon}
                                        style={{ marginBottom: 4 }}
                                    />
                                </Space>
                            }
                        >
                            View Code
                        </Button>,
                        <Button
                            target="_blank"
                            style={{ width: "100%" }}
                            type="link"
                            href="https://agencylanding.web.app/"
                            icon={<ExportOutlined style={{ marginRight: 8 }} />}
                        >
                            Visit
                        </Button>,
                    ]}
                >
                    <Space direction="vertical" align="start">
                        <Text>
                            This is a basic landing page that can be used for a web development agency
                            <br />
                            <br />
                            <br />
                            <br />
                        </Text>
                    </Space>
                </Card>
                <Card
                    style={{ width: 300 }}
                    cover={<img alt="example" src={ptottScreen} />}
                    actions={[
                        <Button
                            target="_blank"
                            style={{ width: "100%" }}
                            type="link"
                            href="https://github.com/derSaeed99/vite-ptottsshop"
                            icon={
                                <Space style={{ marginRight: 8 }}>
                                    <Image
                                        preview={false}
                                        width="20px"
                                        alt="github-icon"
                                        src={githubIcon}
                                        style={{ marginBottom: 4 }}
                                    />
                                </Space>
                            }
                        >
                            View Code
                        </Button>,
                        <Button
                            target="_blank"
                            style={{ width: "100%" }}
                            type="link"
                            href="https://ptotts-shop.web.app/home/"
                            icon={<ExportOutlined style={{ marginRight: 8 }} />}
                        >
                            Visit
                        </Button>,
                    ]}
                >
                    <Space direction="vertical" align="start">
                        <Text>
                            This is a fun project that showcases some of the animation variety that can be achieved with React-Spring
                            <br />
                            <br />
                            <br />
                        </Text>
                    </Space>
                </Card>
                <Card
                    style={{ width: 300 }}
                    cover={<img alt="example" src={butaScreen} />}
                    actions={[
                        <Button
                            target="_blank"
                            style={{ width: "100%" }}
                            type="link"
                            href="https://github.com/derSaeed99/butaasia"
                            icon={
                                <Space style={{ marginRight: 8 }}>
                                    <Image
                                        preview={false}
                                        width="20px"
                                        alt="github-icon"
                                        src={githubIcon}
                                    />
                                </Space>
                            }
                        >
                            View Code
                        </Button>,
                        <Button
                            target="_blank"
                            style={{ width: "100%" }}
                            type="link"
                            href="https://butalanding.web.app/"
                            icon={<ExportOutlined style={{ marginRight: 8 }} />}
                        >
                            Visit
                        </Button>,
                    ]}
                >
                    <Space direction="vertical" align="start">
                        <Text>
                            This is an E-Commerce Page that allows the user to add products to a cart and calculate the total cost. Users can also rate the product.
                            <br />
                            <br />
                        </Text>
                    </Space>
                </Card>
            </Space>
        </Layout.Content>
    );
};
