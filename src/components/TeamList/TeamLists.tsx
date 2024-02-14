import { useLayoutEffect, useState } from "react";

import { getTeamList } from "../../api/custom/TeamListAPI";

function TeamLists() {
  const [teams, setTeams] = useState([]);
  console.log(teams);

  useLayoutEffect(() => {
    async function getTeams() {
      const data = await getTeamList();
      console.log(data);
    }
    getTeams();
  }, []);

  return <div>TeamLists</div>;
}

export default TeamLists;
