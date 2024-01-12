import {redirect} from "next/navigation";
import {BACKEND_URL} from "../../../../config";
import {revalidatePath} from "next/cache";
import AddPost from "../../../components/editor/AddPost";



const createPost = async (formData, htmlBody, text, token, imgLink) => {
    'use server'
    const {title} = Object.fromEntries(formData)
    console.log('title', title)
    console.log('imgLink', imgLink)

    const response = await fetch(BACKEND_URL + '/posts', {
        method: 'POST',
        headers:
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        body: JSON.stringify({title, text, htmlBody, userId: 1, imgLink})
    })
    const data = await response.json()
    const newPost = await data.item

    //мы получим в результате выполнения запроса весь пост и редиректнем на страницу всех постов, но там закешировано поэтому ревалидейтим
    revalidatePath('/posts')
    redirect(`/posts`)
}


const Page = () => {
    return (<>
            <AddPost createPost={createPost}/>
        </>
    );
};

export default Page;
