"use client"
import {createContext, useContext, useState} from 'react'
import {BACKEND_URL} from "../../config";
import {revalidatePath} from "next/cache";
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

const MainContext = createContext()

//для пагинации вынесено наверх
const elementsCount = 6

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

export const MainProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //для модального окна логина
    const [openLogin, setOpenLogin] = useState(true)
    const [message, setMessage] = useState(true)

    //для записи количества постов для задания количества страниц
    // const [postsCount, setPostsCount] = useState(1)


    const submitLoginHandler = (event) => {
        //login админа идет без базы данных, юзеров - через БД
        event.preventDefault()
        fetch(BACKEND_URL + '/login', {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`,
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

    const value = {
        token, setToken,
        email, setEmail,
        password, setPassword,
        openLogin, setOpenLogin,
        getTokenFromLocalstorage,
        submitLoginHandler, logoutHandler,
        message,
    }

    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>
}
export const useMainContext = () => useContext(MainContext)

