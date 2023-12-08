import Link from "next/link";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {BACKEND_URL} from "../../../config";

export const generateMetadata = ({params: {id}}) => {
    return {title: `ProjectName | Post ${id}`}
}

const getPost = async (id) => {
    const res = await fetch(BACKEND_URL + `/posts/${id}`)
    return await res.json()
}

const removePost = async (id) => {
    'use server'
    // console.log('id удаляемого поста', id)
    await fetch(BACKEND_URL + `/posts/${id}`, {method: 'DELETE'})
    revalidatePath('/posts')
    redirect(`/posts`)
}
//todo сделать компоненты Аалерты

const Post = async ({params: {id}}) => {
    const data = await getPost(id)
    const post = data.item

    return (<>
            <h1>{post.title}</h1>
            <h2>Автор № {post.userId}, его пост {id}</h2>
            <p>
                {/*Специальный атрибут dangerouslySetInnerHTML позволяющий встраивать произвольный html c бекенда, для безопастности*/}
                {post.htmlBody ? <div dangerouslySetInnerHTML={{__html: post.htmlBody}}>
                    </div> :
                    <p>{post.text}</p>}</p>

            <button className="btn"><Link href="/posts">Назад</Link></button>

            <form className="form" action={removePost.bind(null, id)}>
                <button className="btn" type="submit" value="Delete post">Удалить пост</button>
            </form>

            <button className="btn"><Link href={`/posts/${id}/edit`}>Редактировать пост</Link></button>
        </>
    );
};
export default Post;
