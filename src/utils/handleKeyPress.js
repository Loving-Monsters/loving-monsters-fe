/* eslint-disable max-len */
import changePosition from './changePosition';
import checkCollision from './collisionChecker';

export default function (e, currentUser, currentMap, setDisableKeys, disableKeys, handleMapChange, handleNPCInteraction, handleItemInteraction, handleWhiteBoardInteraction, handleBallInteraction) {
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

        if (balls) collisionObjects.push(balls);
        if (whiteBoard) collisionObjects.push(whiteBoard);

        const checkCollisionResult = checkCollision(collisionObjects, newPosition, dimension);
        const ballUp = {
            x: newPosition.x,
            y: newPosition.y - 75
        }
        const ballDown = {
            x: newPosition.x,
            y: 75 + newPosition.y
        }
        const ballLeft = {
            x: newPosition.x - 75,
            y: newPosition.y
        }
        const ballRight = {
            x: 75 + newPosition.x,
            y: newPosition.y
        }
        const up = checkCollision(collisionObjects, ballUp, (dimension));
        const down = checkCollision(collisionObjects, ballDown, (dimension));
        const left = checkCollision(collisionObjects, ballLeft, (dimension));
        const right = checkCollision(collisionObjects, ballRight, (dimension));
        switch (checkCollisionResult.type) {
            case false:
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
                handleBallInteraction(e.key, up, down, left, right);
                break;
        }
    }
}

