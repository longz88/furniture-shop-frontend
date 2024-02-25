import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/product/productApi";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getAllProducts();
    return products;
  },
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.products = [];
      });
  },
});

export default productsSlice.reducer;
