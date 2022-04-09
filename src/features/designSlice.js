import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  designHeader: "",
  designIntro: "",
  designPrincipleImage: "",
  designPrinciples: {},
  designProductsHeader: "",
  designProducts: {},
  designWorkImages: {},
};

const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    updateDesignHeader(state, action) {
      state.designHeader = action.payload;
    },
    updateDesignIntro(state, action) {
      state.designIntro = action.payload;
    },
    updateDesignPrincipleImage(state, action) {
      state.designPrincipleImage = action.payload;
    },
    updateDesignPrinciples(state, action) {
      state.designPrinciples = action.payload;
    },
    updateDesignProductsHeader(state, action) {
      state.designProductsHeader = action.payload;
    },
    updateDesignProducts(state, action) {
      state.designProducts = action.payload;
    },
    updateDesignWorkImages(state, action) {
      state.designWorkImages = action.payload;
    },
  },
});

export const {
  updateDesignHeader,
  updateDesignIntro,
  updateDesignPrincipleImage,
  updateDesignPrinciples,
  updateDesignProductsHeader,
  updateDesignProducts,
  updateDesignWorkImages,
} = designSlice.actions;

export const selectDesignHeader = (state) => state.design.designHeader;
export const selectDesignIntro = (state) => state.design.designIntro;
export const selectDesignPrincipleImage = (state) =>
  state.design.designPrincipleImage;
export const selectDesignPrinciples = (state) => state.design.designPrinciples;
export const selectDesignProductsHeader = (state) =>
  state.design.designProductsHeader;
export const selectDesignProducts = (state) => state.design.designProducts;
export const selectDesignWorkImages = (state) => state.design.designWorkImages;

export default designSlice.reducer;
