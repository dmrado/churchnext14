import '../../public/css/bem.css'
import {Dosis,} from 'next/font/google'
import Footer from "../components/Footer";
import Header from "../components/Header";
import {MainProvider} from '../context/MainProvider'
import {FileProvider} from "../context/FileProvider"


const inter = Dosis({subsets: ['latin']})
// const inter = Ubuntu({subsets: ['latin']})

export default function RootLayout({children}) {
    return (
        <html lang="en">

        <body className={inter.className}>

        <script src="https://kit.fontawesome.com/42b4beafb6.js" crossOrigin="anonymous"></script>

        <Header/>

        <MainProvider>
            <main>{children}</main>
        </MainProvider>

        <Footer/>

        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

        </body>
        </html>
    )
}
