import React from "react";
import "../css/header.css";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const product = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="compLogo" src="/images/logo1.png" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="cart">
              <span className="count">{product.length}</span>
              <FaShoppingCart />{" "}
            </div>
            <AiOutlineArrowDown />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="cart" className="nav-link">
                  <div className="d-flex">
                    Cart
                    <div className="cart">
                      <span className="count">{product.length}</span>
                      <FaShoppingCart />{" "}
                    </div>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="product" className="nav-link">
                  Product
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link">
                  Contact Us
                </Link>
              </li> */}
            </ul>
            <div className="form">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-warning" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
