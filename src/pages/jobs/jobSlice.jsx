import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import Jobs from "./Jobs";

// Initial state
const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

export const fetchJobData = createAsyncThunk("jobs/fetchJobData", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    return jsonData.slice(0, 10);
  } catch (error) {
    return Promise.reject(error.message);
  }
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobData.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
        console.log("Fetched Data:", action.payload);
      })
      .addCase(fetchJobData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error("Error fteching data:", action.error.message);
      });
  },
});
export default jobsSlice.reducer;
