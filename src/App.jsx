import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="w-full h-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Product />} />
        <Route path="/details" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
