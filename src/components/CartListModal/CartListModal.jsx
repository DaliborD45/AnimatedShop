import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
const CartListModal = ({ isCartOpen, setCartOpen, cartList, setCartList }) => {
  const handleItemRemove = (itemId) => {
    setCartList((prevState) => prevState.filter(({ id }) => id !== itemId));
  };

  const [cartSum, setCartSum] = useState(0);

  useEffect(() => {
    let sumReducer = cartList.reduce((sum, { price }) => sum + price, 0);
    setCartSum(sumReducer);
  }, [cartList]);

  return (
    isCartOpen && (
      <div className="fixed z-10 w-72 right-10 top-20 bg-white rounded-lg shadow  dark:bg-gray-700 border ">
        <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
            Shopping Cart
          </h3>
        </div>
        <div className="p-6 -mt-4">
          {cartList.map(({ itemName, id, price }) => {
            return (
              <li className="flex  py-2" key={id}>
                <p className="font-bold ">{itemName}</p>
                <p className="ml-auto font-semibold">{price}$</p>
                <FontAwesomeIcon
                  onClick={() => handleItemRemove(id)}
                  icon={faTimes}
                  className="ml-5 mt-1 text-red-500 hover:text-red-700"
                />
              </li>
            );
          })}
        </div>

        <section className="pl-5 mt-5">
          <p className="font-bold text-indigo-600 text-lg">
            Total: {cartSum} $
          </p>
        </section>
        <div className="flex space-x-2 items-center  pl-5 pt-5 pb-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            data-modal-toggle="default-modal"
            type="submit"
            className="text-white mr-5  bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Checkout
          </button>
          <div
            onClick={() => setCartOpen(false)}
            className="text-gray-500 bg-white   hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
          >
            Cancel
          </div>
        </div>
      </div>
    )
  );
};

export default CartListModal;
