'use client'
import {useState, useEffect} from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'

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
            <form className="form" action={formData => createPost(formData, htmlBody, text)}>

                <input defaultValue={title}
                       onChange={e => setTitle(e.target.value)}
                       type="text" placeholder="Заголовок" required name="title"
                />



                <label htmlFor="exampleFormControlTextarea1" className="form-label">Ваш пост</label>
                <QuillEditor planeValue={text}
                             setPlaneValue={setText}
                             value={htmlBody}
                             setValue={setHtmlBody}
                             onChange={e => setText(e.target.value)}
                />
                {text}
                <br/>
                <button className="btn" type="submit" value="Add post">Сохранить</button>
            </form>
        </>
    );
};

export default EditPost
