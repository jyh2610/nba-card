import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import PlayerTitle from "./component/PlayerTitle";
import { getPlayer } from "../../api/custom/PlayerApis";
import { PlayerShortProfile } from "../PlayerList/PlayerLists";

function Profile() {
  const { id } = useParams();
  const [player, setPlayer] = useState<PlayerShortProfile>({
    id: 0,
    first_name: "",
    last_name: "",
    position: "",
  });

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await getPlayer(Number(id));
      setPlayer(res);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div>
      <PlayerTitle player={player} />
    </div>
  );
}

export default Profile;
