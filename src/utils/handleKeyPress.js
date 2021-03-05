/* eslint-disable max-len */
import changePosition from './changePosition';
import checkCollision from './collisionChecker';

export default function (e, currentUser, currentMap, setDisableKeys, disableKeys, handleMapChange, handleNPCInteraction) {
    e.preventDefault();

    // const currentUser = useSelector(getUser);

    if (currentUser.current && !disableKeys) {
        setDisableKeys(true);

        const { position, speed, dimension } = currentUser.current;

        const newPosition = changePosition(position, speed, e.key);

        const checkCollisionResult = checkCollision([...currentMap.current.objectArray, ...currentMap.current.portals, ...currentMap.current.npcs], newPosition, dimension);

        if (checkCollisionResult === true) {
            const dir = e.key.split('Arrow')[1].toLowerCase();
            currentUser.current = {
                ...currentUser.current,
                position: newPosition,
                dir
            };
        } else if (checkCollisionResult.type === 'portal') {
            handleMapChange(checkCollisionResult.nextMap);
        } else if (checkCollisionResult.type === 'npc') {
            handleNPCInteraction(checkCollisionResult.name);
        }


    }
}

