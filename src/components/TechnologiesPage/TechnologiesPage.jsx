import React from "react";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCog, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TechnologiesPage = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <div id="technologies">
      <div className="-mt-[64px] bg-curvybg bg-cover min-h-screen">
        <section className="w-4/4 mx-auto  pt-72 flex">
          <motion.section
            className="text-white font-bold text-4xl font-sans flex mt-28"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.section className="mx-20 " variants={cardVariants}>
              <section className="ml-8">
                <FontAwesomeIcon
                  className="ml-16 mb-4 animate-bounce"
                  icon={faCheckCircle}
                />
                <h1>Perfection</h1>
              </section>

              <p className="text-sm w-60 mt-5 text-center">
                Our vacuum cleaner are designed by best engineers on the planet.
              </p>
            </motion.section>
            <motion.section className="mx-20 " variants={cardVariants}>
              <section className="ml-16">
                <FontAwesomeIcon
                  className="ml-10 mb-4 animate-bounce"
                  icon={faVolumeUp}
                />
                <h1>Silence</h1>
              </section>
              <p className="text-sm w-60 mt-5 text-center">
                Many test prooved that our vacuum cleaners are the most silent
                ones on the market.
              </p>
            </motion.section>
            <motion.section className="mx-20 " variants={cardVariants}>
              <section className="ml-12">
                <FontAwesomeIcon
                  className="ml-14 mb-4 animate-bounce"
                  icon={faCog}
                />
                <h1>Effective</h1>
              </section>
              <p className="text-sm w-60 mt-5 text-center">
                We have put our products under many tests make their job as
                effective and efficient as possible.
              </p>
            </motion.section>
          </motion.section>
          <section className="w-96 h-96 bg-white rounded-full border-8 border-pink-500 ml-auto mr-40">
            <img
              src="https://images.robotworld.sk/7900/foto_7903.jpg"
              className="w-60 relative left-16  top-16 "
            ></img>
          </section>
        </section>
      </div>
    </div>
  );
};

export default TechnologiesPage;
