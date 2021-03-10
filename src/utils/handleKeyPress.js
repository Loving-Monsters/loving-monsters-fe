/* eslint-disable max-len */
import changePosition from './changePosition';
import checkCollision from './collisionChecker';

export default function (e, currentUser, currentMap, setDisableKeys, disableKeys, handleMapChange, handleNPCInteraction, handleItemInteraction, handleWhiteBoardInteraction, handleBallInteraction, setBoxOpen) {
    e.preventDefault();

    if (currentUser.current && !disableKeys) {
        setDisableKeys(true);

        const { position, speed, dimension } = currentUser.current;
        const { objectArray, portals, npcs, items, whiteBoard, balls } = currentMap.current;

        const newPosition = changePosition(position, speed, e.key);

        const collisionObjects = [
            ...objectArray,
            ...portals,
            ...npcs,
            ...items,

        ];
        const ballPosition = changePosition(newPosition, 75, e.key)
        if (balls.display) collisionObjects.push(balls);
        if (whiteBoard) collisionObjects.push(whiteBoard);

        const checkCollisionResult = checkCollision(collisionObjects, newPosition, dimension);

        const ballCollision = checkCollision(collisionObjects, ballPosition, (dimension));

        console.log(ballCollision)

        switch (checkCollisionResult.type) {
            case false:
                setBoxOpen(false)
                const dir = e.key.split('Arrow')[1].toLowerCase();
                currentUser.current = {
                    ...currentUser.current,
                    position: newPosition,
                    dir
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
            case 'ball':
                handleBallInteraction(e.key, ballCollision);
                break;
        }
    }
}

