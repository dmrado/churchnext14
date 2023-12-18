import Link from "next/link";

const MediaPage = () => {


    return (<>
            <div className="container">
                <div className="media__list-wrapper">

                    <div className="media__list-header">
                        <h2>Наш фотоальбом</h2>
                    </div>
                    <p>Чтобы посмотреть все фотографии с мероприятия, наведите на фото и нажмите для перехода на диск
                    </p>

                    <div className="media__list">
                        <div className="media__li media__li_1">
                            <h3>АЛЬБОМ 1</h3>
                            <Link href="http://google.com">
                                <img className="media__img vertical" src="/img/aboutpage/2.webp" alt="Pic"/>
                            </Link>

                        </div>
                        <div className="media__li media__li_2">
                            <h3>АЛЬБОМ 2</h3>
                            <Link href="#">
                                <img className="media__img" src="/img/aboutpage/3.webp" alt="Pic"/>
                            </Link>
                        </div>
                        <div className="media__li media__li_3">
                            <h3>АЛЬБОМ 3</h3>
                            <Link href="#">
                                <img className="media__img" src="/img/aboutpage/3.webp" alt="Pic"/>
                            </Link>
                        </div>
                        <div className="media__li media__li_4">
                            <h3>АЛЬБОМ 4</h3>
                            <Link href="#">
                                <img className="media__img" src="/img/aboutpage/4.webp" alt="Pic"/>
                            </Link>
                        </div>
                        <div className="media__li media__li_5">
                            <h3>АЛЬБОМ 5</h3>
                            <Link href="#">
                                <img className="media__img" src="/img/aboutpage/1.webp" alt="Pic"/>
                            </Link>
                        </div>
                        <div className="media__li media__li_6"><h3>АЛЬБОМ 1</h3>
                            <h3>АЛЬБОМ 6</h3>
                            <Link href="#">
                                <img className="media__img vertical" src="/img/aboutpage/2.webp" alt="Pic"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MediaPage;
