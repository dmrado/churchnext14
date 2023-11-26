import Link from "next/link";

export default function RootLayout({children}) {
    return (
        <div>
            <h1>О нас</h1>
            <ul>
                <li>
                    <Link href="/about/contacts">Контакты</Link>
                </li>
                <li>
                    <Link href="/about/team">Наша команда</Link>
                </li>
            </ul>
            {children}

        </div>
    )
}
