'use client'
import {useEffect, useState, useContext} from "react";
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import Link from "next/link";
import {useMainContext} from "../context/MainProvider";



const LoginModal = () => {
    const {token, setToken, submitLoginHandler, getTokenFromLocalstorage} = useMainContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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

                        {!!token &&
                            <form action="">
                                <div className="col-auto">
                                    <h3>Хотите выйти?</h3>
                                    {/*<Link href='/posts'>*/}
                                    <button type="submit" className="btn"
                                            onClick={e => logoutHandler(e)}
                                            style={{marginRight: "30px"}}>Выйти
                                    </button>
                                    {/*</Link>*/}


                                    <button type="submit" className="btn"
                                            onClick={() => setOpenLogin(false)}>Остаться
                                    </button>
                                </div>
                            </form>

                        }
                        {!!token && <div>{token}</div>}
                        {!token &&
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
                                            Вернуться
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