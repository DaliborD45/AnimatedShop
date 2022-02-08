import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Alert = ({ isAlertOpen, setAlertOpen }) => {
  return (
    isAlertOpen && (
      <AnimatePresence>
        <motion.div
          id={1}
          positionTransition
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 1 } }}
          className="absolute right-20 mt-10 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md w-56 "
          role="alert"
        >
          {/* <FontAwesomeIcon icon={faTimesCircle} className="relative left-40" /> */}

          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div className="">
              <p className="font-bold mt-0.5">Item added</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    )
  );
};

export default Alert;
