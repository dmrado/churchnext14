import {useEffect} from "react";

const ChurchPage = () => {

    useEffect(() => {
        if(typeof window === "undefined"){
            return
        }
          <!--    for nav_scrolled    -->
        let elementNav = document.querySelector(".nav")
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                elementNav.classList.add("nav_scrolled")
            } else {
                elementNav.classList.remove("nav_scrolled")
            }
        })    }, [])

    return (
            <>
                <div className="container">
                    <div className="about__list">
                        <h3>Важность покупки компьютера в современном мире</h3>
                        <p className="text">
                            Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                            ipsum vel iste Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Impedit ipsum vel iste quibusdam mollitia nihil laborum labore,
                            nesciuntquibusdam mollitia nihil laborum labore, nesciunt
                        </p>
                        <h4>Важность покупки компьютера в современном мире</h4>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                            numquam quis reprehenderit! Accusantium amet blanditiis cumque esse
                            harum illum iusto, molestias perferendis quam quas sit soluta sunt unde
                            vel voluptates.
                        </p>
                        <h4>Важность покупки компьютера в современном мире</h4>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                            numquam quis reprehenderit! Accusantium amet blanditiis cumque esse
                            harum illum iusto, molestias perferendis quam quas sit soluta sunt unde
                            vel voluptates.
                        </p>
                        <h4>Важность покупки компьютера в современном мире</h4>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                            numquam quis reprehenderit! Accusantium amet blanditiis cumque esse
                            harum illum iusto, molestias perferendis quam quas sit soluta sunt unde
                            vel voluptates.
                        </p>
                        <h2>И Вообще!</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                            cupiditate doloribus et excepturi illum magnam non numquam odio quod?
                            Atque commodi consequuntur deleniti ducimus, ea exercitationem fuga
                            inventore nihil non optio pariatur repellendus, voluptatibus! A alias
                            cum facere ipsum mollitia quasi quos? Aliquam atque beatae corporis
                            cupiditate dolorum eos est illum, ipsa necessitatibus non qui quidem
                            similique sunt, tempora tenetur ullam voluptatem. Aliquid atque autem
                            commodi earum eius expedita hic id ipsa ipsum laborum laudantium magni
                            modi, natus neque nostrum numquam quae quasi qui quia quidem reiciendis
                            repellendus sequi sit ullam vero voluptas voluptates! Amet eaque iste
                            modi odio quibusdam.
                        </p>
                    </div>
                    <div className="about_parallax">
                        <div className="about__call">
                            <h1>Дывысь Мыкола! Во как можно было работать!</h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="desc">
                        <div className="desc__block">
                            <img className="desc__img" src="img/Alex.jpg" alt="Pic" />
                            <div className="desc__text">
                                <h2>Lorem.</h2>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa.
                                </p>
                                <h3>Lorem, ipsum dolor.</h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa. Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Nisi blanditiis cumque incidunt totam
                                    magni error aut perferendis! Dolorum placeat recusandae ab explicabo
                                    libero officia reiciendis doloribus quia culpa tempora tempore odit
                                    harum molestias perferendis delectus nihil quam, vitae nobis illo iure
                                    earum dolorem sequi minus necessitatibus. Totam dolor corporis ipsam?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                                    consequatur aspernatur laudantium officia autem quis. Accusamus
                                    exercitationem ad, debitis iusto suscipit qui libero voluptas
                                    cupiditate itaque ea fuga odio quisquam. Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Eum impedit consequuntur, repellat
                                    voluptate possimus similique, esse exercitationem minus voluptatum
                                    soluta sint assumenda ut, odio dicta iusto enim voluptas atque culpa.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa. FINISH
                                </p>
                            </div>
                        </div>
                        <div className="desc__block desc__block_reverse">
                            <img
                                className="desc__img desc__img_reverse"
                                src="img/Kloch.jpg"
                                alt="Pic"
                            />
                            <div className="desc__text desc__text_reverse">
                                <h2>Lorem.</h2>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque
                                </p>
                                <h3>Lorem, ipsum dolor.</h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa. Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Nisi blanditiis cumque incidunt totam
                                    magni error aut perferendis! Dolorum placeat recusandae ab explicabo
                                    libero officia reiciendis doloribus quia culpa tempora tempore odit
                                    harum molestias perferendis delectus nihil quam, vitae nobis illo iure
                                    earum dolorem sequi minus necessitatibus. Totam dolor corporis ipsam?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                                    consequatur aspernatur laudantium officia autem quis. Accusamus
                                    exercitationem ad, debitis iusto suscipit qui libero voluptas
                                    cupiditate itaque ea fuga odio quisquam. Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Eum impedit consequuntur, repellat
                                    voluptate possimus similique, esse exercitationem minus voluptatum
                                    soluta sint assumenda ut, odio dicta iusto enim voluptas atque culpa.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa. FINISH FINISH
                                </p>
                            </div>
                        </div>
                        <div className="desc__block">
                            <img
                                className="desc__img desc__img_reverse"
                                src="img/Nifantova.jpg"
                                alt="Pic"
                            />
                            <div className="desc__text">
                                <h2>Lorem.</h2>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa.
                                </p>
                                <h3>Lorem, ipsum dolor.</h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa. Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Nisi blanditiis cumque incidunt totam
                                    magni error aut perferendis! Dolorum placeat recusandae ab explicabo
                                    libero officia reiciendis doloribus quia culpa tempora tempore odit
                                    harum molestias perferendis delectus nihil quam, vitae nobis illo iure
                                    earum dolorem sequi minus necessitatibus. Totam dolor corporis ipsam?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                                    consequatur aspernatur laudantium officia autem quis. Accusamus
                                    exercitationem ad, debitis iusto suscipit qui libero voluptas
                                    cupiditate itaque ea fuga odio quisquam. Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Eum impedit consequuntur, repellat
                                    voluptate possimus similique, esse exercitationem minus voluptatum
                                    soluta sint assumenda ut, odio dicta iusto enim voluptas atque culpa.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa. FINISH
                                </p>
                            </div>
                        </div>
                        <div className="desc__block desc__block_reverse">
                            <img
                                className="desc__img desc__img_reverse"
                                src="img/Valeria.jpg"
                                alt="Pic"
                            />
                            <div className="desc__text desc__text_reverse">
                                <h2>Lorem.</h2>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa.
                                </p>
                                <h3>Lorem, ipsum dolor.</h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa. Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Nisi blanditiis cumque incidunt totam
                                    magni error aut perferendis! Dolorum placeat recusandae ab explicabo
                                    libero officia reiciendis doloribus quia culpa tempora tempore odit
                                    harum molestias perferendis delectus nihil quam, vitae nobis illo iure
                                    earum dolorem sequi minus necessitatibus. Totam dolor corporis ipsam?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                                    consequatur aspernatur laudantium officia autem quis. Accusamus
                                    exercitationem ad, debitis iusto suscipit qui libero voluptas
                                    cupiditate itaque ea fuga odio quisquam. Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Eum impedit consequuntur, repellat
                                    voluptate possimus similique, esse exercitationem minus voluptatum
                                    soluta sint assumenda ut, odio dicta iusto enim voluptas atque culpa.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                                    blanditiis cumque incidunt totam magni error aut perferendis! Dolorum
                                    placeat recusandae ab explicabo libero officia reiciendis doloribus
                                    quia culpa tempora tempore odit harum molestias perferendis delectus
                                    nihil quam, vitae nobis illo iure earum dolorem sequi minus
                                    necessitatibus. Totam dolor corporis ipsam? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Mollitia, consequatur aspernatur
                                    laudantium officia autem quis. Accusamus exercitationem ad, debitis
                                    iusto suscipit qui libero voluptas cupiditate itaque ea fuga odio
                                    quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum impedit consequuntur, repellat voluptate possimus similique, esse
                                    exercitationem minus voluptatum soluta sint assumenda ut, odio dicta
                                    iusto enim voluptas atque culpa. FINISH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
    );
};

export default ChurchPage;
