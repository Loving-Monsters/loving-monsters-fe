/* eslint-disable max-len */
import changePosition from './changePosition';
import checkCollision from './collisionChecker';

// const map = document.getElementsByClassName(".map");

export default function (e, currentUser, currentMap, npcArray = [], setDisableKeys, disableKeys, setCurrentMap, setLoading) {
    e.preventDefault();
    // const currentUser = useSelector(getUser);
    if (currentUser.current && !disableKeys) {
        setDisableKeys(true);
        const { position, speed, dimension } = currentUser.current;

        const newPosition = changePosition(position, speed, e.key);
        if (currentUser.current.position.x === currentMap.portals.position.x && currentUser.current.position.y === currentMap.portals.position.y) {
            setLoading(true);
            setCurrentMap(currentMap.portals.nextMap);
            setLoading(false);

        } else {
            if (checkCollision(
                [...currentMap.objectArray, ...npcArray], newPosition, dimension)
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

// 
