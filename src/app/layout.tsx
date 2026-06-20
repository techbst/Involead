import '@/styles/globals.css'
import { Metadata } from 'next'
import Providers from '@/providers/Providers'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Instrument_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const instrumentSans = Instrument_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-sans',
});

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
        <html lang="en" className={cn("font-sans", instrumentSans.variable)} suppressHydrationWarning>
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
