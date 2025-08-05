import { useEffect, useState } from "react";

import { getCategories } from "./services/data-services";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFoud";
import Category from "./components/Category";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/OrderConfirmation";
import SearchResults from "./components/SearchResults";
import Products from "./components/Products";
import MyOrders from "./pages/MyOrders";

function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);

        const resObj = await getCategories();
        setCategories(resObj);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                categories={categories}
                loading={isLoading}
                error={error}
              />
            }
          >
            <Route path="home" element={<Home />} />
            <Route index element={<Navigate to="/home" replace />} />

            <Route path="basket" element={<Basket />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<ProductDetails />} />
            <Route path="categories/:categoryId" element={<Category />} />
            <Route path="orderconfirmation" element={<OrderConfirmation />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="myorders" element={<MyOrders />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
