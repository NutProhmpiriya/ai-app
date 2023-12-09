'use client'

import React, { useState } from 'react'
import { Layout, theme } from 'antd'
import BaseProps from '@/types/baseProps'
import HeaderApp from './HeaderApp'
import LeftSideBar from './LeftSideBar'

const DefaultLayout = (props: BaseProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    return (
        <Layout style={{ height: '100vh' }}>
            <LeftSideBar collapsed={collapsed} />
            <Layout>
                <HeaderApp collapsed={collapsed} setCollapsed={setCollapsed} colorBgContainer={colorBgContainer} />
                <Layout.Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {props.children}
                </Layout.Content>
            </Layout>
        </Layout>
    )
}

export default DefaultLayout
