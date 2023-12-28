import {createContext, useContext, useEffect, useState} from 'react'
import {BACKEND_URL} from "../config";

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

export const MainProvider = () => {
    //здесь описывается весь функционал, который после передается в контексте любому компоненту. Обернуть <Component {...pageProps} /> в _app в MainProvider

    //::::::::::::::::::::::::states for index.js start::::::::::::::::::::::::
    //для показа модального окна логина
    const [openLogin, setOpenLogin] = useState(false)
    //для логина
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //для получения постов в useEffect
    const [posts, setPosts] = useState([])
    //для записи количества постов для задания коичества страниц
    const [postsCount, setPostsCount] = useState(1)
    //для id админа
    const [token, setToken] = useState('')
    //для просмотра полного поста
    const [activePost, setActivePost] = useState(null)
    // для редактирования поста
    const [editedPost, setEditedPost] = useState(null)
    // для картинки поста
    const [postPicturesList, setPostPicturesList] = useState([])
    const [postPicturesCount, setPostPicturesCount] = useState(null)
    const [openModalPicture, setOpenModalPicture] = useState(false)
    //для imgLink при сравнении с path активного file в storage - для выбора картинки пользователем
    const [activeImgLink, setActiveImgLink] = useState(null)
    //::::::::::::::::::::::::states for index.js finish::::::::::::::::::::::::


    //::::::::::::::::::::::::functions for index.js start::::::::::::::::::::::::
    const openAddPost = () => {
        setOpenLogin(!openLogin)
        // if (openLogin === true) {
        //     setOpenLogin(false)
        // }
    }

    // const close = () => setOpenModal(false)

    const closePic = () => setOpenModalPicture(false)

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


    const deletePost = post => {
        // console.log('post.id', post.id)
        fetch(BACKEND_URL + `/posts/${post.id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    loadPosts()
                }
            }).catch(err => console.log(err))
    }

    //а что тут у нас функция скучает?
    const loadPost = (id) => {
        console.log('id поста из router.query в функции loadPost', id)
        fetch(BACKEND_URL + `/posts/${id}`)
            .then(res => res.json())
            .then(data => setActivePost(data.item))
            .catch(err => console.log(err))
    }

    //для получения постов в useEffect и загрузки submitCreatePost
    const loadPosts = (activePage = 0) => {
        const skip = (activePage) * elementsCount
        fetch(BACKEND_URL + `/posts?skip=${skip}&limit=${elementsCount}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data.items)
                setPostsCount(data.count)
            })
            .catch(err => console.log(err))
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
    //::::::::::::::::::::::::functions for index.js finish::::::::::::::::::::::::


    //::::::::::::::::::::::::functions for Modal.js start::::::::::::::::::::::::
    const submitCreatePost = ({data}) => {
        //так как fetch - это промис, мы дожидаемся пока он выполнится и после этого срабатывает функция close() в then в handleSunmit по окончании работы fetch
        return fetch(BACKEND_URL + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({data}),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.item)
                //запуск рендерa списка постов, включающего новый и todo он наверху списка функция filter это в пагинации минус надо будет поставить
                loadPosts()
            }).catch(err => console.log(err))
    }


    //Для отправки отредактированного поста
    const updatePost = (postId, data) => {
        //так как fetch - это промис, мы дожидаемся пока он выполнится и после этого срабатывает функция close() в then в handleSunmit по окончании работы fetch
        return fetch(BACKEND_URL + `/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            //responseData - содержит _id, created_at и  updated_at, в ответ на созданный пост. s
            .then(responseData => {
                if (responseData.item) {
                    console.table('responseData', responseData)
                    //здесь в loadPosts data та, что мы отправаляли на backend, а не та что получили. Загружаем все посты
                    loadPosts()
                } else {
                    throw new Error(responseData.message || 'во время записи поста произошла ошибка')
                }
            }).catch((e) => {
                console.log(e.message)
            })
    }


    //::::::::::::::::::::::::functions for Modal.js finish::::::::::::::::::::::::

    //получение токена из localStorage когда admin пришел на сайт
    useEffect(() => {
        setToken(getTokenFromLocalstorage())
    }, [])

    const value = {
        //::::::::::::::::::::::::exports for index.js::::::::::::::::::::::::
        openLogin,
        setOpenLogin,
        openAddPost,
        //::::::::::::::::::::::::exports for LoginModal.js::::::::::::::::::::::::
        submitLoginHandler,
        logoutHandler,
        //::::::::::::::::::end of the exports for LoginModal.js:::::::::::::::::::
        email,
        setEmail,
        password,
        setPassword,
        posts,
        setPosts,
        token,
        setToken,
        activePost,
        setActivePost,
        setEditedPost,
        loadPost,
        loadPosts,
        deletePost,
        postPicturesList,
        loadPostPicturesList,
        openModalPicture,
        setOpenModalPicture,
        postPages: Math.ceil(postsCount / elementsCount),
        activeImgLink,
        setActiveImgLink,
        //::::::::::::::::::::::::exports for Modal.js::::::::::::::::::::::::
        submitCreatePost,
        updatePost,
        editedPost,
        getTokenFromLocalstorage
    }

    // return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}
// export const useMainContext = () => useContext(MainContext)
//далее в любом компоненте вынимаем из useMainContext любые функции (из value) деструктурирующим присваиванием
