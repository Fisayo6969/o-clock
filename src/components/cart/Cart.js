import React, { useState, useEffect } from "react";
// import { updateMenu } from '../Header/Header'
import '../cart/cart.css'
const Cart = ({ cart }) => {
  const [CART, setCART] = useState([]);
  // const [list, setList] = useState([])

  useEffect(() => {
    setCART(cart)
  }, [cart])

  // const handleRemove = (id) => {
  //   CART.splice(id, 1)
  //   setCART([...CART])
  // };


  return (
    <div id="cart" class="cart">
      {/* <br /><br /><br /><br /><br /> */}
      <h2 class="cart__title-center">My Cart</h2>
      {CART.map((cartItem, cartIndex) => (
        // return (
        <div key={CART.id}>
          {/* <div id="cart" class="cart"> */}
          {/* <i class='bx bx-x cart__close' id="cart-close"></i> */}
          <div class="cart__container">
            <article class="cart__card">
              <div class="cart__box">
                <img src={cartItem.img} alt="" class="cart__img" />
              </div>

              <div class="cart__details">
                <h3 class="cart__title">{cartItem.label}</h3>
                <span class="cart__price">$ {cartItem.price * cartItem.quantity}</span>

                <div class="cart__amount">
                  <div class="cart__amount-content">
                    <span class="cart__amount-box" onClick={() => {

                      const _CART = CART.map((item, index) => {
                        return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                      })
                      console.log("_CART", _CART)
                      setCART(_CART)
                    }} >
                      <i class='bx bx-minus'></i>
                    </span>

                    <span class="cart__amount-number">{cartItem.quantity}</span>

                    <span class="cart__amount-box" onClick={() => {
                      const _CART = CART.map((item, index) => {
                        return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                      })
                      console.log("_CART", _CART)
                      setCART(_CART)
                    }}>
                      <i class='bx bx-plus'></i>
                    </span>
                  </div>

                  {/* <i class='bx bx-trash-alt cart__amount-trash' onClick={() => handleRemove(cartItem.id)}></i> */}
                  <i class='bx bx-trash-alt cart__amount-trash'></i>
                </div>
              </div>
            </article>
            <br />
          </div>
        </div>
        // {/* </div> */}
        // )
      ))}
      <div class="cart__prices">
        <span class="cart__prices-item">Total</span>
        <span class="cart__prices-total">${
          CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
        }</span>
      </div>
    </div>

  )
}

export default Cart