import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../../services/category/categoryApi";

export const fetchAllCategories = createAsyncThunk(
  "categories/fetchAllCategories",
  async () => {
    const categories = await getAllCategories();
    return categories;
  },
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default categoriesSlice.reducer;
