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

const Cart = () => {
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
                      3 items
                    </div>
                  </div>
                </Title>
                <div className="row border-top">
                  <Main className="row align-items-center">
                    <div className="col-2">
                      <img
                        className="img-fluid"
                        src="https://i.imgur.com/1GrakTl.jpg"
                        style={{ width: "3.5rem" }}
                      />
                    </div>
                    <div className="col">
                      <div className="row text-muted">Shirt</div>
                      <div className="row">Cotton T-shirt</div>
                    </div>
                    <div className="col">
                      <A>-</A>
                      <span className="border">1</span>
                      <A>+</A>
                    </div>
                    <div className="col">
                      € 44.00 <Close>Remove</Close>
                    </div>
                  </Main>
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
