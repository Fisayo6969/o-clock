import React from 'react';
import '../Feautured/Featured.css';
function Card({ item, handleClick }) {
    const { img, label, price } = item;
    return (

        <>
            {/* MAIN  */}
            <div className="featured__content">
                {/* <h6 className="featured__name">{index + 1}</h6> */}
                <img src={img} alt="" className="featured__img" />
                <h3 className="featured__name ">{label}</h3>
                <span className="featured__price">$ {price}.00</span>
                <button className="button menu__button" onClick={() => handleClick(item)}><i className='bx bx-cart-alt'>A</i></button>
            </div>
        </>
    )
}

export default Card