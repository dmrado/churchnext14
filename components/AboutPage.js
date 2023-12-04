'use client'

import {useEffect} from "react";

const AboutPage = () => {

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
            {/*    body-wrapper нужен для меню навигации справа в режиме телефона*/}
            <div className="body-wrapper">

                {/*<div className="header">*/}
                    <div className="header__banner">

                        <div className="header_info">
                            <h3>Шалом и добро пожаловать</h3>
                            <h1>в Еврейскую общину города Артем</h1>
                            <button className="btn header__btn">Наша миссия</button>
                            {/*это затемнение которое наезжает на облакаs*/}
                            <img className="header__img" src="/img/banner/Film Grain Texture.png" alt=""/>
                        </div>

                    </div>
                {/*</div>*/}
            </div>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__list">
                        <div className="about__list-item">
                            <h3>О нас</h3>
                            <p className="text">
                                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                                ipsum vel iste Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                                nesciuntquibusdam mollitia nihil laborum labore, nesciunt
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur distinctio
                                enim esse et excepturi facilis nulla pariatur saepe veniam.
                            </p>
                        </div>

                        <div className="about__list-item">
                            <img className="about__img" src="/img/about/about.jpg" alt="Pic"/>
                        </div>

                        <div className="about__list-item">
                            <img className="about__img" src="/img/about/about.jpg" alt="Pic"/>
                        </div>

                        <div className="about__list-item">
                            <img className="about__img" src="/img/about/about.jpg" alt="Pic"/>
                        </div>

                        <div className="about__list-item">
                            <img className="about__img" src="/img/about/about.jpg" alt="Pic"/>
                        </div>

                        <div className="about__list-item">
                            <p className="text">
                                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                                ipsum vel iste Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                                nesciuntquibusdam mollitia nihil laborum labore, nesciunt
                                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                                ipsum vel iste Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                                nesciuntquibusdam mollitia nihil laborum labore, nesciunt
                                Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                                nesciuntquibusdam mollitia nihil laborum labore, nesciunt

                            </p>
                        </div>

                        <div className="about__list-item_final">
                            <img className="about__img" src="/img/about/about.jpg" alt="Pic"/>
                        </div>
                    </div>
                </div>
                {/*____________________________________________________________________*/}


                <div className="mission__wrapper">
                    <div className="mission__list-header"><h2>Наша миссия</h2></div>

                    <div className="mission__list">
                        <div className="mission__list-item_1">
                            <p className="text">
                                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                                ipsum vel iste Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                                nesciuntquibusdam mollitia nihil laborum labore, nesciunt
                                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                                ipsum vel iste Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                                nesciuntquibusdam mollitia nihil laborum labore, nesciunt
                                Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                                nesciuntquibusdam mollitia nihil laborum labore, nesciunt

                            </p>
                        </div>

                        <div className="mission__list-item_2">
                            <img className="mission__img" src="/img/about/about.jpg" alt="Pic"/>
                        </div>

                        <div className="mission__list-item_3">
                            <img className="mission__img" src="/img/about/about.jpg" alt="Pic"/>
                        </div>

                        <div className="mission__list-item_4">
                            <p className="text">
                                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                                ipsum vel iste Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                                nesciuntquibusdam mollitia nihil laborum labore, nesciunt
                                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                                ipsum vel iste Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                                nesciuntquibusdam mollitia nihil laborum labore, nesciunt
                                Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                                nesciuntquibusdam mollitia nihil laborum labore, nesciunt

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage
