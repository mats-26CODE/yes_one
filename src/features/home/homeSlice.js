import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeHeader: '',
  homeIntro: '',
};

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    header(state, action){
      state.homeHeader = action.payload;
    },
    intro(state, action){
      state.homeIntro = action.payload;
    }
  },
});

export const { header, intro } = homeSlice.actions;

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file.
export const selectHomeHeader = (state) => state.home.homeHeader;
export const selectHomeIntro = (state) => state.home.homeIntro;

export default homeSlice.reducer;
