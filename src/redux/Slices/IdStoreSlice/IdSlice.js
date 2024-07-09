// redux/Slices/IdStoreSlice/IdSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: [],
};

const initialAirportState = {
  id2: [],
};

const idstoreSlice = createSlice({
  name: "idstore",
  initialState,
  reducers: {
    idstorePush: (state, action) => {
      state.id.push(action.payload);
      console.log(action.payload);
    },
    idstorePop: (state, action) => {
      state.id = state.id.filter(id => id !== action.payload);
    },
  },
});

// Exports all category data like cinema, airports, malls, etc.

const airportIdSlice = createSlice({
  name: "airportId",
  initialState: initialAirportState,
  reducers: {
    airportIdPush: (state, action) => {
      state.id2.push(action.payload);
      console.log(action.payload);
    },
  },
});

// Export actions
export const { idstorePush, idstorePop } = idstoreSlice.actions;
export const { airportIdPush } = airportIdSlice.actions;

// Export reducers
export const idstoreReducer = idstoreSlice.reducer;
export const airportIdReducer = airportIdSlice.reducer;
