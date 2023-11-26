export const generateMetadata = ({params: {id}}) => {
    return {title: `ProjectName | Post ${id}`}
}

const Page = ({params: {id}}) => {
    return (
        <h1>
            Пост с id = {id}
        </h1>
    );
};

export default Page;
