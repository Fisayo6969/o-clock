import React from 'react'
import home from '../New Collections/home.png'
function Newcollections() {
    return (
        <>
            {/* MAIN  */}
            <main className="main">
                {/* HOME */}
                <section className="home" id="home">
                    <div className="home__container container grid">
                        <div className="home__img-bg">
                            <img src={home} alt="" className="home__img" />
                        </div>

                        <div className="home__social">
                            <a href="https://github.com/Fisayo6969" target="blank" className="footer__social-link">
                                <i className='bx bxl-github'></i>
                            </a>

                            <a href="https://twitter.com/999tweets_her" target="blank" className="footer__social-link">
                                <i className='bx bxl-twitter' ></i>
                            </a>

                            <a href="https://www.instagram.com/" target="blank" className="footer__social-link">
                                <i className='bx bxl-instagram' ></i>
                            </a>
                        </div>

                        <div className="home__data">
                            <h1 className="home__title">NEW WATCH <br /> COLLECTIONS B720</h1>
                            <p className="home__description">
                                Latest arrival of the new imported watches of the B720 series,
                                with a modern and resistant design.
                            </p>
                            <span className="home__price">$1245</span>

                            <div className="home__btns">
                                <a href="/" className="button button--gray button--small">
                                    Discover
                                </a>
                                <button className="button home__button" ></button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Newcollections