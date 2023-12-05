import Link from "next/link";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";


const getPostById = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

const updatePost = async (data) => {
    'use server'
    const {title, body, id} = Object.fromEntries(data)
    const response = await fetch(`/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(title, body)
    })
    const updatedPost = response.json()
    revalidatePath(`/posts/${updatedPost.id}`)
    redirect(`/posts/${updatedPost.id}`)
}

const Page = async ({params: {id}}) => {
    const post = await getPostById(id)
    console.log(post)

    return (<>
            <h1>Редактирование поста {post.title}</h1>
            <form className="form" action={updatePost}>
                <input defaultValue={post.title}  type="text" placeholder="Заголовок" required name="title"/>
                <textarea defaultValue={post.body} placeholder="Ваш пост" required name="body"/>
                <input type="hidden" name={id} value={post.id}/>
                <div>
                    <input type="submit" value="Update post">Редактировать пост</input>
                </div>

            </form>
            <button className="btn"><Link href={`/posts/${id}`}>Назад</Link></button>

        </>
    );
};

export default Page;
