// import React, { useState } from "react";
// import "./App.css";
// import '../src/components/Public.css'
// import Header from "./components/Header/Header";
// import Newcollections from './components/New Collections/Newcollections';
// import Featured from "./components/Feautured/Featured";
// import Story from "./components/Our Story/Story";
// import Product from "./components/Product/Product";
// import Testimonials from "./components/Testimonials/Testimonials";
// import New from "./components/New Arrivals/New";
// import Newsletter from "./components/Newsletter/Newsletter";
// import Footer from "./components/Footer/Footer";
// import Cart from "./components/cart/Cart";
// import product from "./components/data";
// // import { Route, Routes } from 'react-router-dom';
// // import Navbar from './components/navbar/Navbar';
// function App() {
//   const [cart, setcart] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const addToCart = (data) => {
//     setcart([...cart, { ...data, quantity: 1 }]);
//     localStorage.setItem("cartItem", JSON.stringify(cart))
//     // if (cart.indexOf(data) !==  -1) return;
//     // setCart([...cart, data]);
//   }

//   const handleShow = (value) => {
//     setShowCart(value)
//   }
//   return (
//     <>
//     {/* <Routes>
//       <Route path='/h' element={<Navbar />} />
//     </Routes> */}
//     <React.Fragment>
//       <Header count={cart.length} handleShow={handleShow} />
//       <Newcollections />
//       {
//         showCart ? <Cart cart={cart} ></Cart> :
//           <Featured product={product} addToCart={addToCart} />
//       }
//       <Story />
//       <Product />
//       <Testimonials />
//       <New />
//       <Newsletter />
//       <Footer />
//     </React.Fragment>
//   </>
//   )
// }

// export default App


import React, { useState } from "react";
import "./App.css";
import '../src/components/Public.css'
import Header from "./components/Header/Header";
import Newcollections from './components/New Collections/Newcollections';
import Featured from "./components/Feautured/Featured";
import Story from "./components/Our Story/Story";
import Product from "./components/Product/Product";
import Testimonials from "./components/Testimonials/Testimonials";
import New from "./components/New Arrivals/New";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Cart from "./components/cart/Cart";
// import product from "./components/data";
// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';

function App() {
  const [Show, setShow] = useState(true)
  const [cart, setCart] = useState([])

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
      {/* <Routes>
        <Route path='/h' element={<Navbar />} />
      </Routes> */}
      <React.Fragment>
        <Header setShow={setShow} size={cart.length} />
        <Newcollections/>
        {Show ? 
          <Featured handleClick={handleClick} />
        : 
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        }
        <Story />
        <Product />
        <Testimonials />
        <New />
        <Newsletter />
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;