"use client";
import React, { useState } from "react";
import {
    AccountBookFilled,
    BellFilled,
    ProjectFilled,
    IdcardFilled,
    SignalFilled,
    SearchOutlined,
    VideoCameraOutlined,
    RightOutlined,
    LeftOutlined,
} from "@ant-design/icons";
import {
    Layout,
    Menu,
    Button,
} from "antd";
import Navbar from "@/Components/Navbar/Navbar";
import NavLink from "../nav-link";

const { Sider, Content } = Layout;

const MainLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSider = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Layout theme="dark" style={{ minHeight: "100vh" }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    theme="light"
                    className="fixed "
                    style={{ position: "fixed", height: "100vh" }}
                >
                    <h5 className="uppercase bg-[#001529] text-white text-2xl p-4">
                        Synect<span className="text-red-700">i</span>ks
                    </h5>
                    {/* ... your existing Sider content */}
                    <Menu
                        className="relative"
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={[
                            {
                                key: "1",
                                icon: <ProjectFilled />,
                                label: <NavLink href= "/main" >Dashboard</NavLink>,

                            },
                            {
                                key: "2",
                                icon: <VideoCameraOutlined />,
                                label: <NavLink href="/main/projects" >Projects</NavLink>,

                            },
                            {
                                key: "3",
                                icon: <SignalFilled />,
                                label: "Team",
                            },
                            {
                                key: "4",
                                icon: <IdcardFilled />,
                                label: "Reports",
                            },
                            {
                                key: "5",
                                icon: <AccountBookFilled />,
                                label: "Preference",
                            },
                            {
                                key: "6",
                                icon: <BellFilled />,
                                label: "Notifications",
                            },
                        ]}
                    />
                    <Button
                        theme="dark"
                        className="bg-white absolute top-2/4 -right-3"
                        type="text"
                        icon={collapsed ? <RightOutlined className="" /> : <LeftOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 16,
                            height: 64,
                            clipPath: `polygon(0 0, 100% 21%, 99% 80%, 0% 100%)`,
                        }}
                    />
                </Sider>
                <Layout
                    className="site-layout"
                    style={{ marginLeft: collapsed ? 80 : 200 }}
                >
                    <Navbar />
                    <Content
                        style={{ margin: "18px 16px", padding: "0px 10px", minHeight: 280 }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default MainLayout;
