'use client'
import {useState, useEffect} from "react";
import Link from "next/link";

import dynamic from 'next/dynamic'
const QuillEditor = dynamic(
    () => import('./Quill'),
    {ssr: false}
)

const EditPost = ({post, updatePost}) => {
    const [title, setTitle] = useState(post ? post.title : '')
    const [text, setText] = useState(post?.text || '')
    console.log("text", text)
    const [htmlBody, setHtmlBody] = useState(post?.htmlBody || '')
    const [previewId, setPreviewId] = useState(post?.previewId || null)

    //для Alert
    const [openAlert, setOpenAlert] = useState(false)


    return (<>
            <form className="form" action={formData => updatePost(formData, htmlBody, text)}>

                <input defaultValue={title}
                       onChange={e => setTitle(e.target.value)}
                       type="text" placeholder="Заголовок" required name="title"
                />

                <input type="hidden" name="id" value={post.id}/>


                <label htmlFor="exampleFormControlTextarea1" className="form-label">Ваш пост</label>

                {/*<textarea  value={text} onChange = {e => setText(e.target.value)} name="text" id="" cols="30" rows="10"/>*/}

                <QuillEditor planeValue={text}
                             setPlaneValue={setText}
                             value={htmlBody}
                             setValue={setHtmlBody}
                             onChange = {e => setText(e.target.value)}
                    />
                {/*{text}*/}
                {/*<br/>*/}
                <div><input type="submit" value="Отправить"/></div>
                <button className="btn" type="submit" value="Add post">Сохранить</button>
            </form>

            <button className="btn"><Link href={`/posts/${post.id}`}>Вернутся</Link></button>


        </>
    );
};

export default EditPost
