"use client";
const { configureStore } = require("@reduxjs/toolkit");
import addProjectReducer from "./AddNewProjectSlice/addProjectSlice";
import addresourcesSlice from "./AddresourcesSlice/addresourcesSlice";
// import addResourceReduser from "./AddresourcesSlice/addresourcesSlice";


// import todoReducer from './todoSlice'
export const store = configureStore({
  reducer: {
    addProject: addProjectReducer,
    addResources: addresourcesSlice,
  
  },
});
