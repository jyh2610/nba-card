import styled from "@emotion/styled";
import Button from "@mui/material/Button";

import { PlayerShortProfile } from "./PlayerLists";

function List({ player }: { player: PlayerShortProfile }) {
  return (
    <ListDiv>
      <div>
        <h4>{player.first_name + " " + player.last_name}</h4>
        <div>{player.position}</div>
      </div>
      <ProfileBtn size="small" variant="outlined">
        View Profile
      </ProfileBtn>
    </ListDiv>
  );
}

export default List;

const ListDiv = styled.div`
  width: 100%;
  padding: 4px;
  border: 1px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProfileBtn = styled(Button)({
  height: "50px",
});
