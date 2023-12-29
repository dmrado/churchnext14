'use client'
import {useState, useEffect} from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'
import LoginModal from "../LoginModal";
import {BACKEND_URL} from "../../../config";
import {useMainContext} from "../../context/MainProvider";

const QuillEditor = dynamic(
    () => import('./Quill'),
    {ssr: false}
)

const AddPost = ({createPost}) => {
    const {token, logoutHandler} = useMainContext()

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [htmlBody, setHtmlBody] = useState('')

    // для картинки поста
    const [postPicturesList, setPostPicturesList] = useState([])
    const [postPicturesCount, setPostPicturesCount] = useState(null)
    // const [openModalPicture, setOpenModalPicture] = useState(false)
    //для imgLink при сравнении с path активного file в storage - для выбора картинки пользователем
    const [activeImgLink, setActiveImgLink] = useState(null)

    // const [previewId, setPreviewId] = useState(null)

    const loadPostPicturesList = () => {
        //получаем картинки со всеми атрибутами из storage
        fetch(BACKEND_URL + `/files`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                // Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.items) {
                    return
                }
                //получаем картинки со свеми атрибутами из storage, далее в PostPicturesListModal сохраним картинку в модель Post
                setPostPicturesList(data.items)
                //postPicturesCount - припасен для пагинации картинок если их будет через чур
                setPostPicturesCount(data.count)
                console.log("data.items in loadPostPicturesList", data.items)
            })
            .catch(err => console.log(err))
    }


    return (<>
            <div className="container">

                <div className="one-post-banner" style={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                }}>
                    {/*{postPicturesList.map(item => {*/}
                    {/*    return <div className={`col-md-4 ${activeImgLink === item.path ? "activeImage" : ''}`} key={item.id}>*/}
                    {/*        <img src={BACKEND_URL + item.path} onClick={() => {*/}
                    {/*            setNewPostPicture(item.path)*/}
                    {/*            setActiveImgLink(item.path)*/}
                    {/*        }}*/}
                    {/*             className="w-100" alt="Картинка"/>*/}

                    {/*    </div>*/}
                    {/*})}*/}
                    <img
                        // src={!!imgLink ? BACKEND_URL + imgLink : postPicture}
                        alt="Нажмите для добавления изображения"
                        onClick={() => {
                            // if(!token){
                            //     return
                            // }
                            loadPostPicturesList()
                            // setEditedPost(item)
                            // setOpenModalPicture(true)
                            setActiveImgLink(imgLink)
                        }}
                    />
                </div>

                <LoginModal/>

                <form className="form__add-post" action={formData => createPost(formData, htmlBody, text, token)}>

                    <h1>Давайте создадим новый пост, дорогой пастор...</h1>

                    <div className="modal__text-field-wrapper">
                        <div className="modal__input-wrapper">
                            <input defaultValue={title}
                                   onChange={e => setTitle(e.target.value)}
                                   type="text" required name="title" className="modal__input-text"
                            />
                            <label htmlFor="staticEmail"
                                   className="modal__input-label">Заголовок</label>
                        </div>
                    </div>


                    <div className="modal__text-field-wrapper">
                        <QuillEditor classmName="modal__input-text"
                                     planeValue={text}
                                     setPlaneValue={setText}
                                     value={htmlBody}
                                     setValue={setHtmlBody}
                                     onChange={e => setText(e.target.value)}
                        />
                    </div>

                    <div className="btn-blog-wrapper">
                        <button className="btn btn-blog" type="submit" value="Add post">
                            Сохранить
                        </button>
                        <Link href={'/posts'}>
                            <button className="btn btn-blog">
                                Вернуться
                            </button>
                        </Link>
                        <button className="btn btn-blog" onClick={logoutHandler}>
                            Выйти
                        </button>

                    </div>
                </form>

                <div className="btn-blog-wrapper">
                    <button className="btn"
                            style={{
                                textAlign: 'center',
                                backgroundColor: 'white',
                                color: '#FF6700',
                                border: '2px solid #FF6700'
                            }}
                        // onClick={}
                    >Объявление
                    </button>
                </div>


            </div>


        </>
    );
};

export default AddPost
