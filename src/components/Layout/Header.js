import React, { useState } from "react";
import "./style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Toggler = ({ toggleFlag, setToggleFlag }) => {
  return (
    <div>
      <label
        className={`toggle ${toggleFlag ? "open" : null}`}
        htmlFor="checkbox"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-label="Toggle navigation"
        onClick={() => setToggleFlag(!toggleFlag)}
      >
        <div id="bar1" className={`bars ${toggleFlag ? "open" : null}`} />
        <div id="bar2" className={`bars ${toggleFlag ? "open" : null}`} />
        <div id="bar3" className={`bars ${toggleFlag ? "open" : null}`} />
      </label>
    </div>
  );
};

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button className="login-button" onClick={() => navigate("/login")}>
      <span className="top-key" />
      <span className="text">Login</span>
      <span className="bottom-key-1" />
      <span className="bottom-key-2" />
    </button>
  );
};

const DropdownMenu = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <button className="login-button" onClick={handleLogout}>
      <span className="top-key" />
      <span className="text">Logout</span>
      <span className="bottom-key-1" />
      <span className="bottom-key-2" />
    </button>
  );
};

const NavLinkButton = ({ children, to, active }) => {
  return (
    <li className="nav-item">
      <NavLink
        className={`nav-link mx-lg-2 ${active != null ? "active" : null}`}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

const Header = () => {
  const [toggleFlag, setToggleFlag] = useState(false);
  const [auth, setAuth] = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand me-auto" to="/">
            Logo
          </Link>

          <div
            className="offcanvas offcanvas-end w-100"
            tabIndex={-1}
            id="navbarSupportedContent"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5> */}
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                {/* {!auth?.user ? <LoginButton /> : <DropdownMenu />}
                <hr style={{ height: "1rem" }} /> */}
                <NavLinkButton to="/">Home</NavLinkButton>
                <NavLinkButton to="/about">About</NavLinkButton>
                <NavLinkButton to="/products">Products</NavLinkButton>
                <NavLinkButton to="/contact">Contact</NavLinkButton>
              </ul>
            </div>
          </div>
          {!auth?.user ? <LoginButton /> : <DropdownMenu />}
          <Toggler toggleFlag={toggleFlag} setToggleFlag={setToggleFlag} />
        </div>
      </nav>
    </>
  );
};

export default Header;
