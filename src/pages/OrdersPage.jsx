import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../components";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  return (
    <>
      <Navbar />
      <div className="buttons text-start pt-2 sticky-top bg-white" style={{ position: "sticky", top: "60px", zIndex: 1 }}>
        <button className="btn btn-outline-dark btn-sm m-2 bg-black text-white" onClick={() => setFilter(data)}>Processing (2)</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Packing (1)</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
          Shipping (0)
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Delivered (5)</button>
      </div>
      <div className="row justify-content-center px-3 px-md-5">
        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4 w-sm-100 px-2 mt-5">
              <div className="card text-center h-100 shadow-sm border-none" key={product.id} style={{ border: "none", borderRadius: "13px" }}>
                <div className="link-offset-2 link-underline link-underline-opacity-0">
                  <div className="d-flex">
                    <img
                      className="card-img-top object-fit-contain"
                      src={product.image}
                      alt="Card"
                      height={100}
                    />
                    <div className="card-body text-start">
                      <h5 className="card-title" style={{ color: "#9E3500" }}>
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text text-sm lh-sm" style={{ color: "#7d7d7d", fontWeight: "300" }}>
                        {product.description.substring(0, 60)}...
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="text-secondary" style={{ fontWeight: "700" }}>${product.price}</p>
                        <p className="text-muted" style={{ fontWeight: "300", fontSize: "12px" }}>Qty: 1</p>
                      </div>
                    </div>
                  </div>
                  {/* second item */}
                  <div className="d-flex">
                    <img
                      className="card-img-top object-fit-contain"
                      src={product.image}
                      alt="Card"
                      height={100}
                    />
                    <div className="card-body text-start">
                      <h5 className="card-title" style={{ color: "#9E3500" }}>
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text text-sm lh-sm" style={{ color: "#7d7d7d", fontWeight: "300" }}>
                        {product.description.substring(0, 60)}...
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="text-secondary" style={{ fontWeight: "700" }}>${product.price}</p>
                        <p className="text-muted" style={{ fontWeight: "300", fontSize: "12px" }}>Qty: 1</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fw-600 d-flex align-items-center justify-content-between text-start pb-3 pl-3 pr-3" style={{ fontWeight: "700", fontSize: "20px" }}>
                  <div className="d-flex align-items-center" style={{ fontSize: "13px", fontWeight: "600" }}><span className="text-muted" style={{ fontWeight: "400", fontSize: "15px", marginRight: "5px" }}>(2 Items)</span> $ {product.price}</div>
                  <div className="d-flex align-items-center" style={{ fontSize: "15px", fontWeight: "700" }}>Order: 3454563</div>

                </div>
              </div>
            </div>

          );
        })}
      </div>

    </>
  );
};

export default OrdersPage;
