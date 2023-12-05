import {redirect} from "next/navigation";

const createPost = async (data) => {
    'use server'
    const {title, body} = Object.fromEntries(data)
    console.log('title, body >>>>>>>>>>>>>', title, body)

    const response = await fetch(``, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, body, userId: 1})
    })
    const newPost = await response.json()

    if (newPost) {
        alert('Пост успешно сохранен.')
    } else alert('Не удалось сохранить, попробуйте еще раз!')

    //post.id мы получим в результате выполнения запроса
    redirect(`/posts/${newPost.id}`)
    console.log('post.id <<<<<<<<<<<<<<<<<<<', newPost.id)
}


const Page = () => {
    return (<>
            <form className="form" action={createPost}>
                <input type="text" placeholder="Заголовок" required name="title"/>
                <textarea placeholder="Ваш пост" required name="body"/>
                <button className="btn" type="submit" value="Add post">Сохранить</button>
            </form>
        </>
    );
};

export default Page;
