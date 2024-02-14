import styled from "@emotion/styled";

import { playerState } from "../../app/player";

function Dropdown({ specificPlayers }: { specificPlayers: playerState }) {
  console.log(specificPlayers);
  return (
    <DropdownDiv>
      {specificPlayers.map((player) => {
        return <Li key={player.id}>{player.first_name + " " + player.last_name}</Li>;
      })}
    </DropdownDiv>
  );
}

export default Dropdown;

const DropdownDiv = styled.ul`
  background-color: white;
  color: black;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 0;
  padding-inline-start: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Li = styled.li`
  height: 40px;
  cursor: pointer;
`;
