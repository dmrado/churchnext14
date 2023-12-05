import {redirect} from "next/navigation";
import {BACKEND_URL} from "../../../config";

const createPost = async (data) => {
    'use server'
    const {title, text} = Object.fromEntries(data)
    console.log('title, text >>>>>>>>>>>>>', title, text)
    const response = await fetch(BACKEND_URL + '/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, text, userId: 1})
    })
    const newPost = await response.json()
    console.log('newPost', newPost)

    //post.id мы получим в результате выполнения запроса
    redirect(`/posts`)
    console.log('post.id <<<<<<<<<<<<<<<<<<<', newPost.id)
}


const Page = () => {
    return (<>
            <form className="form" action={createPost}>
                <input type="text" placeholder="Заголовок" required name="title"/>
                <textarea placeholder="Ваш пост" required name="text"/>
                <button className="btn" type="submit" value="Add post">Сохранить</button>
            </form>
        </>
    );
};

export default Page;
