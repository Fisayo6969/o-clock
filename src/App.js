import React, { useState } from "react";
import "./App.css";
import "./components/Public.css";
import Header from "./components/Header/Header";
// import Newcollections from './components/New Collections/Newcollections';
import Featured from "./components/Feautured/Featured";
// import Story from "./components/Our Story/Story";
// import Product from "./components/Product/Product";
// import Testimonials from "./components/Testimonials/Testimonials";
// import New from "./components/New Arrivals/New";
// import Newsletter from "./components/Newsletter/Newsletter";
// import Footer from "./components/Footer/Footer";
import Cart from "./components/cart/Cart";
// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';

function App() {
  const [product] = useState([
    {
      img: "https://watches.vercel.app/img/watches/T115.417.27.057.01.png",
      label: "Tissot 1853",
      author: "by Wonder House Books | 25 April 2018",
      price: 1050,
      amount: 1,
    },
    {
      img: "https://watches.vercel.app/img/watches/T125.617.16.051.00.png",
      label: "Tissot v8 Alphine",
      author: "by Wonder House Books | 25 April 2018",
      price: 1900,
      amount: 1,
    },
    {
      img: "https://watches.vercel.app/img/watches/T125.617.36.051.01.png",
      label: "Brown Tissot Alphine",
      author: "by Wonder House Books | 25 April 2018",
      price: 1500,
      amount: 1,
    },
    {
      img: "https://watches.vercel.app/img/watches/T125.617.17.051.00.png",
      label: "Yellow Tissot Alphine",
      author: "by Wonder House Books | 25 April 2018",
      price: 2000,
      amount: 1,
    },
  ])
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false)
  // console.log(cart)
  const addToCart = (data) => {
    // console.log(data)
    setCart([...cart, { ...data, quantity: 1 }])

    // if (cart.indexOf(data) !==  -1) return;
    // setCart([...cart, data]);
  }

  const handleShow = (value) => {
    setShowCart(value)
  }
  return (
    <>
      {/* <Routes>
        <Route path='/h' element={<Navbar />} />
      </Routes> */}
      <React.Fragment>
        <Header count={cart.length} handleShow={handleShow} />
        {/* <Newcollections /> */}
        {
          showCart ? <Cart cart={cart}></Cart> :
            <Featured product={product} addToCart={addToCart}></Featured>
        }
        {/* <Story />
        <Product />
        <Testimonials />
        <New />
        <Newsletter />
        <Footer /> */}
      </React.Fragment>
    </>
  );
}

export default App;
