import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import IntroPage from "./components/IntroPage/IntroPage";
import ProductPage from "./components/ProductPage/ProductPage";
import CartListModal from "./components/CartListModal/CartListModal";
import TechnologiesPage from "./components/TechnologiesPage/TechnologiesPage";
import ContactUs from "./components/ContactUs/ContactUs";
function App() {
  const [cartList, setCartList] = useState([
    { itemName: "Pouchcleaner", id: 1, price: 299 },
  ]);
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 max-w-screen h-screen">
      <Navbar setCartOpen={setCartOpen} />
      <IntroPage />
      <TechnologiesPage />
      <ProductPage cartList={cartList} setCartList={setCartList} />
      <CartListModal
        cartList={cartList}
        setCartList={setCartList}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
      />
      <ContactUs />
    </div>
  );
}

export default App;
