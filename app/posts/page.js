import Link from "next/link";
import PostsPage from "../../components/PostsPage";
import React from "react";
import {revalidatePath} from "next/cache";
import {BACKEND_URL, SHOW_BANNER} from "../../config";


export const metadata = {
    title: 'Beit-Ieshua | Blog',
}

const getPosts = async () => {
    const res = await fetch(BACKEND_URL + '/posts')
    return res.json()
}

//добавляет новый пост в том месте где находится
// revalidatePath('/posts')

const Posts = async () => {
    const data = await getPosts();
    const posts = data.items;

    console.log('data - объект data.items', data)
    console.log('posts - массив', posts)

    return (
        <>
            <h1>Список постов</h1>
            <button className="btn"><Link href='/posts/new'>Новый пост</Link></button>

            {/*    <ul>*/}
            {/*        {posts.map(post => (*/}
            {/*            <li key={post.id}>*/}
            {/*                <Link href={`/posts/${post.id}`}>{post.title}</Link>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</>*/}
            {/*todo не забыть пагинацию на странице реализовать, из контроллера нормально работает*/}
            {!!posts && posts.map(post => {
                return <div key={post.id}>
                    <PostsPage
                        item={post}
                        link={`/posts/${post.id}`}
                        // postPicture={postPicture}
                        // setOpenModalPicture={setOpenModalPicture}
                        // setEditedPost={setEditedPost}
                        // updateHandler={token ? () => {
                        //     setEditedPost(post)
                        //     setOpenModal(true)
                        // } : null}
                        // deleteHandler={token ? () => deletePost(post) : null}
                    />
                </div>
            }).sort()}
        </>
    )
}


export default Posts;
