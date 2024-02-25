import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import store from "./redux/store";
import { Provider } from "react-redux";
import { fetchProducts } from "./redux/features/productsSlice";
import { getCartTotal } from "./redux/features/cart/cartSlice";
import { fetchAllCategories } from "./redux/features/categoriesSlice";

store.dispatch(fetchProducts());
store.dispatch(fetchAllCategories());
store.dispatch(getCartTotal());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
