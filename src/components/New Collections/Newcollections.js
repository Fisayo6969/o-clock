import React from 'react'
import home from '../New Collections/home.png'
import './Newcollections.css';
import '../Public.css';
function Newcollections() {
    return (
        <>
            {/* MAIN  */}
            <main class="main">
                {/* HOME */}
                <section class="home" id="home">
                    <div class="home__container container grid">
                        <div class="home__img-bg">
                            <img src={home} alt="" class="home__img" />
                        </div>

                        <div class="home__social">
                            <a href="https://github.com/Fisayo6969" target="blank" class="footer__social-link">
                                <i class='bx bxl-github'></i>
                            </a>

                            <a href="https://twitter.com/999tweets_her" target="blank" class="footer__social-link">
                                <i class='bx bxl-twitter' ></i>
                            </a>

                            <a href="https://www.instagram.com/" target="blank" class="footer__social-link">
                                <i class='bx bxl-instagram' ></i>
                            </a>
                        </div>

                        <div class="home__data">
                            <h1 class="home__title">NEW WATCH <br /> COLLECTIONS B720</h1>
                            <p class="home__description">
                                Latest arrival of the new imported watches of the B720 series,
                                with a modern and resistant design.
                            </p>
                            <span class="home__price">$1245</span>

                            <div class="home__btns">
                                <a href="/" class="button button--gray button--small">
                                    Discover
                                </a>

                                <button class="button home__button">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Newcollections