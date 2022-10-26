import React from 'react';
import '../Feautured/Featured.css';

function Featured({ product, addToCart }) {
    return (
        <>
            {/* MAIN  */}
            <main class="main">
                {/* FEATURED */}
                <section class="featured section " id="featured">
                    <h2 class="section__title">Featured</h2>
                    <center className="items container">
                        {product.map((productItem) => (
                            <div class="grid" key={product.id}>
                                <article class="featured__card">
                                    <span class="featured__tag">Sale</span>
                                    <img src={productItem.img} alt="" class="featured__img" />
                                    <div class="featured__data">
                                        <h3 class="featured__title">{productItem.label}</h3>
                                        <span class="featured__price">$ {productItem.price}</span>
                                    </div>
                                    <button class="button featured__button"
                                        onClick={() => addToCart(productItem)}>ADD TO CART</button>
                                </article><br />
                            </div>
                        ))}
                    </center>
                </section>
            </main>
        </>
    )
}

export default Featured