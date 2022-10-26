import React, { useState } from "react";
import './Header.css';
import '../Public.css';
function Header( props ) {
    // to change burger classes
    // const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [ setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            // setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            // setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <>
            {/* HEADER */}
            <header class="header" id="header">
                <nav class="nav container">
                    <a href="/" class="nav__logo" onClick={()=>props.handleShow(false)} >
                        <i class='bx bxs-watch nav__logo-icon'></i> Watches
                    </a>

                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="#home" class="nav__link active-link">Home</a>
                            </li>
                            <li class="nav__item">
                                <a href="#featured" class="nav__link">Featured</a>
                            </li>
                            <li class="nav__item">
                                <a href="#products" class="nav__link">Products</a>
                            </li>
                            <li class="nav__item">
                                <a href="#new" class="nav__link">New</a>
                            </li>
                        </ul>

                        <div class="nav__close" id="nav-close">
                            <i class='bx bx-x' ></i>
                        </div>
                    </div>

                    <div class="nav__btns">
                        {/* Theme change button */}
                        <i class='bx bx-moon change-theme' id="theme-button"></i>

                        <div class="nav__shop" id="cart-shop" onClick={()=>props.handleShow(true)} >
                        {props.count}
                                <i class='bx bx-shopping-bag'></i>
                                <span className="tooltip">My Cart</span>
                        </div>

                        <div class="nav__toggle" id="nav-toggle" onClick={updateMenu}>
                            <i class='bx bx-grid-alt' ></i>
                        </div>
                    </div>
                </nav>

                {/* <!--======= CART ======--> */}
                {/* <div id="cart" className={menu_class} class="cart">
                    <i class='bx bx-x cart__close' id="cart-close" onClick={updateMenu}></i>

                    <h2 class="cart__title-center">My Cart</h2>

                    <div class="cart__container">
                        <article class="cart__card">
                            <div class="cart__box">
                                <img src="assets/img/featured1.png" alt="" class="cart__img" />
                            </div>

                            <div class="cart__details">
                                <h3 class="cart__title">Jazzmaster</h3>
                                <span class="cart__price">$1050</span>

                                <div class="cart__amount">
                                    <div class="cart__amount-content">
                                        <span class="cart__amount-box">
                                            <i class='bx bx-minus' ></i>
                                        </span>

                                        <span class="cart__amount-number">1</span>

                                        <span class="cart__amount-box">
                                            <i class='bx bx-plus' ></i>
                                        </span>
                                    </div>

                                    <i class='bx bx-trash-alt cart__amount-trash' ></i>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="cart__prices">
                        <span class="cart__prices-item">3 items</span>
                        <span class="cart__prices-total">$2880</span>
                    </div>
                </div> */}
            </header>
        </>
    )
}

export default Header