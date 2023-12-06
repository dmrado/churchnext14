import Link from "next/link";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {BACKEND_URL} from "../../../../config";


const getPostById = async (id) => {
    const res = await fetch(BACKEND_URL + `/posts/${id}`)
    return res.json()
}

const updatePost = async (formData) => {
    'use server'
    const {title, text, id} = Object.fromEntries(formData)

    console.log('это id поста, который мы отправляем методом PUT', id)

    const response = await fetch(BACKEND_URL + `/posts/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, text})
    })
    // так как метод PUT в случае успеха возвращает единицу cм Postman и не возвращает никакого поста мы используем все тот же id, по которому вернется пост

        revalidatePath(`/posts/${id}`)
        redirect(`/posts/${id}`)

}

const Page = async ({params: {id}}) => {
    const data = await getPostById(id)
    const post = data.item

    return (<>
            <h1>Редактирование поста {post.title}</h1>
            <h2>post id: {post.id}</h2>

            <form className="form" action={updatePost}>
                <input defaultValue={post.title} type="text" placeholder="Заголовок" required name="title"/>
                <textarea defaultValue={post.text} placeholder="Ваш пост" rows="10" cols="80" name="text"/>
                <input type="hidden" name="id" value={post.id}/>
                <div>
                    <input type="submit" value="Отправить"/>
                </div>

            </form>
            <button className="btn"><Link href={`/posts/${id}`}>Назад</Link></button>

        </>
    );
};

export default Page;
