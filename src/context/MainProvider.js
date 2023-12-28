"use client"
import {createContext, useContext, useState} from 'react'
import {BACKEND_URL} from "../../config";

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


    const submitLoginHandler = (event) => {
        //login админа идет без базы данных
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
                    return
                } else {
                    setToken(data.token)
                    setTokenToLocalstorage(data.token)
                    setTokenExpiresToLocalstorage(data.expires)
                    setEmail('')
                    setPassword('')
                }
            }).catch(err => console.log(err))
    }


    const value = {
        token,
        setToken,
        submitLoginHandler,
        getTokenFromLocalstorage
    }

    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>
}
export const useMainContext = () => useContext(MainContext)

