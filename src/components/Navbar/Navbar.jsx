import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faSlack } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import CartListModal from "../CartListModal/CartListModal";
const Navbar = ({ setCartOpen,cartList,setCartList,isCartOpen }) => {
  const iconVariant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <>
      <nav className="max-h-5 w-screen flex justify-around py-8 mx-auto bg-white z-10 fixed top-0">
        <div
          className="flex items-center"
          onClick={() => window.location.reload()}
        >
          <FontAwesomeIcon
            icon={faSlack}
            size="3x"
            className="mr-4 text-blue-500"
          />
          <h3 className="text-2xl font-medium text-blue-500">Rowenta</h3>
        </div>
        <div className="items-center hidden space-x-8 lg:flex text-lg font-semibold ">
          <Link
            to="intro"
            smooth={true}
            duration={1000}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="technologies"
            smooth={true}
            duration={1000}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Technologies
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={1000}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Products
          </Link>
          <Link
            to="contactus"
            smooth={true}
            duration={1000}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex items-center space-x-2 text-blue-500 ">
          <a>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6  hover:text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <motion.path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                variants={iconVariant}
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
                initial="hidden"
                animate="visible"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </motion.svg>
          </a>
          <motion.a href="https://github.com/DaliborD45" target="blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </motion.a>
          <FontAwesomeIcon
            icon={faShoppingCart}
            size="lg"
            className="hover:text-indigo-600"
            onClick={() => setCartOpen(true)}
          />
        </div>
      </nav>
      <CartListModal
        cartList={cartList}
        setCartList={setCartList}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
      />
    </>
  );
};

export default Navbar;
