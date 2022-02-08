import React, { useState } from "react";

import { productsArr } from "./ProductsArr";
import { motion, AnimatePresence } from "framer-motion";
import Alert from "./Alert/Alert";
const ProductPage = ({ setCartList, cartList }) => {
  const [isAlertOpen, setAlertOpen] = useState(false);
  const handleAddItem = (id, price, name) => {
    const newItem = { itemName: name, id, price };
    setCartList((prevState) => [...prevState, newItem]);
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 2000);
    console.log(newItem);
  };
  const headerVariant = {
    offscreen: {
      x: -300,
      y: 20,

      opacity: 0,
    },
    onscreen: {
      x: 0,
      y: 20,
      opacity: 1,
      transition: {

        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="max-w-screen h-screen bg-curvybg2 bg-cover"
      id="products"
    >
      <Alert isAlertOpen={isAlertOpen} setAlertOpen={setAlertOpen} />

      <motion.h1
        className="font-bold text-white text-center text-4xl pt-20 font-['Helvetica']"
        variants={headerVariant}
      >
        Buy the one that suits you the best
      </motion.h1>
      <section className="w-full  pt-32 flex justify-between mx-auto">
        {productsArr.map(({ name, price, variantType, id, imgLink }) => {
          return (
            <>
              <motion.section
                key={id}
                variants={variantType}
                className={`w-96 h-96 bg-white rounded-full border-8 border-indigo-600 ml-auto mr-40`}
              >
                <motion.img
                  src={`${imgLink}`}
                  className="w-60 relative left-16  top-16"
                  alt="roboticCleaner"
                ></motion.img>
                <section className="flex flex-col justify-center mt-44 ml-5 hover:text-gray-300">
                  <motion.p className=" text-center font-bold drop-shadow-xl  text-gray-100  font-mono cursor-pointer text-4xl">
                    {name}
                  </motion.p>
                  <motion.p className="  text-center font-bold text-gray-100 font-mono cursor-pointer text-4xl">
                    {price} $
                  </motion.p>
                  <motion.button
                    onClick={() => handleAddItem(id, price, name)}
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="w-1/3  mx-auto rounded-lg py-2 mt-4 bg-indigo-600 text-white font-bold hover:bg-indigo-500"
                  >
                    Buy now
                  </motion.button>
                </section>
              </motion.section>
            </>
          );
        })}
      </section>
    </motion.div>
  );
};

export default ProductPage;
