// import './globals.css'
import {Dosis,} from 'next/font/google'
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Dosis({subsets: ['latin']})
// const inter = Ubuntu({subsets: ['latin']})

export default function RootLayout({children}) {
    return (
        <html lang="en">
        {/*todo заменить этот неправильный импорт на правильный там в css правильно прописать пути к баннерам параллаксным*/}
        <link href="/css/bem.css" rel="stylesheet" />

        <body className={inter.className}>
        <Header/>
        <main
            // className="container"
        >{children}</main>
        <Footer/>
        </body>
        </html>
    )
}
