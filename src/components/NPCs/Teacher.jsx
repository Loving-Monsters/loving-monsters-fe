export default function Teacher({ position }) {

  return (
    <div
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <span>{'Miss Creech'}</span>
      <img src='/npcs/Teacher.png' />
    </div>
  );
}