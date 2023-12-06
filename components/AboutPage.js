'use client'

import {useEffect} from "react";
import Link from "next/link";

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
            {/*    body-wrapper нужен для меню навигации справа в режиме телефона именно здесь тогад корректно работает и нет горизонтального скролла*/}
            <div className="body-wrapper">

                {/*<div className="header">*/}
                    <div className="header__banner">

                        <div className="header__info">
                            <h3>Шалом и добро пожаловать</h3>
                            <h1>в Еврейскую общину города Артем</h1>
                            {/*<a href="mission">*/}
                                <button className="btn header__btn">Наша миссия</button>
                        {/*</a>*/}
                            {/*это затемнение которое наезжает на облака*/}
                            {/*<img className="header__img" src="/img/banner/Film Grain Texture.png" alt=""/>*/}
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
                                Шалом вам дорогие друзья братья и сëстры!
                                Рад приветствовать вас на сайте нашей мессианской общины "Бейт Йешуа". Меня зовут Николай Феоктистов и я пастор этой общины со дня её основания. Я женат имею жену помощницу она играет и поёт в нашей общине. У нас трое взрослых детей, шесть внуков, две внучки, и один правнук.
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
                                Община была образована в 2011 году Приморский край г. Артём, мы входим в международную конгрегацию "Чозен пипл министриз" или "Служение избранному народу".
                                В нашей общине много прихожан. Мы регулярно собираемся там-то и во столько-то. Отмечаем праздники и проводи время вместе, изучая Слово Божье в простоте сердца.
                            </p>
                        </div>

                        <div className="about__list-item_last">
                            <img className="about__img" src="/img/about/about.jpg" alt="Pic"/>
                        </div>
                    </div>
                </div>
                {/*____________________________________________________________________*/}


                <div className="mission__wrapper">
                    <div className="mission__list-header"><h2>Наша миссия</h2></div>

                    <div className="mission__list" id="mission">
                        <div className="mission__list-item_1">
                            <p className="text">
                                Мы евреи, уверовавшие в Иисуса Христа исповедуем мессианский иудаизм, соблюдаем день Шаббата, а также все праздники которые определил Творец в Торе (Левит 23 глава).
                                В нашей общине есть разные национальности, которые разделяют с нами наше учение основанное на Слове Божьем.
                                <br/>
                                Одна из основных целей нашего учения: Рим 1:16 донести Благую весть до еврейского народа, а также и другим людям. которая заключается в том, что "Иисус Христос пришел в этот мир, что бы спасти грешников!... " "Праведный верою жив будет..."
                                Это касается каждого человека, рожденного на земле, сотворенному Всевышним.
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
                                Смысл жизни каждого человека познать Его искупительную жертву - оправдательный приговор для каждого человека, из-за того что Иисус - человек безгрешный, не подвластный даже первородному греху - умер вместо каждого из нас на кресте! И искупил нас от смерти духовной. И Сила, которая воскресила Его, воскресит и каждого, кто уверовал в то, что Иисус умер за него! И предстать перед Ним беспорочными в великий День его пришествия!
                                <br/>
                                Согласно Божьему Слову, каждому человеку положено умереть, а потом предстать перед Божьим судом. Однако "Верующий в Него не судится и на суд не приходит, но перешел от смерти в жизнь".
                                <br/>
                                Эту Благую весть мы исповедуем и проповедуем, для спасения каждого верующего, как иудея, так и каждого человека, ибо все находятся под властью одного и того же греха и нет различия. И нет иного имени под небесами, кроме имени Иисуса Христа, которым суждено человеку спастись.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage
