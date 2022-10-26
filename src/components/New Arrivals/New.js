import React from 'react'
import './New.css';
// import new1 from '../New Arrivals/new1.png';
// import new2 from '../New Arrivals/new2.png';
// import new3 from '../New Arrivals/new3.png';
import new4 from '../New Arrivals/new4.png';
function New() {
    return (
        <>
            {/* MAIN  */}
            <main class="main">
                {/* <!--======= NEW ======--> */}
                <section class="new section container" id="new">
                    <h2 class="section__title">
                        New Arrivals
                    </h2>

                    <div class="new__container">
                        <div class="swiper new-swiper">
                            <div class="swiper-wrapper">
                                {/* <article class="new__card swiper-slide">
                                    <span class="new__tag">New</span>

                                    <img src={new1} alt="" class="new__img" />

                                    <div class="new__data">
                                        <h3 class="new__title">Longines rose</h3>
                                        <span class="new__price">$980</span>
                                    </div>

                                    <button class="button new__button">ADD TO CART</button>
                                </article>

                                <article class="new__card swiper-slide">
                                    <span class="new__tag">New</span>

                                    <img src={new2} alt="" class="new__img" />

                                    <div class="new__data">
                                        <h3 class="new__title">Jazzmaster</h3>
                                        <span class="new__price">$1150</span>
                                    </div>

                                    <button class="button new__button">ADD TO CART</button>
                                </article>

                                <article class="new__card swiper-slide">
                                    <span class="new__tag">New</span>

                                    <img src={new3} alt="" class="new__img" />

                                    <div class="new__data">
                                        <h3 class="new__title">Dreyfuss gold</h3>
                                        <span class="new__price">$750</span>
                                    </div>

                                    <button class="button new__button">ADD TO CART</button>
                                </article> */}

                                <article class="new__card swiper-slide">
                                    <span class="new__tag">New</span>

                                    <img src={new4} alt="" class="new__img" />

                                    <div class="new__data">
                                        <h3 class="new__title">Portuguese rose</h3>
                                        <span class="new__price">$1590</span>
                                    </div>

                                    <button class="button new__button">ADD TO CART</button>
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