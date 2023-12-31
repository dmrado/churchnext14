// import {revalidatePath} from "next/cache";
// import {redirect} from "next/navigation";
import {BACKEND_URL} from "../../../../../config";
import EditPost from "../../../../components/editor/EditPost";


const getPostById = async (id) => {
    // следующая строка для размещения на хостинге без БД
    return

    const res = await fetch(BACKEND_URL + `/posts/${id}`)
    return res.json()
}

const updatePost = async (formData, htmlBody, text, token) => {
    // следующая строка для размещения на хостинге без БД

    return
    'use server'
    const {title, id} = Object.fromEntries(formData)

    // console.log('это id поста, который мы отправляем методом PUT', id)

    await fetch(BACKEND_URL + `/posts/${id}`, {
        method: 'PUT',
        headers:
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        body: JSON.stringify({title, text, htmlBody})
    })
    // так как метод PUT в случае успеха возвращает единицу cм Postman и не возвращает никакого поста мы используем все тот же id, по которому вернется пост

    // revalidatePath(`/posts/${id}`)
    // revalidatePath(`/posts/${id}/edit`)
    // redirect(`/posts/${id}`)
}

const Page = async ({params: {id}}) => {
    const data = await getPostById(id)
    const post = data.item

    return (<>
            {/*<EditPost post={post} updatePost={updatePost}/>*/}
            {/*<h5>post id: {post.id}</h5>*/}
        </>
    );
};

export default Page;
