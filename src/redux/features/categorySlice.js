import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getACategory } from "../../services/category/categoryApi";

export const fetchACategory = createAsyncThunk(
  "category/fetchACategory",
  async (_id) => {
    const category = await getACategory(_id);
    return category;
  },
);

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: {},
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchACategory.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchACategory.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(fetchACategory.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default categorySlice.reducer;
