import { configureStore, createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null,
  },
  reducers: {
    setWeather(state, action) {
      state.weather = action.payload;
    },
  },
});

const citySlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
  },
  reducers: {
    setCities(state, action) {
      state.cities.push(action.payload);
    },
  },
});

export const weatherActions = weatherSlice.actions;
export const cityActions = citySlice.actions;

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    cities: citySlice.reducer,
  },
});
