export default function Barker({ position, storyBeat }) {

  return (
    <div
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <span>{'Barker'}</span>
      <img src='/npcs/Barker.png' />
    </div>
  );
}