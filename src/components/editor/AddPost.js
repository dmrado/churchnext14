'use client'
import {useState, useEffect, useRouter} from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'
import LoginModal from "../LoginModal";
import {BACKEND_URL} from "../../../config";
import {useMainContext} from "../../context/MainProvider";
import {useFileContext} from "../../context/FileProvider";
// import {useRouter} from "next/dist/client/compat/router";

const QuillEditor = dynamic(
    () => import('./Quill'),
    {ssr: false}
)


const AddPost = ({createPost}) => {
    const {token, logoutHandler} = useMainContext()
    const {
        postPicturesList,
        loadPostPicturesList,
        activeImgLink,
        setActiveImgLink,
        updatePostPicture,
        setNewPostPicture,
        editedPost, setEditedPost
    } = useFileContext()


    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [htmlBody, setHtmlBody] = useState('')

    const [previewId, setPreviewId] = useState(null)


    useEffect(() => {
        loadPostPicturesList()
    }, [])


    return (<>
            <div className="container">

                <div
                    // className="one-post-banner"
                    style={{
                        position: 'relative',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        border: '1px solid blue',
                        borderRadius: '5px',
                        minHeight: '50px',
                        maxHeight: '400px',
                    }}>

                    {/*item - это картинка - объект модели файл*/}
                    {postPicturesList.map(item => {
                        return <div className={`${activeImgLink === item.path ? "activeImage" : ''}`} key={item.id}>
                            <img
                                src={BACKEND_URL + item.path} onClick={() => {
                                //файл path идет в updatePostPicture
                                setNewPostPicture(item.path)
                                //для выделения выбранной картинки className activeImage
                                setActiveImgLink(item.path)
                            }}
                                alt="Картинка"/>

                        </div>
                    })}
                </div>

                <div className="btn-blog-wrapper">
                    <button className="btn btn-service" onClick={loadPostPicturesList}>Выбрать картинку</button>

                    {/*todo пробросить сюда пост иначе при такой логике можно только назначить картинку по умолчанию, а затем отредактировать, потому что поста еще нет а id может назначить только БД, видимо надо использовать функцию loadPostPictureToStorage*/}

                </div>

                {!token && <LoginModal/>}

                <form className="form__add-post"
                      action={formData => {
                    createPost(formData, htmlBody, text, token)
                    // куда то надо пристроить функцию ниже или создать другую так как поста собственно еще нету editedPost не передать
                    updatePostPicture()
                }}>

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
                            <button className="btn">
                                Вернуться
                            </button>
                        </Link>
                        <button className="btn btn-service btn-service-danger" onClick={logoutHandler}>
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
