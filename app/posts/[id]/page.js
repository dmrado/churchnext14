import Link from "next/link";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {BACKEND_URL} from "../../../config";

export const generateMetadata = ({params: {id}}) => {
    return {title: `ProjectName | Post ${id}`}
}

const getPost = async (id) => {
const res = await fetch(BACKEND_URL + `/posts/${id}`)
    return res.json()
}

const removePost = async (id) => {
    'use server'
    await fetch(BACKEND_URL + `/posts/${id}`, {method: 'DELETE'})
    revalidatePath('/posts')
    redirect(`/posts`)
}


const Post = async ({params: {id}}) => {
    const post = await getPost(id)
    console.log(post)
    return (<>
            <h1>{post.title}</h1>
            <h2><b>Автор №
                {post.userId},
            </b>
                <br/>
                его пост №{id}
            </h2>
            <p>Текст поста: {post.body}</p>
            <button className="btn"><Link href="/posts">Назад</Link></button>
            {/*ниже убрать bind если будет ошибка*/}
            <form className="form" action={removePost.bind(null, id)}>
                {/*<input type="submit" value='delete post'/>*/}
                <button className="btn" type="submit" value="Delete post">Удалить пост</button>
            </form>

            <button className="btn"><Link href={`/posts/${id}/edit`}>Редактировать пост</Link></button>
        </>
    );
};
export default Post;
