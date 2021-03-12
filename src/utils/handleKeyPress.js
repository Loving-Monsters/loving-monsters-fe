/* eslint-disable max-len */
import changePosition from './changePosition';
import checkCollision from './collisionChecker';

export default function (e, currentUser, currentMap, setDisableKeys, disableKeys, handleMapChange, handleNPCInteraction, handleItemInteraction, handleWhiteBoardInteraction, handleLaunchFrogger, setBoxOpen) {
    e.preventDefault();
    e.stopImmediatePropagation();

    if (currentUser.current && !disableKeys) {
        setDisableKeys(true);
        console.log(currentUser.current);

        const { position, speed, dimension } = currentUser.current;
        const { objectArray, portals, npcs, items, whiteBoard } = currentMap.current;

        const newPosition = changePosition(position, speed, e.key);

        const collisionObjects = [
            ...objectArray,
            ...portals,
            ...npcs,
            ...items,
        ];
        console.log('🚀 ~ file: handleKeyPress.js ~ line 28 ~ e.key', e.key);

        if (whiteBoard) collisionObjects.push(whiteBoard);

        const checkCollisionResult = checkCollision(collisionObjects, newPosition, dimension);

        switch (checkCollisionResult.type) {
            case false:
                setBoxOpen(false);
                currentUser.current = {
                    ...currentUser.current,
                    position: newPosition,
                    dir: e.key.split('Arrow')[1].toLowerCase()
                };
                break;
            case 'portal':
                handleMapChange(checkCollisionResult.name);
                break;

            case 'npc':
                handleNPCInteraction(checkCollisionResult.name);
                break;

            case 'item':
                handleItemInteraction(checkCollisionResult.name);
                break;

            case 'whiteBoard':
                handleWhiteBoardInteraction(checkCollisionResult.name);
                break;
            case 'frogger':
                handleLaunchFrogger();
                break;
        }
    }
}

