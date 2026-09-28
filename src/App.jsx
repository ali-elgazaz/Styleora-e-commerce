import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Products />} />
        <Route path="/shop/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
