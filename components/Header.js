import Link from 'next/link'

const Header = () => {
    return (<>
            {/*header-block*/}
            <div className="body-wrapper">
                {/*    body-wrapper нужен для меню навигации справа в режиме телефона*/}
                <div className="header">
                    <div className="header__container">
                        {/*header__container -  nav*/}
                        <div className="nav">
                            <a href="http://binnopharmgroup.ru " className="logo">
                                <img className="logo__img" src="/img/Binno.jpg" alt="logo"/>
                            </a>
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
