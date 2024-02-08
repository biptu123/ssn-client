import React from "react";
import Layout from "../components/Layout/Layout";
import {
  A,
  Card,
  CartContainer,
  Close,
  Input,
  Main,
  Select,
  ShoppingCart,
  Summary,
  Title,
  Button,
} from "./styles/Cart.styled.js";
import { useCart } from "../context/cart.js";

const Cart = () => {
  const { cart, removeFromCart, addMore, removeMore } = useCart();

  return (
    <>
      <Layout title="Contact us | SSN">
        <CartContainer>
          <Card className="card">
            <div className="row">
              <ShoppingCart className="col-md-8 cart">
                <Title>
                  <div className="row">
                    <div className="col">
                      <h4>
                        <b>Shopping Cart</b>
                      </h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">
                      {cart && cart.length ? `${cart.length} items` : ""}
                    </div>
                  </div>
                </Title>
                <div className="row border-top">
                  {cart && cart.length ? (
                    cart.map((product, index) => (
                      <Main
                        className="row align-items-center"
                        key={product._id}
                      >
                        <div className="col-2">
                          <img
                            alt={`product image ${product._id}`}
                            className="img-fluid"
                            src={product.images[0].url}
                            style={{ width: "3.5rem" }}
                          />
                        </div>
                        <div className="col">
                          <div className="row text-muted">
                            {product?.category?.name}
                          </div>
                          <div className="row">{product.name}</div>
                          <div className="row">{product.quantity}</div>
                        </div>
                        <div className="col">
                          <A onClick={() => removeMore(product)}>-</A>
                          <b className="border">{product.noOfItems}</b>
                          <A onClick={() => addMore(product)}>+</A>
                        </div>
                        <div className="col" style={{ marginTop: "20px" }}>
                          &#8377; {product.noOfItems * product.price}
                          <Close onClick={() => removeFromCart(product)}>
                            Remove
                          </Close>
                        </div>
                      </Main>
                    ))
                  ) : (
                    <Main className="row align-items-center">
                      <h4 className="text-center">Cart Is Empty</h4>
                    </Main>
                  )}
                </div>
                <div className="row border-top"></div>

                <div className="back-to-shop" style={{ marginTop: "4.5rem" }}>
                  <a href="#">←</a>
                  <span className="text-muted">Back to shop</span>
                </div>
              </ShoppingCart>
              <Summary className="col-md-4 summary">
                <div>
                  <h5 style={{ marginTop: "4vh" }}>
                    <b>Summary</b>
                  </h5>
                </div>
                <hr style={{ marginTop: "1.25rem" }} />
                <div className="row">
                  <div className="col" style={{ paddingLeft: 0 }}>
                    ITEMS 3
                  </div>
                  <div className="col text-right">€ 132.00</div>
                </div>
                <form style={{ padding: "2vh 0" }}>
                  <p>SHIPPING</p>
                  <Select>
                    <option className="text-muted">
                      Standard-Delivery- €5.00
                    </option>
                  </Select>
                  <p>GIVE CODE</p>
                  <Input id="code" placeholder="Enter your code" />
                </form>
                <div
                  className="row"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,.1)",
                    padding: "2vh 0",
                  }}
                >
                  <div className="col">TOTAL PRICE</div>
                  <div className="col text-right">€ 137.00</div>
                </div>
                <Button className="btn">CHECKOUT</Button>
              </Summary>
            </div>
          </Card>
        </CartContainer>
      </Layout>
    </>
  );
};

export default Cart;
