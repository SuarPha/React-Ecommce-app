import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductSinglePage from "./pages/ProductSinglePage";
import CheckoutCart from "./pages/CheckoutCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/ProductSinglePage" element={<ProductSinglePage />} />
          <Route path="/cart" element={<CheckoutCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
