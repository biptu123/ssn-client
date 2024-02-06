import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Signin from "./pages/auth/Signin";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import Cart from "./pages/Cart";
import AdminRoutes from "./components/Routes/AdminRoutes";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import Categories from "./pages/admin/Categories";
import ShowProduct from "./pages/admin/ShowProduct";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/user" Component={PrivateRoute}>
          <Route path="" Component={Dashboard} />
        </Route>
        <Route path="/admin" Component={AdminRoutes}>
          <Route path="" Component={AdminDashboard} />
          <Route path="add-product" Component={AddProduct} />
          <Route path="show-products" Component={ShowProduct} />
          <Route path="categories" Component={Categories} />
        </Route>
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/products" Component={Products} />
        <Route path="/login" Component={Signin} />
        <Route path="/cart" Component={Cart} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
