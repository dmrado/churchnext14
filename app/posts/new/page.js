import {redirect} from "next/navigation";
import {BACKEND_URL} from "../../../config";
import {revalidatePath} from "next/cache";

const createPost = async (formData) => {
    'use server'
    const {title, text} = Object.fromEntries(formData)
    const response = await fetch(BACKEND_URL + '/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
//todo userId: 1 не приходит в БД и соотв не рендерится при чтении поста дальше
        body: JSON.stringify({title, text, userId: 1})
    })
    const data = await response.json()
    const newPost = await data.item
//todo newPost куда? и где return
    //мы получим в результате выполнения запроса весь пост и редиректнем на страницу всех постов, но там закешировано поэтому ревалидейтим
    revalidatePath('/posts')
    redirect(`/posts`)
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
