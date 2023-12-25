'use client'

import {useEffect} from "react";
import Link from "next/link";

const AboutPage = () => {

    useEffect(() => {
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
                        <h1>в Еврейскую общину города Артем<span>*</span></h1>


                        <a href="#mission"><button className="btn header__btn">Наша миссия</button></a>
                        {/*это затемнение которое наезжает на облака*/}
                    </div>
                    <img className="header__img" src="/img/banner/Film Grain Texture.png" alt=""/>

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
                                Рад приветствовать вас на сайте нашей мессианской общины "Бейт Йешуа". Меня зовут
                                Николай Феоктистов и я пастор этой общины со дня её основания. Я женат имею жену
                                помощницу она играет и поёт в нашей общине. У нас трое взрослых детей, шесть внуков, две
                                внучки, и один правнук.
                            </p>
                        </div>

                        <div className="about__list-item">
                            <img className="about__img" src="/img/aboutpage/11.webp" alt="Pic"/>
                        </div>

                        <div className="about__list-item">
                            <img className="about__img" src="/img/aboutpage/22.webp" alt="Pic"/>
                        </div>

                        <div className="about__list-item">
                            <img className="about__img" src="/img/aboutpage/33.webp" alt="Pic"/>
                        </div>

                        <div className="about__list-item">
                            <img className="about__img" src="/img/aboutpage/44.webp" alt="Pic"/>
                        </div>

                        <div className="about__list-item">
                            <p className="text">
                                Община была образована в 2011 году Приморский край г. Артём, мы входим в международную
                                конгрегацию "Чозен пипл министриз" или "Служение избранному народу".
                                В нашей общине много прихожан. Мы регулярно собираемся там-то и во столько-то. Отмечаем
                                праздники и проводи время вместе, изучая Слово Божье в простоте сердца.
                            </p>
                        </div>

                        <div className="about__list-item_last">
                            <img className="about__img-5" src="/img/aboutpage/5555.webp" alt="Pic"/>
                        </div>
                    </div>
                </div>
                {/*____________________________________________________________________*/}


                <div className="mission__wrapper">
                    <div className="mission__list-header"><h2>Наша миссия</h2></div>

                    <div className="mission__list" id="mission">
                        <div className="mission__list-item_1">
                            <p className="text">
                                Мы евреи, уверовавшие в Иисуса Христа исповедуем мессианский иудаизм, соблюдаем день
                                Шаббата, а также все праздники которые определил Творец в Торе (Левит 23 глава).
                                В нашей общине есть разные национальности, которые разделяют с нами наше учение
                                основанное на Слове Божьем.
                                <br/>
                                Одна из основных целей нашего учения: Рим 1:16 донести Благую весть до еврейского
                                народа, а также и другим людям, которая заключается в том, что "Иисус Христос пришел в
                                этот мир, что бы спасти грешников!... " "Праведный верою жив будет..." и "Верующий в Него не судится и на суд не приходит, но перешел от
                                смерти в жизнь".
                                Это касается каждого человека, рожденного на земле.
                            </p>
                        </div>

                        <div className="mission__list-item_2">
                            <img className="mission__img" src="/img/aboutpage/66.webp" alt="Pic"/>
                        </div>

                        <div className="mission__list-item_3">
                            <img className="mission__img" src="/img/aboutpage/77.webp" alt="Pic"/>
                        </div>

                        <div className="mission__list-item_4">
                            <p className="text">
                                Согласно Божьему Слову, каждому человеку положено умереть, а потом предстать перед
                                Божьим судом. И евреи и не евреи все под грехом. Человек абсолютно потерян и не может сам спастись,
                                например выполняя свод правил или обрядов. Поэтому, как написано в Рим 3:24-25, "Бог
                                пожелал проявить Свою справедливость, простив грехи...и все получают оправдание
                                даром...", потому что за нас умер Иисус Христос. Так Бог сам разрешил неразрешимый вопрос
                                спасения человека от наказания за грехи, в которые человек просто не может не впасть.
                                <br/>
                                И теперь всем, кто поверит и с благодарностью примет это искупление, подаренное Христом
                                Иисусом, выносится оправдательный приговор в вечности, воскресение в конце времен
                                после физической смерти и вечная жизнь с Богом на небесах!
                                <br/>

                                Эту Благую весть мы исповедуем и проповедуем. Мы всем сердцем хотим, что бы спасся
                                каждый, как еврей, так и не еврей, потому что все находятся под властью одного и того же
                                греха и нет различия. И, как написано в Деяниях Апостолов 4:12, нет другого имени под
                                небом, кроме имени Иисуса Христа, которым надлежало бы человеку спастись.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage
