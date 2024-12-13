import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import Footer from "./Footer";
import Orderpage from "./Orderpage"; // Ensure the case matches the filename
import Menu from "./Menu"; // Import the Menu page
import Admin from "./Adminpage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="m-0 p-0">
        <Header />
        <Routes>
          <Route
            path="/AppRes"
            element={
              <>
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <Footer />
              </>
            }
          />
          <Route path="/order" element={<Orderpage />} />
          <Route path="/menu" element={<Menu />} /> {/* Add Menu Route */}
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
