const MediaPage = () => {


    return (<>
            <div className="container">
                <div className="photo__list-wrapper">

                    <div className="photo__list-header">
                        <h2>Наш фотоальбом</h2>
                    </div>
                    <p>Чтобы посмотреть все фотографии с мероприятия, наведите на фото и нажмите для перехода на диск
                    </p>


                    <div className="photo__list">

                        <div className="photo__list-item1">
                            <img className="about__img" src="/img/aboutpage/1.webp" alt="Pic"/>
                        </div>

                        <div className="photo__list-item2">
                            <img className="about__img" src="/img/aboutpage/2.webp" alt="Pic"/>
                        </div>

                        <div className="photo__list-item3">
                            <img className="about__img" src="/img/aboutpage/3.webp" alt="Pic"/>
                        </div>

                        <div className="photo__list-item4">
                            <img className="about__img" src="/img/aboutpage/4.webp" alt="Pic"/>
                        </div>
                        <div className="photo__list-item5">
                            <img className="about__img" src="/img/aboutpage/1.webp" alt="Pic"/>
                        </div>

                        <div className="photo__list-item6">
                            <img className="about__img" src="/img/aboutpage/2.webp" alt="Pic"/>
                        </div>

                        <div className="photo__list-item7">
                            <img className="about__img" src="/img/aboutpage/3.webp" alt="Pic"/>
                        </div>

                        <div className="photo__list-item8">
                            <img className="about__img" src="/img/aboutpage/4.webp" alt="Pic"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MediaPage;
