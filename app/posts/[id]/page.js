export const generateMetadata = ({params: {id}}) => {
    return {title: `ProjectName | Post ${id}`}
}

// const getPost = async ({params: {id}}) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`)
//     return res.json()
// }

const Page = ({params: {id}}) => {
    // const post = getPost(id)
    // const {userId, id, title, body} = post
    return (<>
            {/*<h1>{title}</h1>*/}
            <h2><b>Автор №
                {/*{userId},*/}
            </b>
                <br/>
                его пост №{id}
            </h2>
            {/*<p>{body}</p>*/}
        </>
    );
};
export default Page;
