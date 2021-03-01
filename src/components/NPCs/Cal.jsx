import { CallTracker } from "assert"

export default function Cal({ position }) {

  return (
    <div
      style={{
        left: position.x,
        top: position.y
      }}
    >
    <span>{'Cal'}</span>
    <img src='/npcs/Cal.png' />
    </div>
  );
}