import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import offer1 from "../assets/images/offer1.jpg";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { FaJar } from "react-icons/fa6";
import { GiMasonJar, GiMedicinePills, GiMedicines } from "react-icons/gi";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { CgGym } from "react-icons/cg";
import "./styles/productsStyle.css";

const Products = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Layout title="Products | SSN">
        <section className="products-section gradient-loop">
          <Sidebar
            style={{
              height: "100vh",
              position: "fixed",
              zIndex: 2,
              backgroundColor: "white",
            }}
            collapsed={!isSidebarOpen}
          >
            <Menu>
              <div
                style={{
                  textAlign: "end",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <MenuItem onClick={toggleSidebar}>
                  {isSidebarOpen ? (
                    <IoIosArrowDropleftCircle />
                  ) : (
                    <IoIosArrowDroprightCircle />
                  )}
                </MenuItem>
              </div>

              <MenuItem icon={<CiShop />}>All</MenuItem>
              <MenuItem icon={<FaJar />}>Protein</MenuItem>
              <MenuItem icon={<GiMedicines />}>Vitamins</MenuItem>
              <MenuItem icon={<GiMedicinePills />}>Gainers</MenuItem>
              <MenuItem icon={<GiMasonJar />}>Creatine</MenuItem>
              <MenuItem icon={<CgGym />}>Pre/post workout</MenuItem>
            </Menu>
          </Sidebar>
          <section className="products-container">
            <div className="products-title">
              <span
                className="products-title-content"
                style={{ margin: "20px 20px 20px 20px" }}
              >
                PRODUCTS
              </span>
            </div>
            <div className="products">
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
              <div className="product">
                <img src={offer1} alt="" />
                <p className="product-name">Product Heading</p>
                <span className="price-info" style={{ display: "flex" }}>
                  <h5>&#8377;5000</h5>
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;4999
                  </span>
                </span>
                <button className="add-product">Add to cart</button>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
};

export default Products;
