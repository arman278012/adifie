import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { loadState, saveState } from "./localStorageUtils";

// Load the initial state from localStorage
const preloadedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState, // Set the initial state from localStorage
});

// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
