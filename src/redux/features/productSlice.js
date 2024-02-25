import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAProduct } from "../../services/product/productApi";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (_id) => {
    const product = await getAProduct(_id);
    return product;
  },
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.product = {};
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.product = {};
      });
  },
});

export default productSlice.reducer;
