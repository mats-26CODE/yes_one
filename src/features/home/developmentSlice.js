import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  devHeader: "",
  devIntro: "",
  devQuote: "",
  devQuoteImage: "",
  devQuotee: "",
  devSectionOneHeader: "",
  devSectionOneImage: "",
  devSectionOneIntro: "",

  devSectionTwoHeader: "",
  devSectionTwoImage: "",
  devSectionTwoIntro: "",

  devSectionThreeHeader: "",
  devSectionThreeImage: "",
  devSectionThreeIntro: "",

  devSectionFourHeader: "",
  devSectionFourImage: "",
  devSectionFourIntro: "",
};

const developmentSlice = createSlice({
  name: "development",
  initialState,
  reducers: {
    updateHeader(state, action) {
      state.devHeader = action.payload;
    },
    updateIntro(state, action) {
      state.devIntro = action.payload;
    },
    updateQuote(state, action) {
      state.devQuote = action.payload;
    },
    updateQuoteImage(state, action) {
      state.devQuoteImage = action.payload;
    },
    updateQuotee(state, action) {
      state.devQuotee = action.payload;
    },

    updateSectionOneHeader(state, action) {
      state.devSectionOneHeader = action.payload;
    },
    updateSectionOneIntro(state, action) {
      state.devSectionOneIntro = action.payload;
    },
    updateSectionOneImage(state, action) {
      state.devSectionOneImage = action.payload;
    },

    updateSectionTwoHeader(state, action) {
      state.devSectionTwoHeader = action.payload;
    },
    updateSectionTwoIntro(state, action) {
      state.devSectionTwoIntro = action.payload;
    },
    updateSectionTwoImage(state, action) {
      state.devSectionTwoImage = action.payload;
    },

    updateSectionThreeHeader(state, action) {
      state.devSectionThreeHeader = action.payload;
    },
    updateSectionThreeIntro(state, action) {
      state.devSectionThreeIntro = action.payload;
    },
    updateSectionThreeImage(state, action) {
      state.devSectionThreeImage = action.payload;
    },

    updateSectionFourHeader(state, action) {
      state.devSectionFourHeader = action.payload;
    },
    updateSectionFourIntro(state, action) {
      state.devSectionFourIntro = action.payload;
    },
    updateSectionFourImage(state, action) {
      state.devSectionFourImage = action.payload;
    },
  },
});

export const {
  updateHeader,
  updateIntro,
  updateQuoteImage,
  updateQuotee,
  updateQuote,
  updateSectionOneHeader,
  updateSectionOneIntro,
  updateSectionOneImage,
  updateSectionTwo,
  updateSectionThree,
  updateSectionFour,
  updateSectionTwoHeader,
  updateSectionTwoIntro,
  updateSectionTwoImage,
  updateSectionThreeHeader,
  updateSectionThreeIntro,
  updateSectionThreeImage,
  updateSectionFourHeader,
  updateSectionFourIntro,
  updateSectionFourImage,
} = developmentSlice.actions;

export const selectDevHeader = (state) => state.development.devHeader;
export const selectDevIntro = (state) => state.development.devIntro;
export const selectDevQuote = (state) => state.development.devQuote;
export const selectDevQuotee = (state) => state.development.devQuotee;
export const selectDevQuoteImage = (state) => state.development.devQuoteImage;
export const selectDevSectionOneHeader = (state) =>
  state.development.devSectionOneHeader;
export const selectDevSectionOneIntro = (state) =>
  state.development.devSectionOneIntro;
export const selectDevSectionOneImage = (state) =>
  state.development.devSectionOneImage;

export const selectDevSectionTwoHeader = (state) =>
  state.development.devSectionTwoHeader;
export const selectDevSectionTwoIntro = (state) =>
  state.development.devSectionTwoIntro;
export const selectDevSectionTwoImage = (state) =>
  state.development.devSectionTwoImage;

export const selectDevSectionThreeHeader = (state) =>
  state.development.devSectionThreeHeader;
export const selectDevSectionThreeIntro = (state) =>
  state.development.devSectionThreeIntro;
export const selectDevSectionThreeImage = (state) =>
  state.development.devSectionThreeImage;

export const selectDevSectionFourHeader = (state) =>
  state.development.devSectionFourHeader;
export const selectDevSectionFourIntro = (state) =>
  state.development.devSectionFourIntro;
export const selectDevSectionFourImage = (state) =>
  state.development.devSectionFourImage;

export default developmentSlice.reducer;
