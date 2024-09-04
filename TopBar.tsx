import { LeftOutlined, MenuOutlined } from "@ant-design/icons"
import { Badge, Image, Layout, Space, Typography } from "antd"
import { getISOWeek } from "date-fns"
import { useEffect, useState } from "react"
import React from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

import logo from "../assets/miimcom-text-logo.svg"
import { subscribeToMyNotifications } from "../firebase"
import { Notification } from "../model"
import { AvatarDropDown } from "../utils/AvatarDropDown"
import { NotificationIcon } from "../utils/NotificationsIcon"
import { TopBarDrawer } from "../utils/TopBarDrawer"

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<string | null>(null)

    useEffect(() => {
        let lastScrollY = window.pageYOffset

        const updateScrollDirection = () => {
            const scrollY = window.scrollY
            const direction = scrollY > lastScrollY ? "down" : "up"
            if (
                direction !== scrollDirection &&
                (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
            ) {
                setScrollDirection(direction)
            }
            lastScrollY = scrollY > 0 ? scrollY : 0
        }
        window.addEventListener("scroll", updateScrollDirection) // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection) // clean up
        }
    }, [scrollDirection])

    return scrollDirection
}

export const TopBar = () => {
    const scrollDirection = useScrollDirection()
    const [notifications, setNotifications] = useState<Notification[] | null>(
        null
    )
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    const userExists = userInfoFromLocalStorage
        ? JSON.parse(userInfoFromLocalStorage)
        : null
    useEffect(() => {
        if (userExists) {
            const unsubscribeToMyNotifications = subscribeToMyNotifications({
                userId: userExists?.uid,
                observer: (myNotifications: Notification[] | null) => {
                    setNotifications(myNotifications)
                },
                onError: (error) => {
                    setNotifications(null)
                    console.error(error)
                },
            })
            return () => {
                unsubscribeToMyNotifications()
            }
        }
    }, [])

    const newNotifications = notifications?.filter((notification) => {
        const filteredNotifications =
            notification.sender.userId !== userExists?.uid &&
            !notification.isRead
        return filteredNotifications
    })
    const newNotificationsCount = newNotifications?.length

    const { "*": messageId } = useParams<{ "*": string }>()
    const { userId } = useParams<{ userId: string }>()
    const isChat = pathname.endsWith(`/messages/${messageId}`)
    const isProfile = pathname.endsWith(`/profile/${userId}`)
    const [open, setOpen] = useState(false)
    const now = new Date()
    const currentISOWeek = getISOWeek(now)
    return (
        <Layout.Header
            style={{
                paddingLeft: 10,
                paddingRight: 10,
                borderBottom: "solid 1px GrayText",
                position: "sticky",
                top: scrollDirection === "down" ? "-100%" : "0",
                transition: "all 0.5s",
                zIndex: 2,
                height: 50,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                background: "#212121",
            }}
        >
            <Space style={{ height: 20, marginTop: -5, paddingRight: 10 }}>
                <Image
                    onClick={() => navigate("/memes")}
                    preview={false}
                    src={logo}
                    style={{
                        width: "100%",
                        maxWidth: "100px",
                    }}
                    alt="miimcom-logo"
                />
            </Space>
            <Space
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    width: "100%",
                    height: 45,
                    marginTop: 5,
                }}
            >
                {pathname.endsWith("/memes") || pathname.endsWith("/board") ? (
                    <>
                        <Badge
                            count={currentISOWeek === 4 ? "New Updates" : ""}
                            size="small"
                            offset={[40, 0]}
                        >
                            <MenuOutlined
                                style={{ fontSize: 20 }}
                                onClick={() => setOpen(!open)}
                                rev={<span />}
                            />
                        </Badge>
                        <TopBarDrawer
                            open={open}
                            onClose={() => setOpen(!open)}
                        />
                    </>
                ) : (
                    pathname.split("/")[1] && (
                        <Space>
                            <LeftOutlined
                                style={{ fontSize: 20 }}
                                rev={<span />}
                                onClick={() => {
                                    if (pathname.split("/")[1] === "profile") {
                                        navigate("/memes")
                                    } else {
                                        navigate(-1)
                                    }
                                }}
                            />
                            {pathname.endsWith("/messages") ? (
                                <Typography>{`/${
                                    pathname.split("/")[3]
                                }`}</Typography>
                            ) : isProfile ? (
                                <Typography>{`/${
                                    pathname.split("/")[1]
                                }`}</Typography>
                            ) : isChat ? (
                                <Typography>{`/messages`}</Typography>
                            ) : (
                                <Typography>{`/${
                                    pathname.split("/")[1]
                                }`}</Typography>
                            )}
                        </Space>
                    )
                )}
                <Space.Compact
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Badge
                        count={newNotificationsCount}
                        overflowCount={99}
                        offset={[-30, 10]}
                        size="small"
                    >
                        <NotificationIcon
                            style={{ width: 64, height: 64 }}
                            onClick={() => navigate("/notifications")}
                        />
                    </Badge>
                    <AvatarDropDown />
                </Space.Compact>
            </Space>
        </Layout.Header>
    )
}
