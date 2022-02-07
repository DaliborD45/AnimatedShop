import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/Navbar/Navbar";
import IntroPage from "./components/IntroPage/IntroPage";
import ProductPage from "./components/ProductPage/ProductPage";
import TechnologiesPage from "./components/TechnologiesPage/TechnologiesPage";
function App() {
  const [backgroundState, setBackgroundState] = useState();

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 max-w-screen h-screen">
      <Navbar />
      <IntroPage />
      <TechnologiesPage />
      <ProductPage />
    </div>
  );
}

export default App;
