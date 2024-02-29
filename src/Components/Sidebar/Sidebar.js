
import React, {useState} from 'react';
import { Breadcrumb, Layout, Menu, theme,Button } from 'antd';
import {
    CaretUpFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    CaretLeftFilled,
    CaretRightFilled,
    AccountBookFilled,
    BellFilled,
    ProjectFilled,
    IdcardFilled,
    SignalFilled,
    SearchOutlined,
    VideoCameraOutlined,
    RightOutlined,
    LeftOutlined,
    QuestionCircleOutlined,
    BellOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    <Layout>
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme="light"
            className="fixed "
            style={{ position: 'fixed', height: '100vh' }}
        >
            <h5 className='uppercase bg-[#001529] text-white text-2xl p-4'>Synect<span className='text-red-700'>i</span>ks</h5>
            {/* ... your existing Sider content */}
            <Menu className='relative'
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <ProjectFilled />,
                        label: 'Dashboard',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'Projects',
                    },
                    {
                        key: '3',
                        icon: <SignalFilled />,
                        label: 'Team',
                    },
                    {
                        key: '4',
                        icon: <IdcardFilled />,
                        label: 'Reports',
                    },
                    {
                        key: '5',
                        icon: <AccountBookFilled />,
                        label: 'Preference',
                    },
                    {
                        key: '6',
                        icon: <BellFilled />,
                        label: 'Notifications',
                    },
                ]}
            />
            <Button theme="dark"
                className='bg-white absolute top-2/4 -right-3'
                type="text"
                icon={collapsed ? < RightOutlined className='' /> : <LeftOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 16,
                    height: 64,
                    clipPath: `polygon(0 0, 100% 21%, 99% 80%, 0% 100%)`
                }}
            />
        </Sider>
    </Layout>

};

export default Sidebar;
