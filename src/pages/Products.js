import React from "react";
import Layout from "../components/Layout/Layout";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const Products = () => {
  return (
    <>
      <Layout title="Products | SSN">
        <section className="">
          <Sidebar>
            <Menu>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
            </Menu>
          </Sidebar>
        </section>
      </Layout>
    </>
  );
};

export default Products;
