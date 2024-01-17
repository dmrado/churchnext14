'use client'
import {useEffect, useState} from "react";
import Link from "next/link";

const BooksModal = ({book, setOpenBookModal}) => {

    useEffect(() => {

    }, [])

    const handleClick = () => {
        setOpenBookModal(false)
    }

    return (
        <>
            <div className="container">
                <div className="modal open" id="my-modal">
                    <div className="modal__box">
                        <img src={book.href} alt="Picture"/>
                        <h2 style={{color: '#FF6700', textTransform: 'uppercase'}}>{book.name}</h2>
                        <p style={{color: 'gray'}}>{book.annot}</p>
                        {/*<div style={{color: '#004E98'}} className="books__price_modal">Цена: {book.price} p.</div>*/}
                        <button style={{color: '#FF6700', backgroundColor: '#fff', border: '1px solid'}} className="btn btn-blog" onClick={handleClick}>
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BooksModal;