import { useEffect, useState, useRef } from "react";

import styled from "@emotion/styled";

import List from "./List";
import { getAllPlayers } from "../../api/custom/PlayerApis";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPlayer } from "../../app/player";

export interface PlayerShortProfile {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
}
function PlayerLists() {
  const dispatch = useAppDispatch();
  const playerLists: PlayerShortProfile[] = useAppSelector((state) => state.player);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);
  console.log(playerLists);

  const fetchData = async () => {
    try {
      const cousor = page === 1 ? page - 1 : (page - 1) * 10;
      const response = await getAllPlayers(cousor);
      setPage((prev) => prev + 1);
      const data = response.data;
      dispatch(getPlayer(data));
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting || PlayerLists.length > 10) {
        fetchData();
      }
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [page]);

  return (
    <ListDiv>
      {playerLists.map((player: PlayerShortProfile) => {
        return <List key={player.id} player={player} />;
      })}
      <div ref={loaderRef}>Loading ...</div>
    </ListDiv>
  );
}

export default PlayerLists;

const ListDiv = styled.div`
  width: 45%;
  height: 35vw;
  border: 1px solid gray;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
