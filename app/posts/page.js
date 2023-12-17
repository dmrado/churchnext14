import Link from "next/link";
import PostsPage from "../../components/PostsPage";
import React from "react";
import {revalidatePath} from "next/cache";
import {BACKEND_URL, SHOW_BANNER} from "../../config";
import LoginModal from "../../components/LoginModal";


export const metadata = {
    title: 'Beit-Ieshua | Blog',
}

const getPosts = async () => {
    const res = await fetch(BACKEND_URL + '/posts')
    return res.json()
}

//добавляет новый пост в том месте где находится очищая кеш рендерит именно изменный пост
revalidatePath('/posts')

const Posts = async () => {
    const data = await getPosts();
    const posts = data.items;

    // console.log('data - объект data.items', data)
    // console.log('posts - массив', posts)

    return (
        <>
            <div className="blog-header">
                <img src="img/postspage/blog1.webp" alt="Photo"/>
                <Link href='/posts/new'><h1>Блог пастора</h1></Link>
            </div>

            <div className="container">

                <div className="cards-list">
                    {!!posts && posts.map(post => {
                        return <PostsPage key={post.id}
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
                    }).sort()}

                </div>
            </div>
        </>
    )
}


export default Posts;
