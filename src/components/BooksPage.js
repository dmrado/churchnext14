'use client'
import BooksModal from "./BooksModal";
import {useEffect, useState} from "react";

const books = [
    {
        id: 1,
        name: 'Еврейский новый завет',
        price: 900,
        color: '#087005',
        href: 'img/books/bookNewTestament.webp',
        annot: 'О ПЕРЕВОДЧИКЕ \n' +
            'Давид Стерн родился в Лос-Анджелесе в 1935 г. Правнук двух из двадца-ти первых евреев города. Получил докторскую степень по экономике в Лрин стонском университете и был профессором университета Лос-Анджелеса. Увлекался альпинизмом, соавтор книги о серфинге, бывший владелец сети магазинов здоровой пищи. В 1972 поверил в Йешуа, получил степень магистра богословия в Фул-лерской Теологической Семинарии н написал дипломную работу в Универ-ситете Иудаизма. В 1976 женился на Марте Франкель, мессианской еврейке. Вдвоем они один год проработали в организации «Евреи за Иисуса+. Др. Стерн препода-вал в Фуллерской семинарии курс «Иудаизм и христианство+. принимал участие в организации мессианских еврейских конференций и лидерских встреч, работал в Мессианском Еврейском Союзе Америки. В 1979 семья Стерн совершила алию (иммигрировала в Израиль). Сейчас они живут в Иерусалиме со своими двумя детьми. Являются активными членами общины «Нетивья« и израильского мессианского еврейского сооб-щества. Др. Стерн является автором «Мессианского еврейского манифеста+, об-рисовывающего предназначение, самоопределение, историю, теологию и программу сегодняшнего мессианского еврейского движения, а также со-кращенного варианта этой книги под названием «Восстановление еврейс-кой сути Евангелиял, состоящего из отрывков, т редоазоаченньо дам хрис-тиан, не знакомых с еврейскими корнями Евангелия. Кроме того, др. Стерн - автор «Комментария к Еврейскому Новому Заве-ту., который содержит примечания к стихам Нового Завета н рассматрива-ет вопросы, волнующие евреев и христиан. Им подготовлена также Полная Еврейская Библия, включающая адаптацию существующего перевода Та-наха (Ветхого Завета) и Еврейский Новый Завет. \n' +
            '472 \n' +
            '\n',
    },
    {
        id: 2,
        name: 'Еврейский новый завет',
        price: 142,
        color: '#FF6700',
        href: 'img/books/bookNewTestament.webp',
        annot: 'О ПЕРЕВОДЧИКЕ \n' +
            'Давид Стерн родился в Лос-Анджелесе в 1935 г. Правнук двух из двадца-ти первых евреев города. Получил докторскую степень по экономике в Лрин стонском университете и был профессором университета Лос-Анджелеса. Увлекался альпинизмом, соавтор книги о серфинге, бывший владелец сети магазинов здоровой пищи. В 1972 поверил в Йешуа, получил степень магистра богословия в Фул-лерской Теологической Семинарии н написал дипломную работу в Универ-ситете Иудаизма. В 1976 женился на Марте Франкель, мессианской еврейке. Вдвоем они один год проработали в организации «Евреи за Иисуса+. Др. Стерн препода-вал в Фуллерской семинарии курс «Иудаизм и христианство+. принимал участие в организации мессианских еврейских конференций и лидерских встреч, работал в Мессианском Еврейском Союзе Америки. В 1979 семья Стерн совершила алию (иммигрировала в Израиль). Сейчас они живут в Иерусалиме со своими двумя детьми. Являются активными членами общины «Нетивья« и израильского мессианского еврейского сооб-щества. Др. Стерн является автором «Мессианского еврейского манифеста+, об-рисовывающего предназначение, самоопределение, историю, теологию и программу сегодняшнего мессианского еврейского движения, а также со-кращенного варианта этой книги под названием «Восстановление еврейс-кой сути Евангелиял, состоящего из отрывков, т редоазоаченньо дам хрис-тиан, не знакомых с еврейскими корнями Евангелия. Кроме того, др. Стерн - автор «Комментария к Еврейскому Новому Заве-ту., который содержит примечания к стихам Нового Завета н рассматрива-ет вопросы, волнующие евреев и христиан. Им подготовлена также Полная Еврейская Библия, включающая адаптацию существующего перевода Та-наха (Ветхого Завета) и Еврейский Новый Завет. \n' +
            '472 \n' +
            '\n',
    },
    // {
    //     id: 3,
    //     name: 'Prince of Peace',
    //     price: 1300,
    //     color: '#1951c9',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 4,
    //     name: 'Holy bible',
    //     price: 1450,
    //     color: '#0e776e',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 5,
    //     name: 'History of the church',
    //     price: 1009,
    //     color: '#564b03',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 6,
    //     name: 'History of the church',
    //     price: 1880,
    //     color: '#ff006a',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 7,
    //     name: 'History about us',
    //     price: 130,
    //     color: '#08bbac',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 8,
    //     name: 'Prince of Peace',
    //     price: 1050,
    //     color: '#030142',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 9,
    //     name: 'Holy bible',
    //     price: 350,
    //     color: '#91674a',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 10,
    //     name: 'History of the church',
    //     price: 560,
    //     color: '#002aff',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 11,
    //     name: 'History of the church',
    //     price: 900,
    //     color: '#087005',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 12,
    //     name: 'History about us',
    //     price: 142,
    //     color: '#FF6700',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 13,
    //     name: 'Prince of Peace',
    //     price: 1300,
    //     color: '#1951c9',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 14,
    //     name: 'Holy bible',
    //     price: 1450,
    //     color: '#0e776e',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 15,
    //     name: 'History of the church',
    //     price: 1009,
    //     color: '#564b03',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 16,
    //     name: 'History of the church',
    //     price: 1880,
    //     color: '#ff006a',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 17,
    //     name: 'History about us',
    //     price: 130,
    //     color: '#08bbac',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 18,
    //     name: 'Prince of Peace',
    //     price: 1050,
    //     color: '#030142',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 19,
    //     name: 'Holy bible',
    //     price: 350,
    //     color: '#91674a',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 20,
    //     name: 'History of the church',
    //     price: 560,
    //     color: '#002aff',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 21,
    //     name: 'History of the church',
    //     price: 900,
    //     color: '#087005',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 22,
    //     name: 'History about us',
    //     price: 142,
    //     color: '#FF6700',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 23,
    //     name: 'Prince of Peace',
    //     price: 1300,
    //     color: '#7205e7',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 24,
    //     name: 'Holy bible',
    //     price: 1450,
    //     color: '#0e776e',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 25,
    //     name: 'History of the church',
    //     price: 1009,
    //     color: '#564b03',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 26,
    //     name: 'History of the church',
    //     price: 1880,
    //     color: '#ff006a',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 27,
    //     name: 'History about us',
    //     price: 130,
    //     color: '#08bbac',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 28,
    //     name: 'Prince of Peace',
    //     price: 1050,
    //     color: '#030142',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 29,
    //     name: 'Holy bible',
    //     price: 350,
    //     color: '#7f4a91',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 30,
    //     name: 'History of the church',
    //     price: 560,
    //     color: '#625d28',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 31,
    //     name: 'History of the church',
    //     price: 900,
    //     color: '#087005',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 32,
    //     name: 'History about us',
    //     price: 142,
    //     color: '#FF6700',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 33,
    //     name: 'Prince of Peace',
    //     price: 1300,
    //     color: '#1951c9',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 34,
    //     name: 'Holy bible',
    //     price: 1450,
    //     color: '#0e776e',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 35,
    //     name: 'History of the church',
    //     price: 1009,
    //     color: '#564b03',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 36,
    //     name: 'History of the church',
    //     price: 1880,
    //     color: '#ff006a',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 37,
    //     name: 'History about us',
    //     price: 130,
    //     color: '#59a8a1',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 38,
    //     name: 'Prince of Peace',
    //     price: 1050,
    //     color: '#5c59d3',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 39,
    //     name: 'Holy bible',
    //     price: 350,
    //     color: '#91674a',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
    // {
    //     id: 40,
    //     name: 'History of the church',
    //     price: 560,
    //     color: '#020b38',
    //     href: 'img/books/bookNewTestament.webp',
    //     annot: '',
    // },
]


const BooksPage = () => {
const [item, setItem] = useState('')
const [openBookModal, setOpenBookModal] = useState(false)

    const handleClick = (book) =>{
        setOpenBookModal(true)
        setItem(book)
        console.log('book это', book)
    }

    return (
        <div className="container">

            <div className="books__wrapper">
                <h2>Наши книги</h2>
            </div>
            {!! openBookModal && <BooksModal book={item} setOpenBookModal={setOpenBookModal}/>}
            <div className="books__list">
                <ul>
                    {books.map(book => <li key={book.id}>

                        <div className="books__item" onClick={() => handleClick(book)}>
                            <img src={book.href} alt="Picture"/>
                        </div>
                    </li>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default BooksPage;