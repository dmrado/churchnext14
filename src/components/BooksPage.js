const books = [
    {
        id: 1,
        name: 'History of the church',
        price: 900,
        color: '#087005'
    },
    {
        id: 2,
        name: 'History about us',
        price: 142,
        color: '#FF6700'
    },
    {
        id: 3,
        name: 'Prince of Peace',
        price: 1300,
        color: '#1951c9'
    },
    {
        id: 4,
        name: 'Holy bible',
        price: 1450,
        color: '#0e776e'
    },
    {
        id: 5,
        name: 'History of the church',
        price: 1009,
        color: '#564b03'
    },
    {
        id: 6,
        name: 'History of the church',
        price: 1880,
        color: '#ff006a'
    },
    {
        id: 7,
        name: 'History about us',
        price: 130,
        color: '#08bbac'
    },
    {
        id: 8,
        name: 'Prince of Peace',
        price: 1050,
        color: '#030142'
    },
    {
        id: 9,
        name: 'Holy bible',
        price: 350,
        color: '#91674a'
    },
    {
        id: 10,
        name: 'History of the church',
        price: 560,
        color: '#002aff'
    },
    {
        id: 11,
        name: 'History of the church',
        price: 900,
        color: '#087005'
    },
    {
        id: 12,
        name: 'History about us',
        price: 142,
        color: '#FF6700'
    },
    {
        id: 13,
        name: 'Prince of Peace',
        price: 1300,
        color: '#1951c9'
    },
    {
        id: 14,
        name: 'Holy bible',
        price: 1450,
        color: '#0e776e'
    },
    {
        id: 15,
        name: 'History of the church',
        price: 1009,
        color: '#564b03'
    },
    {
        id: 16,
        name: 'History of the church',
        price: 1880,
        color: '#ff006a'
    },
    {
        id: 17,
        name: 'History about us',
        price: 130,
        color: '#08bbac'
    },
    {
        id: 18,
        name: 'Prince of Peace',
        price: 1050,
        color: '#030142'
    },
    {
        id: 19,
        name: 'Holy bible',
        price: 350,
        color: '#91674a'
    },
    {
        id: 20,
        name: 'History of the church',
        price: 560,
        color: '#002aff'
    },
    {
        id: 21,
        name: 'History of the church',
        price: 900,
        color: '#087005'
    },
    {
        id: 22,
        name: 'History about us',
        price: 142,
        color: '#FF6700'
    },
    {
        id: 23,
        name: 'Prince of Peace',
        price: 1300,
        color: '#7205e7'
    },
    {
        id: 24,
        name: 'Holy bible',
        price: 1450,
        color: '#0e776e'
    },
    {
        id: 25,
        name: 'History of the church',
        price: 1009,
        color: '#564b03'
    },
    {
        id: 26,
        name: 'History of the church',
        price: 1880,
        color: '#ff006a'
    },
    {
        id: 27,
        name: 'History about us',
        price: 130,
        color: '#08bbac'
    },
    {
        id: 28,
        name: 'Prince of Peace',
        price: 1050,
        color: '#030142'
    },
    {
        id: 29,
        name: 'Holy bible',
        price: 350,
        color: '#7f4a91'
    },
    {
        id: 30,
        name: 'History of the church',
        price: 560,
        color: '#625d28'
    },
    {
        id: 31,
        name: 'History of the church',
        price: 900,
        color: '#087005'
    },
    {
        id: 32,
        name: 'History about us',
        price: 142,
        color: '#FF6700'
    },
    {
        id: 33,
        name: 'Prince of Peace',
        price: 1300,
        color: '#1951c9'
    },
    {
        id: 34,
        name: 'Holy bible',
        price: 1450,
        color: '#0e776e'
    },
    {
        id: 35,
        name: 'History of the church',
        price: 1009,
        color: '#564b03'
    },
    {
        id: 36,
        name: 'History of the church',
        price: 1880,
        color: '#ff006a'
    },
    {
        id: 37,
        name: 'History about us',
        price: 130,
        color: '#59a8a1'
    },
    {
        id: 38,
        name: 'Prince of Peace',
        price: 1050,
        color: '#5c59d3'
    },
    {
        id: 39,
        name: 'Holy bible',
        price: 350,
        color: '#91674a'
    },
    {
        id: 40,
        name: 'History of the church',
        price: 560,
        color: '#020b38'
    },
]

const BooksPage = () => {
    return (
        <div className="container">

            <div className="books__wrapper">
                <h2>Наши книги</h2>
            </div>

            <div className="books__list">
                <ul>
                    {books.map(book => <li key={book.id}>

                        <div className="books__item" style={{backgroundColor: book.color}}>
                            {book.name}

                            <div className="books__price">Цена:  {book.price}</div>
                        </div>

                    </li>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default BooksPage;