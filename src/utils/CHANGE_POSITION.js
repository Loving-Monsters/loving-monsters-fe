
export default {
    UP: (position, speed) => {

        return {
            x: position.x,
            y: position.y - speed,
        };

    },
    DOWN: (position, speed) => {
        return {
            x: position.x,
            y: position.y + speed
        };
    },
    LEFT: (position, speed) => {
        return {
            x: position.x - speed,
            y: position.y
        };
    },
    RIGHT: (position, speed) => {
        return {
            x: position.x + speed,
            y: position.y
        };
    },
};
