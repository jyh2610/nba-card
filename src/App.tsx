import styled from "@emotion/styled";

import PlayerLists from "./components/PlayerList/PlayerLists";
import TeamLists from "./components/TeamList/TeamLists";

function App() {
  return (
    <LayoutDiv>
      <PlayerLists />
      <TeamLists />
    </LayoutDiv>
  );
}

export default App;

export const LayoutDiv = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;
