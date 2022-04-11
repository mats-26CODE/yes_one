import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  careerHeader: "",
  careerIntro: "",
  careerJobs: {},
  careerJoinHeader: "",
  careerLoveOne: "",
  careerLoveTwo: "",
  careerLoveThree: "",
  careerSpotHeader: "",
};

const careerSlice = createSlice({
  name: "career",
  initialState,
  reducers: {
    updateCareerHeader(state, action) {
      state.careerHeader = action.payload;
    },
    updateCareerIntro(state, action) {
      state.careerIntro = action.payload;
    },
    updateCareerJobs(state, action) {
      state.careerJobs = action.payload;
    },
    updateCareerJoinHeader(state, action) {
      state.careerJoinHeader = action.payload;
    },
    updateCareerLoveOne(state, action) {
      state.careerLoveOne = action.payload;
    },
    updateCareerLoveTwo(state, action) {
      state.careerLoveTwo = action.payload;
    },
    updateCareerLoveThree(state, action) {
      state.careerLoveThree = action.payload;
    },
    updateCareerSpotHeader(state, action) {
      state.careerSpotHeader = action.payload;
    },
  },
});

export const {
  updateCareerHeader,
  updateCareerIntro,
  updateCareerJobs,
  updateCareerJoinHeader,
  updateCareerLoveOne,
  updateCareerLoveTwo,
  updateCareerLoveThree,
  updateCareerSpotHeader,
} = careerSlice.actions;

export const selectCareerHeader = (state) => state.career.careerHeader;
export const selectCareerIntro = (state) => state.career.careerIntro;
export const selectCareerJobs = (state) => state.career.careerJobs;
export const selectCareerJoinHeader = (state) => state.career.careerJoinHeader;
export const selectCareerLoveOne = (state) => state.career.careerLoveOne;
export const selectCareerLoveTwo = (state) => state.career.careerLoveTwo;
export const selectCareerLoveThree = (state) => state.career.careerLoveThree;
export const selectCareerSpotHeader = (state) => state.career.careerSpotHeader;

export default careerSlice.reducer;
