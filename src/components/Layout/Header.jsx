import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../../assets/images/logo.jpg';

const Toggler = ({ toggleFlag, setToggleFlag }) => {
  return (
    <div>
      <label
        className={`toggle ${toggleFlag ? "open" : null}`}
        htmlFor="checkbox"
        onClick={()=>setToggleFlag(!toggleFlag)}
      >
        <div id="bar1" className={`bars ${toggleFlag ? "open" : null}`} />
        <div id="bar2" className={`bars ${toggleFlag ? "open" : null}`} />
        <div id="bar3" className={`bars ${toggleFlag ? "open" : null}`} />
      </label>
    </div>
  );
};

const LoginButton = ({ className, onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
    if (onClick) onClick();
  };

  return (
    <button className={`${className} login-button`} onClick={handleClick}>
      <span className="top-key" />
      <span className="text">Login</span>
      <span className="bottom-key-1" />
      <span className="bottom-key-2" />
    </button>
  );
};

const CartButton = () => {
  const navigate = useNavigate();
  return (
    <button data-quantity="10" className="btn-cart">
      <FaShoppingCart className="icon-cart"/>
      <span className="quantity"></span>
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

const NavLinkButton = ({ children, to, active, onClick }) => {
  return (
    <Nav.Item>
      <Nav.Link
        as={NavLink}
        to={to}
        className={`nav-link mx-lg-2 ${active != null ? "active" : null}`}
        onClick={onClick}
      >
        {children}
      </Nav.Link>
    </Nav.Item>
  );
};

// ... (previous imports)

const Header = () => {
  const [toggleFlag, setToggleFlag] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Close the off-canvas menu
    setToggleFlag(false);
  };

  return (
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img src={logo} className="img-fluid logo" alt="Logo"/>
      </Navbar.Brand>


      <Offcanvas
        show={toggleFlag}
        onHide={() => setToggleFlag(false)}
        placement="end" // Use 'start' to open from the left
      >
        <Offcanvas.Header>
          <Toggler toggleFlag={toggleFlag} setToggleFlag={setToggleFlag} />
        </Offcanvas.Header>
        
        <Offcanvas.Body>
          <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
            <NavLinkButton to="/" onClick={handleNavigation}>
              Home
            </NavLinkButton>
            <NavLinkButton to="/about" onClick={handleNavigation}>
              About
            </NavLinkButton>
            <NavLinkButton to="/products" onClick={handleNavigation}>
              Products
            </NavLinkButton>
            <NavLinkButton to="/contact" onClick={handleNavigation}>
              Contact
            </NavLinkButton>
            {!auth?.user ? (
              <LoginButton className="m-login" onClick={handleNavigation} />
            ) : (
              <DropdownMenu />
            )}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Navbar.Collapse id="navbarNav" className="justify-content-end">
        <Nav className="flex-grow-1 pe-3">
          <NavLinkButton to="/" onClick={handleNavigation}>
            Home
          </NavLinkButton>
          <NavLinkButton to="/about" onClick={handleNavigation}>
            About
          </NavLinkButton>
          <NavLinkButton to="/products" onClick={handleNavigation}>
            Products
          </NavLinkButton>
          <NavLinkButton to="/contact" onClick={handleNavigation}>
            Contact
          </NavLinkButton>
          {!auth?.user ? (
            <LoginButton className="m-login" onClick={handleNavigation} />
          ) : (
            <DropdownMenu />
          )}
        </Nav>
      </Navbar.Collapse>

      <Nav className="d-flex flex-row justify-content-end">
        {!auth?.user ? (
          <LoginButton className="d-login" onClick={handleNavigation} />
        ) : (
          <DropdownMenu />
        )}
        <CartButton />
        <Toggler toggleFlag={toggleFlag} setToggleFlag={setToggleFlag} />
      </Nav>
    </Navbar>
  );
};

export default Header;


