import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const Home = () => {
  const [auth] = useAuth();
  return (
    <>
      <Layout title="Home | SSN">
        <section className="hero-section">
          <h1>Home</h1>
          <p>Home</p>
          <pre style={{ color: "#FFF" }}>{JSON.stringify(auth, null, 4)}</pre>
        </section>
      </Layout>
    </>
  );
};

export default Home;
