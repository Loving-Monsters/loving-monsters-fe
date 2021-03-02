import CHANGE_POSITION from './CHANGE_POSITION';
import checkCollision from './collisionChecker';

export default (e) => {
    e.preventDefault();

    console.log(e.key);
    // if (localUser.current && !disable) {

    //     setDisable(true);
    //     const { position, speed, dimension } = localUser.current;
    //     if (e.key === 'ArrowUp') {
    //         const newPosition = CHANGE_POSITION.UP(position, speed);

    //         if (checkCollision(
    //             [...objectArray, ...npcArray],
    //             newPosition,
    //             dimension)) {
    //             localUser.current = {
    //                 ...localUser.current,
    //                 position: newPosition,
    //                 dir: 'up'
    //             };
    //         }
    //     }
    //     if (e.key === 'ArrowDown') {
    //         const newPosition = CHANGE_POSITION.DOWN(position, speed);

    //         if (checkCollision(
    //             [...objectArray, ...npcArray],
    //             newPosition,
    //             dimension)) {
    //             localUser.current = {
    //                 ...localUser.current,
    //                 position: newPosition,
    //                 dir: 'down'
    //             };
    //         }
    //     }
    //     if (e.key === 'ArrowLeft') {
    //         const newPosition = CHANGE_POSITION.LEFT(position, speed);

    //         if (checkCollision(
    //             [...objectArray, ...npcArray],
    //             newPosition,
    //             dimension)) {
    //             localUser.current = {
    //                 ...localUser.current,
    //                 position: newPosition,
    //                 dir: 'left'
    //             };
    //         }
    //     }
    //     if (e.key === 'ArrowRight') {
    //         const newPosition = CHANGE_POSITION.RIGHT(position, speed);

    //         if (checkCollision(
    //             [...objectArray, ...npcArray],
    //             newPosition,
    //             dimension)) {
    //             localUser.current = {
    //                 ...localUser.current,
    //                 position: newPosition,
    //                 dir: 'right'
    //             };
    //         }
    //     }
    // if (e.key === ' ') {
    //     npcArray.some(npc => {
    //         if (localUser.current.position.x - npc.position.x === 50 ||
    //             localUser.current.position.y - npc.position.y === 50) {
    //             setText([...text, bob.texts[bob.storyBeat]]);
    //             bob.storyBeat++;
    //         }
    //     });
    // }
    // }
};
