import { useEffect, useState, useRef } from "react";

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
  const loaderRef = useRef<HTMLDivElement>(null);

  const fetchData = async () => {
    try {
      const response = await getAllPlayers(page);
      const data = response.data;
      setList((prevList) => [...prevList, ...data]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
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
      {list.map((player: PlayerShortProfile) => {
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
