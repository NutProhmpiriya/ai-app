import React from 'react'
import { Layout, Menu } from 'antd'
import BaseProps from '@/types/baseProps'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import styles from './styles.module.css'

interface LeftSideBarProps extends BaseProps {
    collapsed: boolean
}

const LeftSideBar = (props: LeftSideBarProps) => {
    const listSideBar = [
        {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
        },
    ]
    return (
        <Layout.Sider trigger={null} collapsible collapsed={props.collapsed}>
            <div className={styles['demo-logo-vertical']} />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'Home',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'OpenAI Demo',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'OLLMA(FB) DEMO',
                    },
                    {
                        key: '4',
                        icon: <UploadOutlined />,
                        label: 'Google DEMO',
                    },
                ]}
            />
        </Layout.Sider>
    )
}

export default LeftSideBar
