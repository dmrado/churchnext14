"use client"
import {createContext, useContext, useState} from 'react'
import {BACKEND_URL} from "../../config";

const MainContext = createContext()

//для пагинации вынесено наверх
const elementsCount = 6

// const setTokenToLocalstorage = token => {
//     localStorage.setItem("token-churchscala", token)
// }
//
// const getTokenFromLocalstorage = () => {
//     if (typeof window === "undefined") {
//         return ''
//     }
//     const expires = localStorage.getItem("expires-churchscala")
//     if (!expires) {
//         return ''
//     }
//     if (expires * 1000 - Date.now() < 0) {
//         localStorage.removeItem("expires-churchscala")
//         localStorage.removeItem("token-churchscala")
//     }
//     return localStorage.getItem("token-churchscala") || ''
// }
//
// const setTokenExpiresToLocalstorage = expires => {
//     localStorage.setItem("expires-churchscala", expires)
// }

export const MainProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const value = {
        // token,
        // setToken,
        // getTokenFromLocalstorage
    }

    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>
}
export const useMainContext = () => useContext(MainContext)

