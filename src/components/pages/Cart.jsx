import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Store/CartSlice";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
function Cart() {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <div className="container mt-100">
        <div className="row">
          {product.map((items) => {
            return (
              <div className="col-md-4 col-sm-6" key={items.id}>
                <div className="card mb-30 shadow">
                  <div className="ribbon ribbon-top-left">
                    <span>{items.discountPercentage}% Off</span>
                  </div>
                  <a className="card-img-tiles" href="#" data-abc="true">
                    <div className="inner">
                      <div className="main-img">
                        <img
                          src={items.images[0]}
                          alt="Category"
                        />
                      </div>
                      <div className="thumblist">
                        <img
                          src={items.images[1]}
                          alt="Category"
                        />
                        <img
                          src={items.images[2]}
                          alt="Category"
                        />
                      </div>
                    </div>
                  </a>
                  <div className="card-body text-center">
                    <p className="card-title">{items.title}</p>
                    <div className="rating">
                      Rating:
                      {Array.from({ length: 5 }, (elem, index) => {
                        let number = index + 0.5;
                        return (
                          <span key={index}>
                            {items.rating >= index + 1 ? (
                              <FaStar className="icon" />
                            ) : items.rating >= number ? (
                              <FaStarHalfAlt className="icon" />
                            ) : (
                              <AiOutlineStar className="icon" />
                            )}
                          </span>
                        );
                      })}
                    </div>
                    <p className="text-muted">Starting from ${items.price}</p>
                    <p className="text1">
                      Category -
                      <span style={{ color: "black" }}>{items.category}</span>
                      ||
                      <span>
                        Brand -
                        <span style={{ color: "black" }}>{items.brand}</span>
                      </span>
                    </p>
                    <p className="text">{items.description}</p>
                    <div className="d-flex justify-content-around align-items-baseline">
                      <button
                        className="btn btn-outline-warning btn-sm"
                        href="#"
                        data-abc="true"
                        onClick={() => handleRemove(items.id)}

                      >
                        Remove Products
                      </button>
                      <a className="btn btn-warning btn-sm disabled">
                        In Stock - {items.stock}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
