'use client'
import Link from 'next/link'
import {useEffect} from "react";

const Header = () => {
    // todo useEffect для адаптивности меню навигации
    useEffect(() => {
        if (typeof window !== "undefined") {
            const header = document.querySelector('.header')
            const burger = document.getElementById('burger')

            burger.addEventListener('click', () => {
                if (header.classList !== 'open') {
                    header.classList.add('open')
                } else return
            })

            //  Закрыть по esc
            window.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    header.classList.remove('open')
                }
            })

            //  Закрыть при клике вне его
            document.getElementById('menu').addEventListener('click', e => {
                e._isClickWithInMenu = true
            })
            burger.addEventListener('click', e => {
                e._isClickWithInMenu = true
            })
            //то есть если кликнули по меню или бургеру - ничего не выполняем
            document.body.addEventListener('click', e => {
                if (e._isClickWithInMenu) return
                document.querySelector('.header').classList.remove('open')
            })
        }

    }, [])

    return (<>
            {/*header-block*/}
            {/*<div className="body-wrapper">*/}
            {/* body-wrapper нужен в AboutPage для меню навигации справа в режиме телефона */}
            {/*header нужен именно здесь, здесь для него useEffect*/}
            <div className="header">
                {/*header__container -  nav*/}
                <nav className="nav">

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

                    <button className="header__burger-btn" id="burger">
                        <span/>
                        <span/>
                        <span/>
                    </button>

                    <div className="menu" id="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link className="menu__link" href="/">
                                    О нас
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link" href="/information">
                                    Полезное
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link" href="/posts">
                                    Блог
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link" href="/contacts">
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="menu" id="menu">
                            <ul className="menu__list menu_socials">
                                <li className="menu__item">
                                    <Link className="menu__link menu_socials_first" href="#">
                                        {/*todo заменить на иконки или svg-шки*/}
                                        t
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link className="menu__link" href="#">
                                        w
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            {/*</div>*/}
        </>
    );
};

export default Header;
