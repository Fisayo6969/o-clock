import React from 'react';
import './Product.css';
import product2 from '../Product/product2.png';
import product3 from '../Product/product3.png';
import product4 from '../Product/product4.png';
import product5 from '../Product/product5.png';
function Product() {
    return (
        <>
            {/* MAIN  */}
            <main class="main">
                {/* <!--========= PRODUCTS ========--> */}
                <section class="products section container" id="products">
                    <h2 class="section__title">
                        Products
                    </h2>

                    <div class="products__container grid">
                        <article class="products__card">
                            <img src={product2} alt="" class="products__img" />

                            <h3 class="products__title">Khaki pilot</h3>
                            <span class="products__price">$1350</span>

                            <button class="products__button">
                                <i class='bx bx-shopping-bag'></i>
                            </button>
                        </article>

                        <article class="products__card">
                            <img src={product3} alt="" class="products__img" />

                            <h3 class="products__title">Jubilee black</h3>
                            <span class="products__price">$870</span>

                            <button class="products__button">
                                <i class='bx bx-shopping-bag'></i>
                            </button>
                        </article>

                        <article class="products__card">
                            <img src={product4} alt="" class="products__img" />

                            <h3 class="products__title">Fosil me3</h3>
                            <span class="products__price">$650</span>

                            <button class="products__button">
                                <i class='bx bx-shopping-bag'></i>
                            </button>
                        </article>

                        <article class="products__card">
                            <img src={product5} alt="" class="products__img" />

                            <h3 class="products__title">Duchen</h3>
                            <span class="products__price">$950</span>

                            <button class="products__button">
                                <i class='bx bx-shopping-bag'></i>
                            </button>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Product