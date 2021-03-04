/* eslint-disable max-len */
import changePosition from './changePosition';
import checkCollision from './collisionChecker';

export default function(e, currentUser, currentMap, setDisableKeys, disableKeys, handleMapChange) {
    e.preventDefault();

    if (currentUser.current && !disableKeys) {
        setDisableKeys(true);
        const { position, speed, dimension } = currentUser.current;

        const newPosition = changePosition(position, speed, e.key);

        if (!checkCollision(currentMap.current.portals, newPosition, dimension)) {

            handleMapChange(currentMap.current.portals[0].nextMap);
        } else {
            if (checkCollision(
                [...currentMap.current.objectArray], newPosition, dimension)
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

