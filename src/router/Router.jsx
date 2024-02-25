import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import ProductSingle from "../pages/shop/ProductSingle";
import Cart from "../pages/shop/Cart";
import CheckOut from "../pages/shop/CheckOut";
import Manage from "../pages/manage/Manage";
import ManageProduct from "../pages/manage/product/ManageProduct";
import ManageCategory from "../pages/manage/category/ManageCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/products/:id",
        element: <ProductSingle />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkOut",
        element: <CheckOut />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/manage",
        element: <Manage />,
        children: [
          {
            path: "/manage",
            element: <ManageProduct />,
          },
          {
            path: "/manage/category",
            element: <ManageCategory />,
          },
        ],
      },
    ],
  },
]);

export default router;
