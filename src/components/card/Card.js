import React  from 'react'
import '../card/card.css'
function Card({ item , handleClick }) {
    const { img, label, price } = item;
    return (
        
        <>
            {/* MAIN  */}
            <div class="featured__container grid">
                <article class="featured__card">
                    <span class="featured__tag">Sale</span>
                    <img src={img} alt="" class="featured__img" />
                    <div class="featured__data">
                        <h3 class="featured__title">{label}</h3>
                        <span class="featured__price">$ {price}</span>
                    </div>
                    <button class="button featured__button">ADD TO CART</button>
                </article><br />
            </div>
        </>
    )
}

export default Card