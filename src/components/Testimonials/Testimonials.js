import React from 'react';
import testimonial2 from '../Testimonials/testimonial2.jpg';
import testimonial3 from '../Testimonials/testimonial3.jpg';
import testimonial from '../Testimonials/testimonial.png';
function Testimonials() {
    return (
        <>
            {/* MAIN  */}
            <main className="main">
            {/* <!--======= TESTIMONIAL =========--> */}
            <section className="testimonial section container">
                <div className="testimonial__container grid">
                    <div className="swiper testimonial-swiper">
                        <div className="swiper-wrapper">
                            <div className="testimonial__card swiper-slide">
                                <div className="testimonial__quote">
                                    <i className='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p className="testimonial__description">
                                    They are the best watches that one acquires, also they are always with the latest 
                                    news and trends, with a very comfortable price and especially with the attention 
                                    you receive, they are always attentive to your questions.
                                </p>
                                <h3 className="testimonial__date">March 27. 2021</h3>
        
                                <div className="testimonial__perfil">
                                    <img src={testimonial2} alt="" className="testimonial__perfil-img"/>
        
                                    <div className="testimonial__perfil-data">
                                        <span className="testimonial__perfil-name">Samantha Mey</span>
                                        <span className="testimonial__perfil-detail">Director of a company</span>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial__card swiper-slide">
                                <div className="testimonial__quote">
                                    <i className='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p className="testimonial__description">
                                    They are the best watches that one acquires, also they are always with the latest 
                                    news and trends, with a very comfortable price and especially with the attention 
                                    you receive, they are always attentive to your questions.
                                </p>
                                <h3 className="testimonial__date">March 27. 2021</h3>
        
                                <div className="testimonial__perfil">
                                    <img src={testimonial3} alt="" className="testimonial__perfil-img"/>
        
                                    <div className="testimonial__perfil-data">
                                        <span className="testimonial__perfil-name">Raul Zaman</span>
                                        <span className="testimonial__perfil-detail">Director of a company</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial__images">
                        <div className="testimonial__square"></div>
                        <img src={testimonial} alt="" className="testimonial__img"/>
                    </div>
                </div>
            </section>
            </main>
        </>
    )
}

export default Testimonials