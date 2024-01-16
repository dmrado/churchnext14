const books = [
    {
        id: 1,
        name: 'History of the church',
        price: 900,
    },
    {
        id: 2,
        name: 'History about us',
        price: 142,
    },
    {
        id: 3,
        name: 'Prince of Peace',
        price: 1300,
    },
    {
        id: 4,
        name: 'Holy bible',
        price: 1450,
    },
    {
        id: 5,
        name: 'History of the church',
        price: 1009,
    },
    {
        id: 6,
        name: 'History of the church',
        price: 1880,
    },
    {
        id: 7,
        name: 'History about us',
        price: 130,
    },
    {
        id: 8,
        name: 'Prince of Peace',
        price: 1050,
    },
    {
        id: 9,
        name: 'Holy bible',
        price: 350,
    },
    {
        id: 10,
        name: 'History of the church',
        price: 560,
    },
]

const BooksPage = () => {
    return (
        <div className="container">

            <div className="flex flex-col justify-center items-center">
                <h2 className="relative uppercase color-main-orange ">
                    Наш книжный магазин
                </h2>
            </div>

            <div className="grid grid-cols-5 auto-rows-auto	gap-2 m-0 p-0 box-border">
                <ul>
                    {books.map(book => <li key={book.id}>
                        <div className="min-h-24 h-48 w-full border-solid border-sky-500 rounded">{book.name}</div>
                        <div className="">{book.price}</div>
                    </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default BooksPage;