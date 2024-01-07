import { baseAPI } from "../baseApi";

const api = new baseAPI();

export const getAllPlayers = async (page = 0) => {
  const res = await api.get({
    url: "/players",
    options: {
      params: {
        per_page: 10,
        page,
      },
    },
  });

  return res;
};
