'use client'
import {useEffect, useState} from "react";
import Link from "next/link";

import dynamic from 'next/dynamic'
import LoginModal from "../LoginModal";
import {useMainContext} from "../../context/MainProvider";

const QuillEditor = dynamic(
    () => import('./Quill'),
    {ssr: false}
)

const EditPost = ({post, updatePost}) => {
    const {token, logoutHandler} = useMainContext()

    const [title, setTitle] = useState(post ? post.title : '')
    const [text, setText] = useState(post?.text || '')
    const [htmlBody, setHtmlBody] = useState(post?.htmlBody || '')
    const [previewId, setPreviewId] = useState(post?.previewId || null)

    //для Alert
    const [openAlert, setOpenAlert] = useState(false)


    return (<>
            <div className="container">

                <LoginModal/>

                <div className="one-post-banner">

                    <div className="one-post-banner">
                        <img
                            // src={!!imgLink ? BACKEND_URL + imgLink : postPicture} alt="Pic"
                            onClick={() => {
                                // if(!token){
                                //     return
                                // }
                                // setOpenModalPicture(true)
                                // setEditedPost(item)
                                // setActiveImgLink(imgLink)
                            }}
                        />
                    </div>
                </div>

                <form className="form__add-post" action={formData => updatePost(formData, htmlBody, text, token)}>

                    <h1>Приступим к редактированию...</h1>

                    <div className="modal__text-field-wrapper">
                        <div className="modal__input-wrapper">
                            <input defaultValue={title}
                                   onChange={e => setTitle(e.target.value)}
                                   type="text" required name="title"
                                   className="modal__input-text"
                            />
                            <label htmlFor="staticEmail"
                                   className="modal__input-label">Заголовок</label>
                        </div>
                    </div>

                    <input type="hidden" name="id" value={post.id}/>
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
                        <button className="btn btn-blog" type="submit" value="Add post">Сохранить</button>
                        <Link href={`/posts/${post.id}`}>
                            <button className="btn btn-blog">Вернутся</button>
                        </Link>
                    </div>
                    <button className="btn btn-blog" onClick={logoutHandler}>Выйти</button>

                </form>
            </div>
        </>
    );
};

export default EditPost
