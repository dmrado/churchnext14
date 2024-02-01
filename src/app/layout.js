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

        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" defer>
            {(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")}

            {ym(96326668, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
        })}
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/96326668" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->

        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                async defer>
        </script>
        <script src="https://kit.fontawesome.com/42b4beafb6.js" crossOrigin="anonymous"></script>

        <Header/>

        <MainProvider>
            <FileProvider>
                <main>{children}</main>
            </FileProvider>
        </MainProvider>

        <Footer/>

        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

        </body>
</html>
)
}
