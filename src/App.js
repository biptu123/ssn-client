import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
