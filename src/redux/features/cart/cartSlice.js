/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isShow: false,
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    listProducts: localStorage.getItem("listProducts")
      ? JSON.parse(localStorage.getItem("listProducts"))
      : [],
  },
  reducers: {
    showCart: (state) => {
      state.isShow = !state.isShow;
    },

    addProductToCart: (state, action) => {
      const productIndex = state.listProducts.findIndex(
        (item) => item._id === action.payload._id,
      );

      if (productIndex >= 0) {
        state.listProducts[productIndex].cartQuantity += 1;
        toast.info(`Đã thêm ${action.payload.namePro} vào giỏ hàng`);
      } else {
        state.listProducts = [
          ...state.listProducts,
          { ...action.payload, cartQuantity: 1 },
        ];
        toast.success(`Đã thêm ${action.payload.namePro} vào giỏ hàng`);

        localStorage.setItem(
          "listProducts",
          JSON.stringify(state.listProducts),
        );
      }
    },
    deleteProductInCart: (state, action) => {
      state.listProducts = state.listProducts.splice(action.payload, 1);
    },
    removeProductInCart: (state, action) => {
      const nextProduct = state.listProducts.filter(
        (product) => product._id !== action.payload._id,
      );

      state.listProducts = nextProduct;
      toast.error(`Đã xóa ${action.payload.namePro} khỏi giỏ hàng`);
      localStorage.setItem("listProducts", JSON.stringify(state.listProducts));
    },
    decreaseProductInCart: (state, action) => {
      const productIndex = state.listProducts.findIndex(
        (product) => product._id === action.payload._id,
      );

      if (state.listProducts[productIndex].cartQuantity > 1) {
        state.listProducts[productIndex].cartQuantity -= 1;
        toast.info(`Đã giảm ${action.payload.namePro} từ giỏ hàng`);
      } else if (state.listProducts[productIndex].cartQuantity === 1) {
        const nextListProducts = state.listProducts.filter(
          (product) => product._id !== action.payload._id,
        );

        state.listProducts = nextListProducts;
        toast.error(`Đã xóa ${action.payload.namePro} từ giỏ hàng`);
        localStorage.setItem(
          "listProducts",
          JSON.stringify(state.listProducts),
        );
      }
    },
    clearCart: (state) => {
      state.listProducts = [];
      toast.info(`Đã dọn sạch giỏ hàng`);
      localStorage.setItem("listProducts", JSON.stringify(state.listProducts));
    },
    getCartTotal: (state) => {
      let { total, quantity } = state.listProducts.reduce(
        (cartTotal, cartItem) => {
          const { priceNew, cartQuantity } = cartItem;
          const itemTotal = priceNew * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  showCart,
  addProductToCart,
  deleteProductInCart,
  removeProductInCart,
  decreaseProductInCart,
  clearCart,
  getCartTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
