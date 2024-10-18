import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header.js";
import SectionOne from "./SectionOne.js";
import SectionTwo from "./SectionTwo.js";
import SectionThree from "./SectionThree.js";
import SectionFour from "./SectionFour.js";
import Footer from "./Footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="m-0 p-0">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  </React.StrictMode>
);
