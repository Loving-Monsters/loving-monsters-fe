/* eslint-disable max-len */
export default function checkCollision(objectArray, proposedMove, playerDimension) {
    let returnValue = true;
    for(const object of objectArray) {
        const { position, dimension } = object;

        if (position.y < proposedMove.y + playerDimension.y) {
            // top of object higher than bottom of player

            if (position.y + dimension.y > proposedMove.y) {
                // bottom of object lower than top of player

                if (position.x < proposedMove.x + playerDimension.x) {
                    // left of object to the left of the left of the player

                    if (position.x + dimension.x > proposedMove.x) {
                        // right of object to the right of the right of the player
                        console.log(object.name);
                        if (object.nextMap) {
                            returnValue = object.nextMap;
                        } else {
                            returnValue = false;
                        }
                    }
                }
            }
        }
    }
    return returnValue;
}
