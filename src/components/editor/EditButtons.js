'use client'

import Link from "next/link";
import {useMainContext} from "../../context/MainProvider";


const EditButtons = ({id, removePost}) => {
    const {token, } = useMainContext()
    return (<>
            {/*todo внимание ниже форма с серверным экшеном*/}
            {!!token && <div style={{display: 'flex'}}>
                <form className="form__add-post" action={removePost.bind(null, id)}>
                    <button className="btn btn-blog" type="submit" value="Delete post">Удалить</button>
                </form>

                <Link href={`/posts/${id}/edit`}>
                    <button className="btn btn-blog">Редактировать</button>
                </Link>
            </div>
            }
    </>
    );
};

export default EditButtons;
