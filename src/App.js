import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/user" Component={PrivateRoute}>
          <Route path="dashboard" Component={Dashboard} />
        </Route>
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/products" Component={Products} />
        <Route path="/login" Component={Signin} />
        <Route path="/signup" Component={Signup} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
