import '@/styles/globals.css'
import { Metadata } from 'next'
import Providers from '@/providers/Providers'
import Footer from '@/components/footer'
import Header from '@/components/header'

export const metadata: Metadata = {
    title: 'InvoLead',
    description: 'Enterprise frontend built with Next.js',
    icons: {
        icon: '/img/logo.png',
        apple: '/img/logo.png',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="font-sans" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Providers>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
