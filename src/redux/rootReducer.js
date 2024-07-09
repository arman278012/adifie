// redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./Slices/AddTocart/AddTocartSlice";
import { idstoreReducer, airportIdReducer } from "./Slices/IdStoreSlice/IdSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  idstore: idstoreReducer,
  airportId: airportIdReducer,
});

export default rootReducer;
