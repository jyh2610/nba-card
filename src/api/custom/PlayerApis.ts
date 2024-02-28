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

export const getPlayer = async (id: number) => {
  const res = await api.get({
    url: `/players/${id}`,
    options: {
      params: {
        search: id,
      },
    },
  });

  return res;
};
