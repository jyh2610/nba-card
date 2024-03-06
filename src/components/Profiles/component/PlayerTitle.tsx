import styled from "@emotion/styled";

import { PlayerShortProfile } from "../../../types/player";

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
      <StatContaniner>
        <Info>
          <Name>{player.first_name + " " + player.last_name}</Name>
          <Team>{player.team.full_name}</Team>
        </Info>
        <Stats>
          <li>position : {player.position}</li>
          <li>Height: {player.height}</li>
          <li>Weight: {player.weight}</li>
        </Stats>
      </StatContaniner>
    </Div>
  );
}

export default PlayerTitle;

const Div = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  gap: 16px;
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

const StatContaniner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Info = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Name = styled.span`
  font-size: 42px;
  font-weight: bold;
`;
const Team = styled.span`
  font-size: 24px;
  color: #dee2e6;
`;

const Stats = styled.ul`
  width: 100%;
  text-align: left;
  font-size: 24px;
  font-weight: semi-bold;
`;
