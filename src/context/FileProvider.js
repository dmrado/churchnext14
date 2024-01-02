"use client"
import {createContext, useContext, useState} from 'react'
import {useMainContext} from "./MainProvider";
import {BACKEND_URL} from "../../config";

const FileContext = createContext()

export const FileProvider = ({children}) => {
    const {token} = useMainContext()
// const [text1, setText1] = useState('variable text1 from FileContext')
    // для редактирования поста
    const [editedPost, setEditedPost] = useState(null)
    // для картинки поста
    const [postPicturesList, setPostPicturesList] = useState([])
    const [postPicturesCount, setPostPicturesCount] = useState(null)
    //для imgLink при сравнении с path активного file в storage - для выбора картинки пользователем
    const [imgLink, setImgLink] = useState(null)
    //устанавливаем новую картинку
    const [newPostPicture, setNewPostPicture] = useState('')



    const loadPostPicturesList = () => {
        //получаем картинки со всеми атрибутами из storage
        fetch(BACKEND_URL + `/files`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.items){
                    return
                }
                //получаем картинки со всеми атрибутами из storage, далее в PostPicturesListModal сохраним картинку в модель Post
                setPostPicturesList(data.items)
                //postPicturesCount - припасен для пагинации картинок если их будет через чур
                setPostPicturesCount(data.count)
                console.log("data.count in loadPostPicturesList", data.count)
                console.log("data.items in loadPostPicturesList", data.items)
            })
            .catch(err => console.log(err))
    }

    //Files path записывает в Posts imgLink для поста с конкретным id
    //todo весь пост сюда в FileProvider setEditedPost как editedPost передается из AddPost
    const updatePostPicture = async () => {
        await fetch(BACKEND_URL + `/posts/${editedPost.id}`, {
            method: 'PUT',
            body: JSON.stringify({...editedPost, imgLink: newPostPicture}),
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                //на фронтенде не можем использовать revalidatepath сделать функцию перехода на страницу постовs
                // loadPosts()
            })
            .catch(err => console.log(err))
    }

    //записывает путь к файлу картинки внутри сайта т.е. в storage
    // const loadPostPictureToStorage = async (file) => {
    //     const formdata = new FormData();
    //     formdata.append("file", file);
    //
    //     await fetch(BACKEND_URL + '/files/upload', {
    //         headers: {
    //             // 'Content-type': 'multipart/form-data',
    //             Authorization: `Bearer ${token}`,
    //         },
    //         method: 'POST',
    //         body: formdata
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             loadPostPicturesList()
    //             // setOpenModalPicture(false)
    //         })
    //         .catch(err => console.log(err))
    // }




    const value = {
        // text1
        postPicturesList,
        loadPostPicturesList,
        imgLink, setImgLink,
        updatePostPicture,
        setNewPostPicture,
        editedPost, setEditedPost
    }

    return <FileContext.Provider value={value}>
        {children}
    </FileContext.Provider>
}
export const useFileContext = () => useContext(FileContext)
