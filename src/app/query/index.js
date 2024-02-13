import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQueryApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.balldontlie.io/api/v1" }),
  endpoints: (builder) => ({
    allPlayers: builder.query({
      query: () => "/players",
    }),
    getPlayerName: builder.query({
      query: (name) => `player/${name}`,
    }),
  }),
});
