import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teamHeader: "",
  teamIntro: "",
  teamBrains: {},
  teamTraits: {},
  clients: {},
  clientTreat: "",
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    updateTeamHeader(state, action) {
      state.teamHeader = action.payload;
    },
    updateTeamIntro(state, action) {
      state.teamIntro = action.payload;
    },
    updateTeamBrains(state, action) {
      state.teamBrains = action.payload;
    },
    updateTeamTraits(state, action) {
      state.teamTraits = action.payload;
    },
    updateClients(state, action) {
      state.clients = action.payload;
    },
    updateClientTreat(state, action) {
      state.clientTreat = action.payload;
    },
  },
});

export const {
  updateTeamHeader,
  updateTeamIntro,
  updateTeamBrains,
  updateTeamTraits,
  updateClients,
  updateClientTreat,
} = teamSlice.actions;

export const selectTeamHeader = (state) => state.team.teamHeader;
export const selectTeamIntro = (state) => state.team.teamIntro;
export const selectTeamBrains = (state) => state.team.teamBrains;
export const selectTeamTraits = (state) => state.team.teamTraits;
export const selectClients = (state) => state.team.clients;
export const selectClientTreat = (state) => state.team.clientTreat;

export default teamSlice.reducer;
