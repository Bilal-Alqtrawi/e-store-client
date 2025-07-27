import { useEffect, useState } from "react";

import { getCategories } from "./services/data-services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFoud";
import Category from "./components/Category";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/OrderConfirmation";
import SearchResults from "./components/SearchResults";


function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });

  useEffect(function () {
    async function fetchData() {
      const resObj = await getCategories();
      setCategories(resObj);
    }

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout categories={categories} />}>
            <Route index element={<Home />} />

            <Route path="basket" element={<Basket />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="products/:productId" element={<ProductDetails />} />
            <Route path="categories/:categoryId" element={<Category />} />
            <Route path="orderconfirmation" element={<OrderConfirmation />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
