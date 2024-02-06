import React, { useCallback, useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import { Modal } from "antd";

const TYPE = {
  UPDATE: "update",
  ADD: "add",
};
const CategoriesWrapper = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;
const CategoryCard = styled.div`
  height: fit-content;
  background-color: #a3aab1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  border-radius: 10px;
`;
const CategoryName = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 500;
  width: 100%;
  margin: 20px 0;
  padding: 5px 20px;
  background-color: #0080ff;
`;
const ActionButtons = styled.div`
  margin: 20px 20px;
  padding: 5px 0;
  display: flex;
  gap: 10px;
`;
const EditButton = styled.button`
  padding: 5px 20px;
  border: none;
  border-radius: 10px;
  background-color: #7862c9;
`;
const DeleteButton = styled.button`
  padding: 5px 20px;
  border: none;
  border-radius: 10px;
  background-color: #e44c4c;
`;
const AddButton = styled.button`
  border: none;
  background-color: #ffb3b3;
  width: 10rem;
  height: 10rem;
  padding: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: calc(50% - 5px);
    left: 20%;
    right: 20%;
    height: 10px;
    transition: 0.5s ease-in-out;
    background-color: #ffffff;
  }
  &::after {
    position: absolute;
    content: "";
    left: calc(50% - 5px);
    top: 20%;
    bottom: 20%;
    width: 10px;
    transition: 0.5s ease-in-out;
    background-color: #ffffff;
  }
  &:hover::before {
    left: 10%;
    right: 10%;
    transition: 0.5s ease-in-out;
  }
  &:hover::after {
    top: 10%;
    bottom: 10%;
    transition: 0.5s ease-in-out;
  }
`;

const NameInputForm = styled.form`
  margin-top: 30px;
  width: 100%;
  display: flex;
  gap: 20px;
`;
const NameInput = styled.input`
  width: 70%;
  border-radius: 20px;
  padding: 10px;
`;
const SubmitButton = styled.button`
  padding: 5px 20px;
  border-radius: 10px;
  background-color: #1e8a2f;
  border-color: #004000;
  text-align: center;
  font-size: larger;
  color: #ffff;
  font-weight: bolder;
`;

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [auth] = useAuth();

  const [name, setName] = useState(null);

  const [visible, setvisible] = useState(false);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category`
      );

      if (response.data.success) {
        setCategories(response.data.categories);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/${_id}`,
        {
          headers: {
            Authorization: `${auth?.token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        getCategories();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    if (type === TYPE.ADD) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/category`,
          { name },
          {
            headers: {
              Authorization: `${auth?.token}`,
            },
          }
        );

        if (response.data.success) {
          toast.success(response.data.message);
          setvisible(false);
          getCategories();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    } else {
      const { _id } = type;
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_API}/api/v1/category/${_id}`,
          { name },
          {
            headers: {
              Authorization: `${auth?.token}`,
            },
          }
        );

        if (response.data.success) {
          toast.success(response.data.message);
          setvisible(false);
          getCategories();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <AdminLayout title="Admin | Categories">
        <h1 className="text-end me-4 my-2">Categories</h1>
        <CategoriesWrapper>
          {categories &&
            categories.map(({ _id, name }) => (
              <CategoryCard key={_id}>
                <CategoryName>{name}</CategoryName>
                <ActionButtons>
                  <EditButton
                    onClick={() => {
                      setName(name);
                      setvisible({ _id });
                    }}
                  >
                    Edit
                  </EditButton>
                  <DeleteButton onClick={() => handleDelete(_id)}>
                    Delete
                  </DeleteButton>
                </ActionButtons>
              </CategoryCard>
            ))}
          <AddButton
            onClick={() => {
              setName("");
              setvisible(TYPE.ADD);
            }}
          ></AddButton>
        </CategoriesWrapper>
        <Modal onCancel={() => setvisible(false)} footer={null} open={visible}>
          <NameInputForm onSubmit={(e) => handleSubmit(e, visible)}>
            <NameInput value={name} onChange={(e) => setName(e.target.value)} />
            <SubmitButton type="submit">submit</SubmitButton>
          </NameInputForm>
        </Modal>
      </AdminLayout>
    </>
  );
};

export default Categories;
