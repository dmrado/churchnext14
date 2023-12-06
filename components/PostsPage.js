import React from 'react';
import Link from "next/link";

const PostsPage = ({
                       item,
                       link,
                       // updateHandler,
                       // deleteHandler,
                       // postPicture,
                       // setEditedPost,
                       // setOpenModalPicture
                   }) => {
    const {userId, id, title, text, updatedAt} = item
    // console.log('link', link, 'item', item)

    return (<>
            <div className="card">
                <img className="card__img" src="img/banner/clouds.jpeg" alt="Pic"/>
                <div className="card__body">
                    <h5 className="card__title">
                        <Link className="card__link" href={link}>Пост {id}</Link>
                    </h5>
                    <p className="card__post-data">{updatedAt}</p>
                    <h3 className="card__title"><b>{title}</b></h3>
                    <p className="card__description text">{text}</p>

                </div>
            </div>
        </>
    );
};

export default PostsPage;
