import styled from "@emotion/styled";

import { playerState } from "../../app/player";

function Dropdown({ specificPlayers }: { specificPlayers: playerState }) {
  return (
    <DropdownDiv>
      {specificPlayers &&
        specificPlayers.map((player) => {
          return <Li key={player.id}>{player.first_name + " " + player.last_name}</Li>;
        })}
    </DropdownDiv>
  );
}

export default Dropdown;

const DropdownDiv = styled.ul`
  position: absolute;
  background-color: white;
  color: black;
  max-height: 200px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  z-index: 1;
  border-radius: 4px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Li = styled.li`
  height: 40px;
  cursor: pointer;
  padding: 10px;
`;
