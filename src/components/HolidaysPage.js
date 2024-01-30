'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
import BooksModal from "@/src/components/BooksModal";
// import {holidays} from "@/src/components/holidays";
import {holidays} from "./holidays";

import HolidaysModal from "@/src/components/HolidaysModal";

const HolidaysPage = () => {

    const [item, setItem] = useState('')
    const [openHolidayModal, setOpenHolidayModal] = useState(false)
    const handleClick = (holiday) =>{
        setOpenHolidayModal(true)
        setItem(holiday)
        console.log('holiday это', holiday)
    }
    //
    // useEffect(() => {
    //     // for nav_scrolled
    //     if (typeof window === "undefined") {
    //         return
    //     }
    //     let elementNav = document.querySelector(".nav")
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 1) {
    //             elementNav.classList.add("nav_scrolled")
    //         } else {
    //             elementNav.classList.remove("nav_scrolled")
    //         }
    //     })
    // }, [])

    return (<>
            {/*header-block*/}
            {/*    body-wrapper нужен для меню навигации справа в режиме телефона именно здесь тогад корректно работает и нет горизонтального скролла*/}
            <div className="body-wrapper">
                <div className="header__banner_holidays">

                    <div className="header__info_holidays">
                        <h1></h1>
                    </div>
                    {/*это затемнение которое наезжает на облака*/}
                    {/*<img className="header__img" src="/img/banner/Film Grain Texture.png" alt=""/>*/}
                    <img className="header__img" src="/img/holidays/holidaysBanner.webp" alt=""/>

                </div>
            </div>

            <div className="container">

                    <div className="wrapper_holidays">
                        <h2>ГОСПОДНИ ПРАЗДНИКИ</h2>
                    </div>
                    {!! openHolidayModal && <HolidaysModal holiday={item} setOpenHolidayModal={setOpenHolidayModal}/>}
                    <div className="books__list">
                        <ul>
                            {holidays.map(holiday => <li key={holiday.id}>

                                <div className="holiday__item"
                                     onClick={() => handleClick(holiday)}
                                >
                                    <img src={holiday.href} alt="Picture"/>
                                </div>
                            </li>)
                            }
                        </ul>
                    </div>

                </div>
        </>
    );
};

export default HolidaysPage
