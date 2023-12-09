'use client'


import {useEffect, useState} from "react";
import {BACKEND_URL} from "../config";


const setTokenToLocalstorage = token => {
    localStorage.setItem("token-churchscala", token)
}

const getTokenFromLocalstorage = () => {
    if (typeof window === "undefined") {
        return ''
    }
    const expires = localStorage.getItem("expires-churchscala")
    if (!expires) {
        return ''
    }
    if (expires * 1000 - Date.now() < 0) {
        localStorage.removeItem("expires-churchscala")
        localStorage.removeItem("token-churchscala")
    }
    return localStorage.getItem("token-churchscala") || ''
}

const setTokenExpiresToLocalstorage = expires => {
    localStorage.setItem("expires-churchscala", expires)
}


const LoginModal = () => {

    //для показа модального окна логина
    const [openLogin, setOpenLogin] = useState(false)
    //для логина
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //для id админа
    const [token, setToken] = useState('')


    //для записи количества постов для задания коичества страниц
    // const [postsCount, setPostsCount] = useState(1)

    // const close = () => setOpenModal(false)

    // const closePic = () => setOpenModalPicture(false)

    //получение токена из localStorage когда admin пришел на сайт
    useEffect(() => {
        setToken(getTokenFromLocalstorage())
    }, [])

    // работа модального окна
    useEffect(() => {
        // Modal
        let modal = document.getElementById('my-modal')
        let openModalBtn = document.getElementById("open-modal-btn")
        openModalBtn.addEventListener('click', () => {
            modal.classList.add('open')
        })
        let closeModalBtn = document.getElementById("close-my-modal-btn")
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('open')
        })
//    закрыть по esc
        window.addEventListener('keydown', (e) => {
            console.log(e)
            if (e.key === "Escape") {
                modal.classList.remove('open')
            }
        })
//    закрыть при клике вне его
        document.querySelector('#my-modal .modal__box').addEventListener('click', event => {
            event._isClickWithInModal = true
        })
        document.getElementById('my-modal').addEventListener('click', event => {
            if (event._isClickWithInModal) return
            event.currentTarget.classList.remove('open')

        })
    }, [])

    const submitLoginHandler = (event) => {
        //login админа идет без базы данных, юзеров - через БД
        event.preventDefault()
        fetch(BACKEND_URL + '/login', {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `telegramId_${chatId}`,
            },
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
        })
            .then(res => res.json())
            .then(data => {
                if (!data || data.message === "Invalid email/password!!!") {
                    //чистим и закрываем модальное окно логина
                    setEmail('')
                    setPassword('')
                    setOpenLogin(false)
                    return
                } else {
                    setToken(data.token)
                    setTokenToLocalstorage(data.token)
                    setTokenExpiresToLocalstorage(data.expires)
                    setEmail('')
                    setPassword('')
                    setOpenLogin(false)
                }
            }).catch(err => console.log(err))
    }


    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem("token-churchscala")
        setOpenLogin(false)
    }


    // const loadPostPicturesList = () => {
    //     //получаем картинки со всеми атрибутами из storage
    //     fetch(BACKEND_URL + `/files`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //             Authorization: `Bearer ${token}`,
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if(!data.items){
    //                 return
    //             }
    //             //получаем картинки со свеми атрибутами из storage, далее в PostPicturesListModal сохраним картинку в модель Post
    //             setPostPicturesList(data.items)
    //             //postPicturesCount - припасен для пагинации картинок если их будет через чур
    //             setPostPicturesCount(data.count)
    //             console.log("data.items in loadPostPicturesList", data.items)
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <>
            {/*      Modal*/}
                <div className="container">
                    <h1>Modal</h1>
                    <button className="modal__close-btn" id="open-modal-btn">
                        Open modal
                    </button>
                    <div className="modal" id="my-modal">
                        <div className="modal__box">
                            <svg onClick={() => setOpenLogin(false)}
                                 id="close-my-modal-btn"
                                 className="close-my-modal-btn"
                                 width={50}
                                 height={50}
                                 viewBox="0 0 50 50"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                            >
                                <ellipse cx={25} cy={25} rx={25} ry={25} fill="#CACACA"/>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z"
                                    fill="black"
                                />
                            </svg>

                            <h2>Здравствуйте, пастор, пожалуйста авторизуйтесь</h2>

                            <div>
                                <div>
                                    {!token && <div className="mb-3 row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="text"
                                                   className="form-control"
                                                   value={email}
                                                   onChange={e => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>}
                                    {!token && <div className="mb-3 row">
                                        <label htmlFor="inputPassword"
                                               className="col-sm-2 col-form-label">Пароль</label>
                                        <div className="col-sm-10">
                                            <input type="password"
                                                   className="form-control"
                                                   id="inputPassword"
                                                   value={password}
                                                   onChange={e => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>}
                                    <div className="col-auto">
                                        {!!token &&
                                        <button type="submit" className="btn btn-outline-danger mb-3"
                                                onClick={logoutHandler}
                                                style={{marginRight: "30px"}}>Выйти
                                        </button>
                                        }

                                        <button type="submit" className="btn btn-outline-success mb-3"
                                                onClick={submitLoginHandler}>{!!token ? 'Остаться' : 'Войти'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default LoginModal
