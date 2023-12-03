'use client'
import Link from 'next/link'
import {useEffect} from "react";

const Header = () => {

    useEffect(() => {
        // defer
        // for nav_scrolled
        if (typeof window === "undefined") {
            return
        }
        let elementNav = document.querySelector(".nav")
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                elementNav.classList.add("nav_scrolled")
            } else {
                elementNav.classList.remove("nav_scrolled")
            }
        })
    }, [])

    return (<>
            {/*header-block*/}
            <div className="body-wrapper">
                {/*    body-wrapper нужен для меню навигации справа в режиме телефона*/}
                <div className="header">
                    <div className="header__container">
                        {/*header__container -  nav*/}
                        <div className="nav">
                            <Link href="/" className="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="69" height="71" viewBox="0 0 69 71"
                                     fill="none">
                                    <path d="M34.9408 5L63.5709 50.6217H6.31069L34.9408 5Z" stroke="#004E98"
                                          stroke-width="5"/>
                                    <path d="M34.0592 65.829L5.42908 20.2073L62.6893 20.2073L34.0592 65.829Z"
                                          stroke="#004E98" stroke-width="5"/>
                                </svg>
                            </Link>
                            <button className="header__burger-btn" id="burger">
                                <span/>
                                <span/>
                                <span/>
                            </button>
                            {/*            nav можно поменять на div */}
                            <nav className="menu" id="menu">
                                <ul className="menu__list">
                                    <li className="menu__item">
                                        <Link className="menu__link" href="/">
                                            Церковь
                                        </Link>
                                    </li>
                                    <li className="menu__item">
                                        <Link className="menu__link" href="/about">
                                            О нас
                                        </Link>
                                    </li>
                                    <li className="menu__item">
                                        <Link className="menu__link" href="/posts">
                                            Блог
                                        </Link>
                                    </li>
                                    {/*<li className="menu__item">*/}
                                    {/*    <Link className="menu__link" href="mod.html">*/}
                                    {/*        Модификаторы*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                    {/*<li className="menu__item">*/}
                                    {/*    <Link className="menu__link" href="slider.html">*/}
                                    {/*        Слайдер*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                </ul>
                            </nav>
                        </div>
                        <div className="header__banner">
                            <img className="header__img" src="" alt=""/>
                            <h1 className="header__greeting">Hi bro !</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
