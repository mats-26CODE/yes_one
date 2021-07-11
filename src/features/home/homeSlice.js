import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeHeader: "",
  homeProducts: {},
  sectionOneHeader: "",
  sectionOneIntro: "",
  sectionOneImage: "",
  sectionTwoHeader: "",
  sectionTwoIntro: "",
  sectionTwoImage: "",
  sectionThreeHeader: "",
  sectionThreeIntro: "",
  sectionThreeImage: "",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    header(state, action) {
      state.homeHeader = action.payload;
    },
    products(state, action) {
      state.homeProducts = action.payload;
    },
    secOneHeader(state, action) {
      state.sectionOneHeader = action.payload;
    },
    secOneIntro(state, action) {
      state.sectionOneIntro = action.payload;
    },
    secOneImage(state, action) {
      state.sectionOneImage = action.payload;
    },
    secTwoHeader(state, action) {
      state.sectionTwoHeader = action.payload;
    },
    secTwoIntro(state, action) {
      state.sectionTwoIntro = action.payload;
    },
    secTwoImage(state, action) {
      state.sectionTwoImage = action.payload;
    },
  },
});

export const {
  header,
  products,
  secOneHeader,
  secOneIntro,
  secOneImage,
  secTwoHeader,
  secTwoIntro,
  secTwoImage,
} = homeSlice.actions;

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file.
export const selectHomeHeader = (state) => state.home.homeHeader;
export const selectHomeProducts = (state) => state.home.homeProducts;
export const selectSectionOneHeader = (state) => state.home.sectionOneHeader;
export const selectSectionOneIntro = (state) => state.home.sectionOneIntro;
export const selectSectionOneImage = (state) => state.home.sectionOneImage;
export const selectSectionTwoHeader = (state) => state.home.sectionTwoHeader;
export const selectSectionTwoIntro = (state) => state.home.sectionTwoIntro;
export const selectSectionTwoImage = (state) => state.home.sectionTwoImage;

export default homeSlice.reducer;
