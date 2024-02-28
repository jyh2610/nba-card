import styled from "@emotion/styled";

import { PlayerShortProfile } from "../../PlayerList/PlayerLists";

function PlayerTitle({ player }: { player: PlayerShortProfile }) {
  return (
    <Div>
      <Icon>
        <img
          alt="Player profile image"
          style={{
            objectFit: "cover",
          }}
        />
      </Icon>
      <div>
        <div>{player.first_name + " " + player.last_name}</div>
        <div>Los Angeles Lakers</div>
      </div>
      <ul>
        <li>position : Small Forward</li>
      </ul>
    </Div>
  );
}

export default PlayerTitle;

const Div = styled.div`
  display: flex;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 100%;
`;
