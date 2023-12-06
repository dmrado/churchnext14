import Link from "next/link";

const Footer = () => {
    const date = new Date()
    const fullYear = date.getFullYear()

    return (<>
            <footer className="footer">

                <Link href="/" className="logo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={69}
                        height={71}
                        viewBox="0 0 69 71"
                        fill="none"
                    >
                        <path
                            d="M34.9408 5L63.5709 50.6217H6.31069L34.9408 5Z"
                            stroke="#004E98"
                            strokeWidth={5}
                        />
                        <path
                            d="M34.0592 65.829L5.42908 20.2073L62.6893 20.2073L34.0592 65.829Z"
                            stroke="#004E98"
                            strokeWidth={5}
                        />
                    </svg>

                </Link>

                <div className="nav-text">
                    <p className="nav-text_1">Бейт-Иешуа</p>
                    <p className="nav-text_2">Синагога г. Артем</p>
                </div>


                <div className="footer__info">
                    <div className="footer__address">
                        <span>Адрес</span><br/>
                        г. Артем, Приморский край<br/>
                        <span>Телефон</span> <br/>
                        +7(9987) 777-87-87
                    </div>


                    <div className="footer__socials">
                        <svg className="footer__socials-item"
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <circle cx={18} cy={18} r={18} fill="#004E98"/>
                        </svg>

                        <svg className="footer__socials-item"
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <circle cx={18} cy={18} r={18} fill="#004E98"/>
                        </svg>

                        <svg className="footer__socials-item"
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <circle cx={18} cy={18} r={18} fill="#004E98"/>
                        </svg>
                    </div>
                </div>

                <div className="footer_signature">
                    Designed by Polina&copy; Powered by Dm&copy; {fullYear}
                </div>
            </footer>
        </>
    );
};

export default Footer;
