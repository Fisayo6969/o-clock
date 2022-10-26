import React from 'react'
import './Story.css';
import story from '../Our Story/story.png';

function Story() {
    return (
        <>
            {/* MAIN  */}
            <main class="main">
            {/* <!--====== STORY ======--> */}
            <section class="story section container">
                <div class="story__container grid">
                    <div class="story__data">
                        <h2 class="section__title story__section-title">
                            Our Story
                        </h2>
    
                        <h1 class="story__title">
                            Inspirational Watch of <br/> this year
                        </h1>
    
                        <p class="story__description">
                            The latest and modern watches of this year, is available in various 
                            presentations in this store, discover them now.
                        </p>
    
                        <a href="/" class="button button--small">Discover</a>
                    </div>

                    <div class="story__images">
                        <img src={story} alt="" class="story__img"/>
                        <div class="story__square"></div>
                    </div>
                </div>
            </section>
            </main>
        </>
    )
}

export default Story