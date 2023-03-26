import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Cart from "../components/pages/Cart";
import { Provider } from "react-redux";
import store from "../Store/Store";
function Layout({ children }) {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<main>{children}</main>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
        {/* <main>{children}</main> */}
      </Provider>
    </>
  );
}

export default Layout;
