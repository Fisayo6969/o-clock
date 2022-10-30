// import React, { useState, useEffect } from "react";
// import '../cart/cart.css';
// const Cart = ({ cart }) => {
//   const [CART, setCART] = useState([]);
//   // const [list, setList] = useState([])

//   useEffect(() => {
//     // if (localStorage.cart) {
//     //   let localcartitem = JSON.parse(localStorage.cart)
//     //   setCART(localcartitem)
//     //   // let localcartitem = localStorage.getItem("item")
//     //   // localStorage.setItem("cart", CART)
      
//     // } else {
//     //   setCART([])
//     // }
//     setCART(cart)
//   }, [cart])

//   const handleRemove = (id) => {
//     CART.splice(id, -1)
//     setCART([...CART])
//   };


//   return (
//     <>
//       <div >
//         <div id="cart" className="cart blur">
//           <h2 className="cart__title-center">My Cart</h2>
//           {CART.map((item, cartIndex) => (
//             <div key={cartIndex}>
//               <div className="cart__container">
//                 <article className="cart__card">
//                   <div className="cart__box">
//                     <img src={item.img} alt="" className="cart__img" />
//                   </div>

//                   <div className="cart__details">
//                     <h3 className="cart__title">{item.label}</h3>
//                     <span className="cart__price">$ {item.price * item.quantity}.00</span>

//                     <div className="cart__amount">
//                       <div className="cart__amount-content">
//                         <span className="cart__amount-box" onClick={() => {

//                           const _CART = CART.map((item, index) => {
//                             return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
//                           })
//                           setCART(_CART)
//                         }} >
//                           <i className='bx bx-minus'></i>
//                         </span>

//                         <span className="cart__amount-number">{item.quantity}</span>

//                         <span className="cart__amount-box" onClick={() => {
//                           const _CART = CART.map((item, index) => {
//                             return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
//                           })
//                           setCART(_CART)
//                         }}>
//                           <i className='bx bx-plus'></i>
//                         </span>
//                       </div>
//                       <i className='bx bx-trash-alt cart__amount-trash' onClick={() => handleRemove(item.id)}></i>
//                     </div>
//                   </div>
//                 </article>
//                 <br />
//               </div>
//             </div>
//           ))}
//           <div className="cart__prices">
//             <span className="cart__prices-item">Total</span>
//             <span className="cart__prices-total">${
//               CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
//             }.00</span>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Cart

import React, { useState, useEffect } from "react";
import '../cart/cart.css';

const Cart = ({ cart, handleChange }) => {
  const [price, setPrice] = useState(0);

  // const handleRemove = (id) => {
  //   const arr = cart.splice((item) => item.id !== id);
  //   setCart(arr);
  //   handlePrice();
  // };
  // const handleClick = (item) => {
  //   cart.splice(item, 1)
  //   // if (cart.indexOf(item) !== 0) return;
  //   setPrice([...cart, item]);
  //   handlePrice();
  // }

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      <div >
        <div id="cart" className="cart blur">
          <h2 className="cart__title-center">My Cart</h2>
          {cart.map((item,index) => (
            <div key={index}>
              <div className="cart__container">
                <article className="cart__card">
                  <div className="cart__box">
                    <img src={item.img} alt="" className="cart__img" />
                  </div>

                  <div className="cart__details">
                    <h3 className="cart__title">{item.label}</h3>
                    <span className="cart__price">$ {item.price}.00</span>

                    <div className="cart__amount">
                      <div className="cart__amount-content">
                        <span className="cart__amount-box" onClick={() => handleChange(item, -1)}>
                          <i className='bx bx-minus'></i>
                        </span>

                        <span className="cart__amount-number">{item.amount}</span>

                        <span className="cart__amount-box" onClick={() => handleChange(item, 1)}>
                          <i className='bx bx-plus'></i>
                        </span>
                      </div>
                      {/* <i className='bx bx-trash-alt cart__amount-trash' onClick={() => handleClick(item)}>T</i> */}
                      <i className='bx bx-trash-alt cart__amount-trash'></i>
                    </div>
                  </div>
                </article>
                <br />
              </div>
            </div>
          ))}
          <div className="cart__prices">
            <span className="cart__prices-item">Total</span>
            <span className="cart__prices-total">${price}.00</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart