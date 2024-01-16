import React, { useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../context/auth";
import Loader from "../../components/Loader";

const Signin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const rememberRef = useRef(false);

  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          phone,
          password,
        }
      );

      setTimeout(() => {
        setLoading(false);
      }, 200);

      if (response.data.success) {
        toast.success(response.data.message);
        // After Login success
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.removeItem("auth");
        if (rememberRef.current.checked) {
          localStorage.setItem("auth", JSON.stringify(response.data));
        }
        setTimeout(() => {
          navigate(location.state || "/");
        }, 1000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  };

  return (
    <>
      <Loader loading={loading} />

      <Layout title="Signin | SSN">
        <section className="login-form">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={handleSubmit}>
                  {/* Email input */}
                  <div className="form-outline mb-4 form-floating">
                    <input
                      type="text"
                      id="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Phone number
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-3 form-floating">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Checkbox */}
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="form2Example3"
                        ref={rememberRef}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link to="/forgot-password" className="text-body">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                      }}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="link-danger">
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Signin;
