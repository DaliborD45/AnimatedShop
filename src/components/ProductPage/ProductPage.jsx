import React, { useState } from "react";
import { productsArr } from "./ProductsArr";
import { motion } from "framer-motion";
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
      className="max-w-screen min-h-screen bg-curvybg2 bg-cover"
      id="products"
    >
      <Alert isAlertOpen={isAlertOpen} setAlertOpen={setAlertOpen} />

      <motion.h1
        className="font-bold text-white text-center text-4xl pt-20 font-['Helvetica']"
        variants={headerVariant}
      >
        Buy the one that suits you the best
      </motion.h1>
      <section className="w-10/12  mx-auto 2xl:mx-25  pt-32 md:flex justify-between">
        {productsArr.map(({ name, price, variantType, id, imgLink }) => {
          return (
            <motion.div key={id} variants={variantType}>
              <section
                className={`w-72 h-72 2xl:w-96 2xl:h-96 bg-white rounded-full border-8 border-indigo-600  2xl:mr-40`}
              >
                <motion.img
                  src={`${imgLink}`}
                  className="w-36 2xl:w-60 relative left-14 2xl:left-16  top-16"
                  alt="roboticCleaner"
                />
              </section>
              <section className="text-center 2xl:-ml-32 mt-10  hover:text-gray-300">
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
            </motion.div>
          );
        })}
      </section>
    </motion.div>
  );
};

export default ProductPage;
