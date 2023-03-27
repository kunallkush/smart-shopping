import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchProduct } from "../../Store/ProductSlice";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../../components/css/home.css";
import Modal from "react-modal";
import { useState, useRef } from "react";
import axios from "axios";

function Home() {
  const { data: product, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const [selectedData, setSelectedData] = useState([]);
  let updatedData = [];
  const setId = useRef("");
  //**modal */
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(id) {
    setIsOpen(true);
    id = id;
    setId.current = id;
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setSelectedData(res.data);
      })
      .catch((err) => {
        alert("Server Error");
      });
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedData([]);
  }

  const inputHandler = (e) => {
    setSelectedData((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const id = setId.current;
    const body = {
      title: selectedData.title,
      description: selectedData.description,
    };

    axios(`https://dummyjson.com/products/${id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(body),
    }).then((res) => {
      updatedData.push(res.data);
      updatedData.forEach((items) => {
        document.getElementById("title_" + id).innerHTML = items.title;
        document.getElementById("description_" + id).innerHTML =
          items.description;
      });
      setLoading(true);
    });
    setIsOpen(false);
  };
  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };
  return (
    <>
      {!status ? (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="container mt-100 ">
          <div className="row">
            {product.map((items) => {
              return (
                <div
                  className="card shadow"
                  style={{ marginBottom: "10px" }}
                  key={items.id}
                >
                  <div className="ribbon ribbon-top-left">
                    <span>{items.discountPercentage}% Off</span>
                  </div>
                  <div className="main d-flex">
                    <a className="card-img-tiles" href="#" data-abc="true">
                      <div className="inner">
                        <div
                          className="main-img"
                          style={{ width: "200px", height: "200px" }}
                        >
                          <img src={items.images[0]} alt="Category" />
                        </div>
                      </div>
                    </a>
                    <div className="card-body d-flex justify-content-between">
                      <div>
                        <h5 className="card-title" id={"title_" + items.id}>
                          {items.title}
                        </h5>
                        <p className="card-text" id={"description_" + items.id}>
                          {items.description}
                        </p>
                        <div className="">
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
                        <p className="text-muted">
                          Starting from ${items.price}
                        </p>
                        <p className="text1">
                          Category -
                          <span style={{ color: "black" }}>
                            {items.category}
                          </span>
                          ||
                          <span>
                            Brand -
                            <span style={{ color: "black" }}>
                              {items.brand}
                            </span>
                          </span>
                        </p>
                        <a className="btn btn-warning btn-sm disabled" id="stock">
                          In Stock - {items.stock}
                        </a>
                      </div>
                      <div className="buttons">
                        <button
                          href="#"
                          className="btn btn-outline-primary me-3"
                          onClick={() => openModal(items.id)}
                        >
                          Edit
                        </button>
                        <button
                          href="#"
                          className="btn btn-outline-danger"
                          onClick={() => handleDelete(items.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        id="modal"
      >
        <div className="mb-3">
          <h3>Edit Your Product</h3>
        </div>
        <hr />
        <form className=" main-form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="off"
              name="title"
              value={selectedData.title}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="off"
              name="description"
              value={selectedData.description}
              onChange={inputHandler}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-primary me-3"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
}

export default Home;
