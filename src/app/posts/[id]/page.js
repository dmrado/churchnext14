import Link from "next/link";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {BACKEND_URL} from "../../../../config";
import {useMainContext} from "../../../context/MainProvider";
import {useFileContext} from "../../../context/FileProvider";
import EditButtons from "../../../components/editor/EditButtons";

export const generateMetadata = ({params: {id}}) => {
    return {title: `ProjectName | Post ${id}`}
}

const getPost = async (id) => {
    // return null
    const res = await fetch(BACKEND_URL + `/posts/${id}`)
    return await res.json()
}


//надо передать сюда токен, которого здесь на сервере нет  и быть не может. Токен есть на клиентев EditButtons и если его нет,то кнопка удалить и редактировать не появляется
// const removePost = async ({id, }) => {
//     'use server'
//     // console.log('id удаляемого поста', id)
//     await fetch(BACKEND_URL + `/posts/${id}`, {
//         method: 'DELETE',
//         headers:
//             {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             }
//     })
//     revalidatePath('/posts')
//     redirect(`/posts`)
// }

//todo сделать компоненты алерты

const Post = async ({params: {id}}) => {
    const data = await getPost(id)
    const post = data?.item
    if (!post) {
        return ''
    }

    return (<>

            <div className="one-post-banner">
                <img className="one-post-banner__img" src={post.imgLink} alt="Картинка поста"/>
            </div>

            <div className="container">
                <div className="one-post__text-wrapper">
                    <div className="one-post__text">
                        <h1>{post.title}</h1>

                        <p>
                            {/*Специальный атрибут dangerouslySetInnerHTML позволяющий встраивать произвольный html c бекенда, для безопастности*/}
                            {post.htmlBody ? <div dangerouslySetInnerHTML={{__html: post.htmlBody}}>
                                </div> :
                                <p>{post.text}</p>}
                        </p>
                    </div>


                    <div className="btn-blog-wrapper">
                        <Link href="/posts">
                            <button className="btn btn-blog">Назад</button>
                        </Link>

                        {/*компонент добавляет кнопки удалить и отредактировать при наличии token-а*/}
                        <EditButtons id={post.id}/>

                        {/*todo внимание ниже форма с серверным экшеном*/}
                        {/*<form className="form__add-post" action={removePost.bind(null, id)}>*/}
                        {/*    <button className="btn btn-blog" type="submit" value="Delete post">Удалить</button>*/}
                        {/*</form>*/}
                    </div>
                </div>

            </div>

        </>
    );
};
export default Post;
