'use client'

import Link from "next/link";
import {useMainContext} from "../../context/MainProvider";
import {BACKEND_URL} from "../../../config";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {useEffect, useState} from "react";


const EditButtons = ({id,}) => {
    const {token} = useMainContext()
    const [showButtons, setShowButtons] = useState(false)
    //todo token null в любом случае (есть он или нету), а кнопки пропадают при перезагрузке страницы [id]/page
    console.log('token', token)

    //как-то заставить перерендериться компонент что бы дернуть токен при первом рендере
    useEffect(() => {
        if (!token) {
            return
        }
        setShowButtons(true)
    }, [])

    const removePost = async ({id}) => {
        console.log('id удаляемого поста', id)

        await fetch(BACKEND_URL + `/posts/${id}`, {
            method: 'DELETE',
            headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                }
            }).catch(err => console.log(err))
    }

    return (<>
            {!!showButtons && <div style={{display: 'flex'}}>

                <button onClick={() => removePost(id)} className="btn btn-blog" type="submit"
                        value="Delete post">Удалить
                </button>

                <Link href={`/posts/${id}/edit`}>
                    <button className="btn btn-blog">Редактировать</button>
                </Link>
            </div>
            }
        </>
    );
};

export default EditButtons;
