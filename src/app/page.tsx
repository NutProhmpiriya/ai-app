import { ConfigProvider, Button } from 'antd'

import theme from '@/theme/themeConfig'

export default function Home() {
    return (
        <ConfigProvider theme={theme}>
            <main>
                <h1>Next.js + TypeScript</h1>
                <Button type="primary">Button</Button>
            </main>
        </ConfigProvider>
    )
}
