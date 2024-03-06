import { baseAPI } from "../baseApi";

const api = new baseAPI();

export const getAllPlayers = async (page = 1) => {
  const res = await api.get({
    url: "/players",
    options: {
      params: {
        per_page: 10,
        cursor: page,
      },
    },
  });

  return res;
};

export const searchPlayer = async (name: string) => {
  const res = await api.get({
    url: "/players",
    options: {
      params: {
        search: name,
      },
    },
  });
  return res.data;
};

export const getPlayer = async (id: string) => {
  const res = await api.get({
    url: `/players/${id}`,
  });

  return res;
};

export const getStats = async (id: string, season: string) => {
  const res = await api.get({
    url: `/season_averages`,
    options: {
      params: {
        season: season,
        "player_ids[]": id,
      },
    },
  });
  return res.data;
};
