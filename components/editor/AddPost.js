'use client'
import {useState, useEffect} from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'
import LoginModal from "../LoginModal";

const QuillEditor = dynamic(
    () => import('./Quill'),
    {ssr: false}
)

const EditPost = ({createPost}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [htmlBody, setHtmlBody] = useState('')

    // const [previewId, setPreviewId] = useState(null)

    return (<>
            <div className="container">

                <LoginModal/>

                <form className="form__add-post" action={formData => createPost(formData, htmlBody, text)}>

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
                        <button className="btn btn-blog" type="submit" value="Add post">Сохранить</button>
                        <Link href={'/posts'}>
                            <button className="btn btn-blog">Вернуться</button>
                        </Link>
                    </div>
                </form>

                <div className="btn-blog-wrapper">
                    {/*{!!token && */}
                    <button className="btn"
                            style={{textAlign: 'center', backgroundColor:'white', color: '#FF6700', border: '2px solid #FF6700'}}
                    >Объявление</button>
                    {/*}*/}
                </div>


            </div>


        </>
    );
};

export default EditPost
