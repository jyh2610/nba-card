import styled from "@emotion/styled";

function Season() {
  return (
    <div>
      <SeasonDiv>Season Stats</SeasonDiv>
      <SeasonBox>
        <PointBox title="Points" content="1" />
        <PointBox title="Assists" content="1" />
        <PointBox title="Rebounds" content="1" />
        <PointBox title="Steals" content="1" />
        <PointBox title="Blocks" content="1" />
      </SeasonBox>
    </div>
  );
}

export default Season;

function PointBox({ title, content }: { title: string; content: string }) {
  return (
    <Box>
      <p>{title}</p>
      <p>{content}</p>
    </Box>
  );
}

const SeasonDiv = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

const Box = styled.div`
  width: 45%;
  border: 1px solid gray;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  padding: 8px 12px;
`;

const SeasonBox = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
