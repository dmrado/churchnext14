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

//добавляет новый пост в том месте где неходится
revalidatePath('/posts')

const Posts = async () => {
    const posts = await getPosts()
    // console.log(posts)
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
            })}
        </>
    )
}


export default Posts;
