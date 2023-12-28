"use client"
import {createContext, useContext, useState} from 'react'

const FileContext = createContext()

export const FileProvider = ({children}) => {


    const value = {
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
