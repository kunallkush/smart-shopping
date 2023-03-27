import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Footer() {
  const product = useSelector((state) => state.cart);
  let year = new Date().getFullYear()
  return (
    <>
      {/* <footer className="footer-distributed">
        <div className="footer-left">
          <a className="navbar-brand" href="/">
            <img className="compLogo" src="./public/logo1.png" />
          </a>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Product</a>

            <a href="#">About</a>

            <a href="#">Contact Us</a>
          </p>

          <p className="footer-company-name">Company Name © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <FaMapMarkerAlt />{" "}
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <BsFillTelephoneFill /> <p>+1.555.555.5555</p>
          </div>

          <div>
            <HiMail />{" "}
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <BsFacebook />{" "}
            </a>
            <a href="#">
              <AiFillTwitterCircle />{" "}
            </a>
            <a href="#">
              <AiFillLinkedin />{" "}
            </a>
            <a href="#">
              <AiFillGithub />{" "}
            </a>
          </div>
        </div>
      </footer> */}
      <div className="">
        <footer className="footer-bs">
          <div className="row">
            <div className="col-md-3 footer-brand animated fadeInLeft">
              <a className="navbar-brand" href="/">
                <img className="compLogo" src="/images/logo2.png" />
              </a>
              <p>
              Welcome to our online store, where shopping is made easy and enjoyable! We offer a wide selection of high-quality products at affordable prices, all designed to make your life easier and more comfortable. From trendy fashion items to must-have tech gadgets, we have everything you need to stay on top of your game. With secure and fast shipping, hassle-free returns, and outstanding customer service, you can shop with confidence and get the best value for your money. Don't wait any longer, start browsing our amazing collection today and experience the convenience of online shopping at its finest!
              </p>
              <p>© {year} All rights reserved</p>
            </div>
            <div className="col-md-3 footer-nav animated fadeInUp">
              <h4>Menu —</h4>
              <div className="col-md-6">
                <ul className="pages">
                  <li>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="cart" className="nav-link">
                      <div className="d-flex">
                        Cart
                        <div className="cart">
                          <span className="count">{product.length}</span>
                          <FaShoppingCart />
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 footer-social animated fadeInDown">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">RSS</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-ns animated fadeInRight">
              <h4>Newsletter</h4>
              <p>
                A rover wearing a fuzzy suit doesn’t alarm the real penguins
              </p>
              <p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-envelope"></span>
                    </button>
                  </span>
                </div>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
