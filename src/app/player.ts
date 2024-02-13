import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "./store";
type playerState = object[];

const initialState: playerState = [];
export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    getPlayer: (state, action: PayloadAction<object>) => {
      state.push(action.payload);
    },
  },
});

export const { getPlayer } = playerSlice.actions;
export const playerProfile = (state: RootState) => state.player.values;
export default playerSlice.reducer;
