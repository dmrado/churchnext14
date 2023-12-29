"use client"
import {createContext, useContext, useState} from 'react'

const FileContext = createContext()

export const FileProvider = ({children}) => {
const [text1, setText1] = useState('variable text1 from FileContext')


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
