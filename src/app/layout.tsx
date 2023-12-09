import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/AntdRegistry'

import './globals.css'
import BaseProps from '@/types/baseProps'
import DefaultLayout from '@/components/layout/DefaultLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AI App: DEMO',
    description: "This is a demo of OpenAI's GPT API.",
}

export default function RootLayout(props: BaseProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <DefaultLayout>{props.children}</DefaultLayout>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
