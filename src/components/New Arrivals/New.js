import React from 'react'
// import new1 from '../New Arrivals/new1.png';
// import new2 from '../New Arrivals/new2.png';
// import new3 from '../New Arrivals/new3.png';
import new4 from '../New Arrivals/new4.png';
function New() {
    return (
        <>
            {/* MAIN  */}
            <main className="main">
                {/* <!--======= NEW ======--> */}
                <section className="new section container" id="new">
                    <h2 className="section__title">
                        New Arrivals
                    </h2>

                    <div className="new__container">
                        <div className="swiper new-swiper">
                            <div className="swiper-wrapper">
                                {/* <article className="new__card swiper-slide">
                                    <span className="new__tag">New</span>

                                    <img src={new1} alt="" className="new__img" />

                                    <div className="new__data">
                                        <h3 className="new__title">Longines rose</h3>
                                        <span className="new__price">$980</span>
                                    </div>

                                    <button className="button new__button">ADD TO CART</button>
                                </article>

                                <article className="new__card swiper-slide">
                                    <span className="new__tag">New</span>

                                    <img src={new2} alt="" className="new__img" />

                                    <div className="new__data">
                                        <h3 className="new__title">Jazzmaster</h3>
                                        <span className="new__price">$1150</span>
                                    </div>

                                    <button className="button new__button">ADD TO CART</button>
                                </article>

                                <article className="new__card swiper-slide">
                                    <span className="new__tag">New</span>

                                    <img src={new3} alt="" className="new__img" />

                                    <div className="new__data">
                                        <h3 className="new__title">Dreyfuss gold</h3>
                                        <span className="new__price">$750</span>
                                    </div>

                                    <button className="button new__button">ADD TO CART</button>
                                </article> */}

                                <article className="new__card swiper-slide">
                                    <span className="new__tag">New</span>

                                    <img src={new4} alt="" className="new__img" />

                                    <div className="new__data">
                                        <h3 className="new__title">Portuguese rose</h3>
                                        <span className="new__price">$1590</span>
                                    </div>

                                    <button className="button new__button">ADD TO CART</button>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default New