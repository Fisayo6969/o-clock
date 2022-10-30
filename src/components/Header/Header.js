// import React, { useState } from "react";
// import './Header.css';
// import '../Public.css';
// function Header(props) {
//     // to change burger classes
//     // const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
//     const [setMenuClass] = useState("menu hidden")
//     const [isMenuClicked, setIsMenuClicked] = useState(false)

//     // toggle burger menu change
//     const updateMenu = () => {
//         if (!isMenuClicked) {
//             // setBurgerClass("burger-bar clicked")
//             setMenuClass("menu visible")
//         }
//         else {
//             // setBurgerClass("burger-bar unclicked")
//             setMenuClass("menu hidden")
//         }
//         setIsMenuClicked(!isMenuClicked)
//     }

//     return (
//         <>
//             {/* HEADER */}
// <header className="header" id="header">
//     <nav className="nav container">
//         <strong className="nav__logo" onClick={() => props.handleShow(false)}>
//             <i className='bx bxs-watch nav__logo-icon'></i> Watches
//         </strong>

//         <div className="nav__menu" id="nav-menu">
//             <ul className="nav__list">
//                 <li className="nav__item">
//                     <a href="#home" className="nav__link active-link">Home</a>
//                 </li>
//                 <li className="nav__item">
//                     <a href="#featured" className="nav__link">Featured</a>
//                 </li>
//                 <li className="nav__item">
//                     <a href="#products" className="nav__link">Products</a>
//                 </li>
//                 <li className="nav__item">
//                     <a href="#new" className="nav__link">New</a>
//                 </li>
//             </ul>

//             <div className="nav__close" id="nav-close">
//                 <i className='bx bx-x' ></i>
//             </div>
//         </div>

//         <div className="nav__btns">
//             {/* Theme change button */}
//             <i className='bx bx-moon change-theme' id="theme-button"></i>

//             <div className="nav__shop" id="cart-shop" onClick={() => props.handleShow(true)} >
//                 {props.count}
//                 <i className='bx bx-shopping-bag'></i>
//                 <span className="tooltip">My Cart</span>
//             </div>

//             <div className="nav__toggle" id="nav-toggle" onClick={updateMenu}>
//                 <i className='bx bx-grid-alt' ></i>
//             </div>
//         </div>
//     </nav>

//     {/* <!--======= CART ======--> */}
//     {/* <div id="cart" className={menu_class} className="cart">
//         <i className='bx bx-x cart__close' id="cart-close" onClick={updateMenu}></i>

//         <h2 className="cart__title-center">My Cart</h2>

//         <div className="cart__container">
//             <article className="cart__card">
//                 <div className="cart__box">
//                     <img src="assets/img/featured1.png" alt="" className="cart__img" />
//                 </div>

//                 <div className="cart__details">
//                     <h3 className="cart__title">Jazzmaster</h3>
//                     <span className="cart__price">$1050</span>

//                     <div className="cart__amount">
//                         <div className="cart__amount-content">
//                             <span className="cart__amount-box">
//                                 <i className='bx bx-minus' ></i>
//                             </span>

//                             <span className="cart__amount-number">1</span>

//                             <span className="cart__amount-box">
//                                 <i className='bx bx-plus' ></i>
//                             </span>
//                         </div>

//                         <i className='bx bx-trash-alt cart__amount-trash' ></i>
//                     </div>
//                 </div>
//             </article>
//         </div>

//         <div className="cart__prices">
//             <span className="cart__prices-item">3 items</span>
//             <span className="cart__prices-total">$2880</span>
//         </div>
//     </div> */}
// </header>
//         </>
//     )
// }

// export default Header

import React from "react";
import './Header.css';
import '../Public.css';

const Header = ({ setShow, size }) => {
    return (
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <strong className="nav__logo" onClick={() => setShow(true)}>
                        <i className='bx bxs-watch nav__logo-icon'></i> Watches
                    </strong>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link active-link">Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="#featured" className="nav__link">Featured</a>
                            </li>
                            <li className="nav__item">
                                <a href="#products" className="nav__link">Products</a>
                            </li>
                            <li className="nav__item">
                                <a href="#new" className="nav__link">New</a>
                            </li>
                        </ul>

                        <div className="nav__close" id="nav-close">
                            <i className='bx bx-x' ></i>
                        </div>
                    </div>

                    <div className="nav__btns">
                        {/* Theme change button */}
                        <i className='bx bx-moon change-theme' id="theme-button"></i>

                        <div className="nav__shop" id="cart-shop" onClick={() => setShow(false)}>
                        {size}
                            <i className='bx bx-shopping-bag'></i>
                            <span className="tooltip">My Cart</span>
                        </div>

                        <div className="nav__toggle" id="nav-toggle" >
                            <i className='bx bx-grid-alt' ></i>
                        </div>
                    </div>
                </nav>

                {/* <!--======= CART ======--> */}
                {/* <div id="cart" className={menu_class} className="cart">
                    <i className='bx bx-x cart__close' id="cart-close" onClick={updateMenu}></i>

                    <h2 className="cart__title-center">My Cart</h2>

                    <div className="cart__container">
                        <article className="cart__card">
                            <div className="cart__box">
                                <img src="assets/img/featured1.png" alt="" className="cart__img" />
                            </div>

                            <div className="cart__details">
                                <h3 className="cart__title">Jazzmaster</h3>
                                <span className="cart__price">$1050</span>

                                <div className="cart__amount">
                                    <div className="cart__amount-content">
                                        <span className="cart__amount-box">
                                            <i className='bx bx-minus' ></i>
                                        </span>

                                        <span className="cart__amount-number">1</span>

                                        <span className="cart__amount-box">
                                            <i className='bx bx-plus' ></i>
                                        </span>
                                    </div>

                                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="cart__prices">
                        <span className="cart__prices-item">3 items</span>
                        <span className="cart__prices-total">$2880</span>
                    </div>
                </div> */}
            </header>
        </>
    )
}

export default Header