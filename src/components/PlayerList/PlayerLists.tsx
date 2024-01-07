import { useEffect, useState } from "react";

import styled from "@emotion/styled";

import List from "./List";
import { getAllPlayers } from "../../api/custom/PlayerApis";

export interface PlayerShortProfile {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
}
function PlayerLists() {
  const [page, setPage] = useState(0);
  const [list, setList] = useState<PlayerShortProfile[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPlayers(page);
        const data = response.data; // Access 'data' property from the response
        setList((prevList) => [...prevList, ...data]);
        console.log(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ListDiv>
      {list.map((player: PlayerShortProfile) => {
        return <List key={player.id} player={player} />;
      })}
    </ListDiv>
  );
}

export default PlayerLists;

const ListDiv = styled.div`
  width: 45%;
  height: 35vw;
  overflow-x: hidden;
  overflow-y: scroll;
`;
