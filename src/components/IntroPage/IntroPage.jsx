import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const IntroPage = () => {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        " in a vacuum cleaner industry",
        " in keeping house clean",
        " in your life",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackSpace: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <section className="w-3/4 mx-auto min-h-screen mt-16 text-center" id="intro">
      <section>
        <h1 className="pt-40 text-white font-bold text-6xl font-['helvetica']">
          Rowenta Cleaners
        </h1>
        <section className="mt-12 text-4xl">
          <span className="text-pink-300  font-bold pr-2">Revolution</span>
          <span className="text-gray-100   font-semibold" ref={el}></span>
        </section>
      </section>
      <Link
        to="technologies"
        smooth={true}
        duration={1000}
        className="hover:text-blue-500"
      >
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          className="bg-indigo-700 px-5 py-3 text-white font-bold text-2xl mt-24 rounded-lg hover:bg-indigo-600 transition ease-in duration-300"
        >
          View More
        </motion.button>
      </Link>
    </section>
  );
};

export default IntroPage;
