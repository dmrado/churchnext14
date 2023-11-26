import {Metadata} from 'next'

export const generateMetadata = ({params: {id}}) => {
    return {title: `ProjectName | Post ${id}`}
}

const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
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
        </>
    );
};
export default Post;
