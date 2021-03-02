import CHANGE_POSITION from './CHANGE_POSITION';
import checkCollision from './collisionChecker';

export default function (e, currentUser, objectArray = [], npcArray = [], setDisableKeys, disableKeys) {
    e.preventDefault();
    // const currentUser = useSelector(getUser);
    if (currentUser.current && !disableKeys) {
        setDisableKeys(true);

        const { position, speed, dimension } = currentUser.current;
        if (e.key === 'ArrowUp') {
            const newPosition = CHANGE_POSITION.UP(position, speed);

            if (checkCollision(
                [...objectArray, ...npcArray], newPosition, dimension)
            ) {
                currentUser.current = {
                    ...currentUser.current,
                    position: newPosition,
                    dir: 'up'
                };
            }
        }
        if (e.key === 'ArrowDown') {
            const newPosition = CHANGE_POSITION.DOWN(position, speed);

            if (checkCollision(
                [...objectArray, ...npcArray],
                newPosition,
                dimension)) {
                currentUser.current = {
                    ...currentUser.current,
                    position: newPosition,
                    dir: 'down'
                };
            }
        }
        if (e.key === 'ArrowLeft') {
            const newPosition = CHANGE_POSITION.LEFT(position, speed);

            if (checkCollision(
                [...objectArray, ...npcArray],
                newPosition,
                dimension)) {
                currentUser.current = {
                    ...currentUser.current,
                    position: newPosition,
                    dir: 'left'
                };
            }
        }
        if (e.key === 'ArrowRight') {
            const newPosition = CHANGE_POSITION.RIGHT(position, speed);

            if (checkCollision(
                [...objectArray, ...npcArray],
                newPosition,
                dimension)) {
                currentUser.current = {
                    ...currentUser.current,
                    position: newPosition,
                    dir: 'right'
                };
            }
        }
        // if (e.key === ' ') {
        //     npcArray.some(npc => {
        //         if (currentUser.current.position.x - npc.position.x === 50 ||
        //             currentUser.position.y - npc.position.y === 50) {
        //             setText([...text, bob.texts[bob.storyBeat]]);
        //             bob.storyBeat++;
        //         }
        //     });
        // }
    }
}
