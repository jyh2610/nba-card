import styled from "@emotion/styled";

import PlayerLists from "./components/PlayerList/PlayerLists";

function App() {
  return (
    <LayoutDiv>
      <PlayerLists />
    </LayoutDiv>
  );
}

export default App;

export const LayoutDiv = styled.div`
  max-width: 1300px;
  margin: auto;
  text-align: center;
`;
