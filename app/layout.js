import './globals.css'
import {Dosis,} from 'next/font/google'
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Dosis({subsets: ['latin']})

export const metadata = {
    title: 'Church',
    description: 'Church page',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">

        <link href="/css/bem.css" rel="stylesheet" />

        <body className={inter.className}>
        <Header/>
        <main className="container">{children}</main>
        <Footer/>
        </body>
        </html>
    )
}
