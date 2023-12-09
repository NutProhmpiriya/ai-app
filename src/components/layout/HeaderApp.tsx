import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd'
import BaseProps from '@/types/baseProps'

const { Header, Sider, Content } = Layout
interface HeaderAppProps extends BaseProps {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    colorBgContainer: string
}
const HeaderApp = (props: HeaderAppProps) => {
    return (
        <Header style={{ padding: 0, background: props.colorBgContainer }}>
            <Button
                type="text"
                icon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => props.setCollapsed(!props.collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    )
}

export default HeaderApp
