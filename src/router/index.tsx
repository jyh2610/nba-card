import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Card from "../components/Card";
import Layout from "../components/Layout";
import PlayerLists from "../components/PlayerList/PlayerLists";
import Profile from "../components/Profiles/Profile";
import TeamLists from "../components/TeamList/TeamLists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/playerlists",
        element: <PlayerLists />,
      },
      {
        path: "/teamlists",
        element: <TeamLists />,
      },
    ],
  },
]);

export default router;
