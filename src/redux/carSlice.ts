import { createSlice } from "@reduxjs/toolkit";
import { Car, dashBoardData } from "../types/shared";

type state = {
  cars: Car[];
  carTypeFilter: string;
  transmissionTypeFilter: string;
  filterdCars: Car[];
  dashBoard: dashBoardData[];
  mode: string;
};
const initialState: state = {
  cars: [],
  carTypeFilter: "",
  transmissionTypeFilter: "",
  filterdCars: [],
  dashBoard: [],
  mode: "booking",
};

export const carSlice = createSlice({
  name: "carSlice",
  initialState,
  reducers: {
    setAllCars: (state, action) => {
      let { cars } = action.payload;
      if (cars.length) {
        state.cars = cars;
        state.filterdCars = cars;
      }
    },
    setCarTypeFilter: (state, action) => {
      let { type } = action.payload;
      state.carTypeFilter = type;
    },
    setTransmissionTypeFilter: (state, action) => {
      let { type } = action.payload;
      state.transmissionTypeFilter = type;
    },
    filterAllCars: (state, action) => {
      if (state.carTypeFilter && state.transmissionTypeFilter) {
        state.filterdCars = state.cars.filter(
          (c) =>
            c.carType === state.carTypeFilter &&
            c.transmission === state.transmissionTypeFilter
        );
      } else if (state.carTypeFilter || state.transmissionTypeFilter) {
        state.filterdCars = state.cars.filter(
          (c) =>
            c.carType === state.carTypeFilter ||
            c.transmission === state.transmissionTypeFilter
        );
      } else {
        state.filterdCars = state.cars;
      }
    },
    setDashBoard: (state, action) => {
      state.dashBoard = action.payload?.dashboard;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});
export const {
  setAllCars,
  filterAllCars,
  setCarTypeFilter,
  setTransmissionTypeFilter,
  setDashBoard,
  setMode,
} = carSlice.actions;

export default carSlice.reducer;
