/* eslint-disable max-len */
import changePosition from './changePosition';
import checkCollision from './collisionChecker';

<<<<<<< HEAD
export default function(e, currentUser, currentMap, setDisableKeys, disableKeys, handleMapChange) {
=======
export default function (e, currentUser, currentMap, npcArray = [], setDisableKeys, disableKeys, handleMapChange) {
>>>>>>> 8624545f3bb8de5469a87cd08c7950f6ec865fb9
    e.preventDefault();
    // const currentUser = useSelector(getUser);
    if (currentUser.current && !disableKeys) {
        setDisableKeys(true);
        const { position, speed, dimension } = currentUser.current;

        const newPosition = changePosition(position, speed, e.key);


<<<<<<< HEAD
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
=======

        const checkCollisionResult = checkCollision([...currentMap.current.portals, ...npcArray, ...currentMap.current.objectArray], newPosition, dimension);
        if (checkCollisionResult === true) {
            const dir = e.key.split('Arrow')[1].toLowerCase();
            currentUser.current = {
                ...currentUser.current,
                position: newPosition,
                dir
>>>>>>> 8624545f3bb8de5469a87cd08c7950f6ec865fb9
            }
        } else if (checkCollisionResult !== false) {
            handleMapChange(checkCollisionResult);
        }
        // if (!checkCollision(currentMap.current.portals, newPosition, dimension)) {
        //     console.log(currentMap.current);
        //     handleMapChange(currentMap.current.portals[0].nextMap);
        // } else {
        //     if (checkCollision(
        //         [...currentMap.current.objectArray, ...npcArray], newPosition, dimension)
        //     ) {
        //         const dir = e.key.split('Arrow')[1].toLowerCase();
        //         currentUser.current = {
        //             ...currentUser.current,
        //             position: newPosition,
        //             dir
        //         };
        //     }
        // }

    }
}

