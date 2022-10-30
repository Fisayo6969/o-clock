// import React from 'react';
// import '../Feautured/Featured.css';

// function Featured({ product, addToCart }) {
//     return (
//         <>
//             {/* MAIN  */}
// <main className="main">
//     <section className="featured section bd-container" id="featured">
//         <h2 className="section__title">Featured</h2>
//         {/* Mapping the data from the object */}
//             <div className="featured__container bd-grid" >
//             {product.map((productItem,index) => (
//                 <div className="featured__content" key={index}>
//                     <h6 className="featured__name">{index + 1}</h6>
//                     <img src={productItem.img} alt="" className="featured__img"/>
//                     <h3 className="featured__name ">{productItem.label}</h3>
//                     <span className="featured__price">$ {productItem.price}.00</span>
//                     <button className="button menu__button" onClick={() => addToCart(productItem)}><i className='bx bx-cart-alt'>A</i></button>
//                 </div>
//                 ))}
//             </div>

//     </section>
// </main>
//         </>
//     )
// }

// export default Featured

import React from 'react';
import '../Feautured/Featured.css';
import product from "../data";
import Card from '../card/Card';

const Featured = ({ handleClick }) => {
    return (
        <>
            <main className="main">
                <section className="featured section bd-container" id="featured">
                    <h2 className="section__title">Featured</h2>
                    {/* Mapping the data from the object */}
                    <div className="featured__container bd-grid" >
                        {product.map((item, index) => (
                            <Card key={index} item={item} handleClick={handleClick} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Featured