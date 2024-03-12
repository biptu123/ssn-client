import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import {
  CartContainer,
  ProgressBar,
  ProgressStation,
} from "./styles/Cart.styled";
import { Modal } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth";
import styled from "styled-components";

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AddAddress = styled.button`
  width: 200px;
`;
const Checkout = () => {
  const [visible, setvisible] = useState(true);

  const [address, setaddress] = useState({
    name: null,
    email: null,
    pincode: null,
    state: null,
    street: null,
    district: null,
    locality: null,
  });

  const [auth] = useAuth();

  const addAddress = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user/add-address`,
        { address },
        {
          headers: {
            Authorization: `${auth?.token}`,
          },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  const handleChange = (e) => {
    setaddress({ ...address, [e.target.id]: e.target.value });
  };

  const handlePinChange = async (e) => {
    const pincode = e.target.value;
    setaddress((prevAddress) => ({ ...prevAddress, [e.target.id]: pincode }));

    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      if (response?.data && Array.isArray(response.data)) {
        const firstResult = response.data[0];
        if (
          firstResult.Status === "Success" &&
          Array.isArray(firstResult.PostOffice)
        ) {
          const state = firstResult.PostOffice[0].State;
          const district = firstResult.PostOffice[0].District;
          setaddress((prevAddress) => ({ ...prevAddress, state, district }));
          console.log(address);
        }
      }
    } catch (error) {
      // Handle request errors
      console.error("Error fetching pincode data:", error);
    }
  };

  return (
    <Layout title="Checkout | SSN">
      <CartContainer>
        <ProgressBar>
          <ProgressStation name="Cart">1</ProgressStation>
          <ProgressStation name="Add address" active>
            2
          </ProgressStation>
          <ProgressStation name="Payment">3</ProgressStation>
        </ProgressBar>

        <AddressWrapper>
          <AddAddress
            className="btn btn-outline-secondary"
            onClick={() => setvisible(true)}
          >
            + Add new address
          </AddAddress>
        </AddressWrapper>
      </CartContainer>
      <Modal onCancel={() => setvisible(false)} open={visible} footer={null}>
        <form className="container-fluid" onSubmit={addAddress}>
          <h6 className="mb-5">Add new address</h6>
          <div className="form-outline mb-4 form-floating">
            <input
              type="text"
              id="name"
              className="form-control form-control-sm"
              placeholder="Enter full name"
              value={address.name}
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="form3Example3">
              Enter full name *
            </label>
          </div>
          <div className="form-outline mb-4 form-floating">
            <input
              type="email"
              id="email"
              className="form-control form-control-sm"
              placeholder="Enter email*"
              value={address.email}
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="form3Example3">
              Enter email *
            </label>
          </div>
          <div className="form-outline mb-4 form-floating">
            <input
              type="text"
              id="street"
              className="form-control form-control-sm"
              placeholder="Enter address*"
              value={address.street}
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="form3Example3">
              Address (House No. Building, Street Area) **
            </label>
          </div>
          <div className="d-flex justify-content-between">
            <div className="form-outline mb-4 form-floating">
              <input
                type="text"
                id="locality"
                className="form-control form-control-sm"
                placeholder="locality"
                value={address.locality}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="form3Example3">
                Locality / Town
              </label>
            </div>
            <div className="form-outline mb-4 form-floating">
              <input
                type="text"
                id="pincode"
                className="form-control form-control-sm"
                placeholder="pincode*"
                value={address.pincode}
                onChange={handlePinChange}
              />
              <label className="form-label" htmlFor="form3Example3">
                Pincode **
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="form-outline mb-4 form-floating">
              <input
                type="text"
                id="district"
                className="form-control form-control-sm"
                placeholder="city"
                value={address.district}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="form3Example3">
                City / District *
              </label>
            </div>
            <div className="form-outline mb-4 form-floating">
              <input
                type="text"
                id="state"
                className="form-control form-control-sm"
                placeholder="state*"
                value={address.state}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="form3Example3">
                State **
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-warning">
            Save and payment
          </button>
        </form>
      </Modal>
    </Layout>
  );
};

export default Checkout;
