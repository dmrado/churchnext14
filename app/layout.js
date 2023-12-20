import '../public/css/bem.css'
import {Dosis,} from 'next/font/google'
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Dosis({subsets: ['latin']})
// const inter = Ubuntu({subsets: ['latin']})

export default function RootLayout({children}) {
    return (
        <html lang="en">

        <body className={inter.className}>
        <Header/>
        <main
            // className="container"
        >{children}</main>
        <Footer/>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        </body>
        </html>
    )
}
