import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "./store";
import { PlayerShortProfile } from "../components/PlayerList/PlayerLists";
export type playerState = PlayerShortProfile[];

const initialState: playerState = [];
export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    getPlayer: (state, action: PayloadAction<PlayerShortProfile[]>) => {
      const data = action.payload;
      state.push(...data);
    },
    searchPlayerState: (_, action: PayloadAction<PlayerShortProfile[]>) => {
      return action.payload;
    },
  },
});

export const { getPlayer, searchPlayerState } = playerSlice.actions;
export const playerProfile = (state: RootState) => state.player.values;
export default playerSlice.reducer;
