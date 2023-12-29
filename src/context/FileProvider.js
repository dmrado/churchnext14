"use client"
import {createContext, useContext, useState} from 'react'

const FileContext = createContext()

export const FileProvider = ({children}) => {
const [text1, setText1] = useState('variable text1 from FileContext')

    const value = {
        text1
        // postPicturesList,
        // loadPostPicturesList,
        // activeImgLink,
        // setActiveImgLink,
    }

    return <FileContext.Provider value={value}>
        {children}
    </FileContext.Provider>
}
export const useFileContext = () => useContext(FileContext)
