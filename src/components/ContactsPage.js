'use client'
import Link from "next/link";
import {useEffect, useState} from "react";
import {BACKEND_URL} from "../config";

const CONTACTS = {
    headerAddres1: 'Адрес: ',
    headerAddres2: 'Приморский край г. Артем, ул. Пушкина 16. Остановка автобуса "Дом Культуры Угольщиков"',
    refMail: 'shalom6755@yandex.ru',
    phone1: '+7 924 269 30 05',
    phone2: '+7 914 652 09 55',
    instructionTransport: '',
    textAddres2: '',
    yandexMaps: 'yandexMaps',
    coordinatesAddres: '',
}

const ContactsPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    useEffect(() => {
        if (typeof AOS !== 'undefined') {
            AOS.init()
            console.log('is working')

        } else {
            console.log('check')
        }
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(name, email, title, body)
        await fetch(BACKEND_URL + '/mailContacts', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({name, email, title, body})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(e))
        setName('')
        setEmail('')
        setTitle('')
        setBody('')
    }
    return <div>

        <div className="contact__header aos-init aos-animate" data-aos="fade-in">
            <h1>Приезжайте к нам</h1>
            <p>У нас вы найдете хороших друзей, мы будем рады общению, окажем всевозможную помощь.</p>
        </div>

        <div className="contact__map">

            <div style={{position: "relative"}}>
                <a
                    href="https://yandex.ru/maps/11406/artem/?utm_medium=mapframe&utm_source=maps"
                    style={{color: "#eee", fontSize: 12, position: "absolute", top: 0}}
                >
                    Артём
                </a>
                <a
                    href="https://yandex.ru/maps/11406/artem/house/ulitsa_pushkina_16/ZUoEaAZnQUUBWkJuYGJydXVlZwA=/?from=mapframe&ll=132.179308%2C43.349194&utm_medium=mapframe&utm_source=maps&z=16.39"
                    style={{color: "#eee", fontSize: 12, position: "absolute", top: 14}}
                >
                    Улица Пушкина, 16 Еврейская община города Артем — Яндекс&nbsp;Карты
                </a>
                <div data-aos="fade-up">
                    <iframe style={{border: 0, width: '100%', height: '350px'}}
                            src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=132.179308%2C43.349194&mode=whatshere&whatshere%5Bpoint%5D=132.178066%2C43.349638&whatshere%5Bzoom%5D=17&z=16.39"
                            width="1670" height="400"

                            frameBorder={0}
                            allowFullScreen="true"
                        // style={{ position: "relative" }}
                    />
                </div>
            </div>
        </div>

        <div className="container">
            <div className="address__wrapper">

                <div className="address__list">
                    <div className="address thin">
                        <i className="bi bi-geo-alt"/>
                        <h4>{CONTACTS.headerAddres1}</h4>
                        <p><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;{CONTACTS.headerAddres2}</p>
                    </div>
                    <div className="email thin">
                        <i className="bi bi-envelope"/>
                        <h4>Напишите нам:</h4>
                        <p><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;{CONTACTS.refMail}</p>
                    </div>
                    <div className="phone thin">
                        <i className="bi bi-phone"/>
                        <h4>Позвоните нам:</h4>
                        <p><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;{CONTACTS.phone1}</p>
                        <p><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;{CONTACTS.phone2}</p>
                    </div>
                    <div className="coordinates thin">
                        <i className="bi bi-geo-alt"/>
                        {/*todo remove this style when will put reach the place sheme*/}
                        {/*<h4 style={{color: '#FF6700', fontSize: '22px', textAlign: 'center'}}>Мы рады вам!</h4>*/}
                        {/*<p>{CONTACTS.instructionTransport}</p>*/}
                        {/*<p className="address">{CONTACTS.textAddres2}*/}
                        {/*    <a target="_blank" href={CONTACTS.yandexMaps}>{CONTACTS.yandexMaps}</a>*/}
                        {/*</p>*/}
                        {/*<p>{CONTACTS.coordinatesAddres}</p>*/}
                    </div>
                </div>

                <div className="form__wrapper">
                    <h1>Напишите нам</h1>
                    <form onSubmit={submitHandler} method="post" role="form" className="form">

                        <input type="text" name="name" className="form-control input_name" id="name"
                               placeholder="Ваше имя" required
                               value={name}
                               onChange={e => setName(e.target.value)}
                        />

                        <input type="email" className="form-control input_email" name="email" id="email"
                               placeholder="Ваш Email" required
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                        />

                        <input type="text" className="form-control input_title" name="subject" id="subject"
                               placeholder="Заголовок сообщения" required
                               value={title}
                               onChange={e => setTitle(e.target.value)}
                        />

                        <textarea className="form-control input_message" name="message" placeholder="Сообщение"
                                  required defaultValue={""}
                                  value={body}
                                  onChange={e => setBody(e.target.value)}
                        />

                        {/*<div className="loading">Загрузка...</div>*/}
                        {/*<div className="error-message"/>*/}
                        {/*<div className="sent-message">Ваше сообщение отправлено. Большое спасибо!</div>*/}

                        <button className="btn contact__form_btn" type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


}
export default ContactsPage
