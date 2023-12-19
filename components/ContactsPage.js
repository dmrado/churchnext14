'use client'
import Link from "next/link";
import {useState} from "react";
import {BACKEND_URL} from "../config";

const CONTACTS = {
    headerAddres1: 'headerAddres1',
    headerAddres2: 'headerAddres2',
    refMail: 'refMail',
    phone: 'phone',
    instructionTransport: 'instructionTransport',
    textAddres2: 'textAddres2',
    yandexMaps: 'yandexMaps',
    coordinatesAddres: 'coordinatesAddres',
}

const ContactsPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


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
        <div className="contact__header">
            <h1>Приезжайте к нам</h1>
            <p>У нас вы найдете хороших друзей, мы будем рады общению, окажем всевозможную помощь.</p>
        </div>

        <div className="contact__map">
            {/*<div data-aos="fade-up">*/}
            <iframe style={{border: 0, width: '100%', height: '350px'}}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A57f3094898d6cc00003127bd74e5882f57590da167adb80a07ad0f9c56ac3555&amp;source=constructor"
                    width="763" height="420"
                    frameBorder={0} allowFullScreen/>
            {/*</div>*/}
        </div>

        <div className="container">
            <div className="address__wrapper">

                <div className="address__list">
                    <div className="address">
                        <i className="bi bi-geo-alt"/>
                        <h4>{CONTACTS.headerAddres1}</h4>
                        <p>{CONTACTS.headerAddres2}</p>
                    </div>
                    <div className="email">
                        <i className="bi bi-envelope"/>
                        <h4>Email:</h4>
                        <p>{CONTACTS.refMail}</p>
                    </div>
                    <div className="phone">
                        <i className="bi bi-phone"/>
                        <h4>Позвоните нам:</h4>
                        <p>{CONTACTS.phone}</p>
                        <p>{CONTACTS.phone}</p>
                    </div>
                    <div className="coordinates">
                        <i className="bi bi-geo-alt"/>
                        <h4>Как добраться:</h4>
                        <p>{CONTACTS.instructionTransport}</p>
                        <p className="address">{CONTACTS.textAddres2}
                            <a target="_blank" href={CONTACTS.yandexMaps}>{CONTACTS.yandexMaps}</a>
                        </p>
                        <p>{CONTACTS.coordinatesAddres}</p>
                    </div>
                </div>


                <form onSubmit={submitHandler} method="post" role="form" className="">

                    <div className="contact__form-inputs-wrapper">

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
                                      // rows={12}
                            />

                        {/*<div className="loading">Загрузка...</div>*/}
                        {/*<div className="error-message"/>*/}
                        {/*<div className="sent-message">Ваше сообщение отправлено. Большое спасибо!</div>*/}
                        <div className="text-center">
                            <button className="btn contact__form_btn" type="submit">Отправить</button>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    </div>


}
export default ContactsPage
