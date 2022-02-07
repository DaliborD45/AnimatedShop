import React, { useState } from "react";
import { productsArr } from "./ProductsArr";
import { motion, AnimatePresence } from "framer-motion";
const ProductPage = () => {
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
        delay: 0.5,

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
      <motion.h1
        className="font-bold text-white text-center text-4xl pt-10 font-['Helvetica']"
        variants={headerVariant}
      >
        Buy the one that suits you the best
      </motion.h1>
      <section className="w-full  pt-32 flex justify-between mx-auto">
        {productsArr.map(({ name, variantType, id, imgLink, colorLayout }) => {
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
                <motion.p className="mt-44 text-center font-bold text-gray-100 hover:text-gray-300 font-mono cursor-pointer text-4xl">
                  {name}
                </motion.p>
              </motion.section>
            </>
          );
        })}
      </section>
    </motion.div>
  );
};

export default ProductPage;
