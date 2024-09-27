import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  articles: [],
  loading: false,
  error: null,
};

// Create the async thunk for fetching data
export const fetchUserData = createAsyncThunk(
  "articles/fetchUserData",
  async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      return jsonData.slice(0, 10);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// Create the slice
const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
        console.log("Fetched data:", action.payload); // Console log here
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error("Error fetching data:", action.error.message); // Console log here
      });
  },
});

export default articleSlice.reducer;
