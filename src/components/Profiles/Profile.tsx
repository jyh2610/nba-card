import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

import PlayerTitle from "./component/PlayerTitle";
import Season from "./component/Season";
import { getPlayer, getStats } from "../../api/custom/PlayerApis";
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
  // const [stat, setStat] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const ID = id + "";
      const res = await getPlayer(ID);
      // const stats = await getStats(ID, "2024");
      setPlayer(res.data);
      // setStat(stats);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <ProfileSection>
      <PlayerTitle player={player} />
      <hr />
      <Season />
    </ProfileSection>
  );
}

export default Profile;

const ProfileSection = styled.section`
  padding: 0 10px;
`;
