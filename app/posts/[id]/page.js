import React from 'react';

const Page = ({params: {id}}) => {
    return (
        <h1>
            Пост с id = {id}
        </h1>
    );
};

export default Page;
