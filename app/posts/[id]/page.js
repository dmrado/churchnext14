export const generateMetadata = ({params: {id}}) => {
    return {title: `ProjectName | Post ${id}`}
}

const Page = (item, {params: {id}}) => {
    const {userId, title, body} = item
    return (<>
            <h1>{title}</h1>
            <h4><b>Автор</b> {userId}</h4>
            <p>{body}</p>
        </>
    );
};
export default Page;
