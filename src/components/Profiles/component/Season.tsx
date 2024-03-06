function Season() {
  return (
    <div>
      Season
      <PointBox title="point" content="1" />
    </div>
  );
}

export default Season;

function PointBox({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <p>
        {title} : {content}
      </p>
    </div>
  );
}
