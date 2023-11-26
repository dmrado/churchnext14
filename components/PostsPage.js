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
    const {userId, id, title, body } = item
    // console.log('link', link, 'item', item)

    return (<>
                <div className="cards-list">
                    <div className="card cards-list__item">
                        <img className="card__img" src="img/Binno.jpg" alt="Pic" />
                        <div className="card__body">
                            <div className="card__price-rating">
                                {/*price-block*/}
                                <strong className="card__price">Пользователь № {userId}</strong>
                                {/*rating-block*/}
                                {/*<div className="rating card__rating">*/}
                                {/*    <img className="rating__star" src="#" alt="star" />*/}
                                {/*    <img className="rating__star" src="#" alt="star" />*/}
                                {/*    <img className="rating__star" src="#" alt="star" />*/}
                                {/*    <img className="rating__star" src="#" alt="star" />*/}
                                {/*    <img className="rating__star" src="#" alt="star" />*/}
                                {/*</div>*/}
                            </div>
                            <span className="card__location">Написал пост {id}</span>

                            <h3 className="card__title"><b>Название:</b> {title}</h3>
                            <button className="btn"><Link href={link}>Читать</Link></button>

                            <p className="card__description text">
                              <b>Текст поста: </b> {body}
                            </p>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default PostsPage;
