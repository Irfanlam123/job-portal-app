// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../src/pages/articles/articlesSlice";
import homeReducer from "../src/pages/home/homeSlice";

const store = configureStore({
  reducer: {
    articles: articleReducer,
    home: homeReducer,
  },
});

export default store;
