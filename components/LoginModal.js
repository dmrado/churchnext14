'use client'
import {useEffect, useState} from "react";
import {BACKEND_URL} from "../config";
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import Link from "next/link";


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
    //для логина
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //для id админа
    const [token, setToken] = useState('')
    //для модального окна логина
    const [openLogin, setOpenLogin] = useState(true)
    const [message, setMessage] = useState(true)

    //для записи количества постов для задания коичества страниц
    // const [postsCount, setPostsCount] = useState(1)

    // const close = () => setOpenModal(false)

    // const closePic = () => setOpenModalPicture(false)

    //получение токена из localStorage когда admin пришел на сайт
    useEffect(() => {
        setToken(getTokenFromLocalstorage())
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
                    setOpenLogin(true)
                    setMessage(data.message)
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

    //редирект в клиентском компоненте, уводим при выходе
    const router = useRouter()
    const searchParams = useSearchParams()
    searchParams.get('/posts')

    const logoutHandler = (e) => {
        e.preventDefault()
        setToken(null)
        localStorage.removeItem("token-churchscala")
        setOpenLogin(false)
        router.push('/posts')
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
            {!!openLogin && <div className="container">
                <div className="modal open" id="my-modal">
                    <div className="modal__box">

                        <div>{message}</div>

                        {!!token ?
                            <form action="">
                                <div className="col-auto">
                                    <h3>Хотите выйти?</h3>
                                    {/*<Link href='/posts'>*/}
                                    <button type="submit" className="btn btn-outline-danger mb-3"
                                            onClick={e => logoutHandler(e)}
                                            style={{marginRight: "30px"}}>Выйти
                                    </button>
                                    {/*</Link>*/}


                                    <button type="submit" className="btn btn-outline-success mb-3"
                                            onClick={() => setOpenLogin(false)}>Остаться
                                    </button>
                                </div>
                            </form>

                            :
                            <form>


                                <div>
                                    <h3>Здравствуйте, пастор, пожалуйста авторизуйтесь</h3>
                                    <div className="modal__text-field-wrapper">
                                        <div className="modal__input-wrapper">
                                            <input type="text"
                                                   className="modal__input-text"
                                                   value={email}
                                                   onChange={e => setEmail(e.target.value)}
                                            />
                                            <label htmlFor="staticEmail"
                                                   className="modal__input-label">Email</label>
                                        </div>
                                    </div>
                                    <div className="modal__text-field-wrapper">
                                        <div className="modal__input-wrapper">
                                            <input type="password"
                                                   className="modal__input-text"
                                                   id="inputPassword"
                                                   value={password}
                                                   onChange={e => setPassword(e.target.value)}
                                            />
                                            <label htmlFor="inputPassword"
                                                   className="modal__input-label">Пароль</label>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-blog"
                                            onClick={submitLoginHandler}>Войти
                                    </button>

                                    <Link href={'/posts'}>
                                        <button className="btn btn-blog">
                                            Вернутся
                                        </button>
                                    </Link>

                                </div>
                            </form>
                        }

                    </div>
                </div>
            </div>
            }
        </>
    )
}
export default LoginModal
