import { baseAPI } from "../baseApi";

const api = new baseAPI();

export const getTeamList = async (page = 0) => {
  try {
    const res = await api.get({
      url: "/teams",
      options: {
        params: {
          per_page: 10,
          page,
        },
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
