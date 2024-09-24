import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    sectorName: "Information Technology",
    numberOfJobs: 2500,
  },
  {
    id: 2,
    sectorName: "Healthcare",
    numberOfJobs: 1800,
  },
  {
    id: 3,
    sectorName: "Finance",
    numberOfJobs: 1200,
  },
  {
    id: 4,
    sectorName: "Education",
    numberOfJobs: 900,
  },
  {
    id: 5,
    sectorName: "Construction",
    numberOfJobs: 1500,
  },
  {
    id: 6,
    sectorName: "Retail",
    numberOfJobs: 2000,
  },
  {
    id: 7,
    sectorName: "Manufacturing",
    numberOfJobs: 1300,
  },
  {
    id: 8,
    sectorName: "Hospitality",
    numberOfJobs: 800,
  },
  {
    id: 9,
    sectorName: "Transportation",
    numberOfJobs: 1100,
  },
  {
    id: 10,
    sectorName: "Telecommunications",
    numberOfJobs: 600,
  },
];

const homeSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
