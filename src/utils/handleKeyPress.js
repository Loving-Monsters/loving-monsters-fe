/* eslint-disable max-len */
import changePosition from './changePosition';
import checkCollision from './collisionChecker';

export default function (e, currentUser, currentMap, npcArray = [], setDisableKeys, disableKeys, handleMapChange) {
    e.preventDefault();
    // const currentUser = useSelector(getUser);
    if (currentUser.current && !disableKeys) {
        setDisableKeys(true);
        const { position, speed, dimension } = currentUser.current;

        const newPosition = changePosition(position, speed, e.key);

        if (!checkCollision(currentMap.current.portals, newPosition, dimension)) {
            console.log(currentMap.current);
            handleMapChange(currentMap.current.portals[0].nextMap);
        } else {
            if (checkCollision(
                [...currentMap.current.objectArray, ...npcArray], newPosition, dimension)
            ) {
                const dir = e.key.split('Arrow')[1].toLowerCase();
                currentUser.current = {
                    ...currentUser.current,
                    position: newPosition,
                    dir
                };
            }
        }

    }
}

