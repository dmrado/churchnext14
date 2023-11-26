import Link from "next/link";
import PostsPage from "../../components/PostsPage";
import React from "react";

export const metadata = {
    title: 'ProjectName | Blog',
}

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

const Blog = async () => {
    const posts = await getPosts()
    // console.log(posts)
    return (
        <>
            <h1>Список постов</h1>

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


export default Blog;
