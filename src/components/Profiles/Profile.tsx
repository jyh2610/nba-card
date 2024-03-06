import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import PlayerTitle from "./component/PlayerTitle";
import { getPlayer } from "../../api/custom/PlayerApis";
import { PlayerShortProfile } from "../../types/player";

function Profile() {
  const { id } = useParams();
  const [player, setPlayer] = useState<PlayerShortProfile>({
    id: 0,
    first_name: "",
    last_name: "",
    position: "",
    jersey_number: "",
    weight: "",
    team: {
      abbreviation: "",
      city: "",
      conference: "",
      division: "",
      full_name: "",
      id: 0,
    },
    height: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await getPlayer(id + "");
      setPlayer(res.data);
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
