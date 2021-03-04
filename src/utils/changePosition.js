

export default function(position, speed, dir) {

    switch(dir) {
        case 'ArrowUp':
            return {
                x: position.x,
                y: position.y - speed,
            };

        case 'ArrowDown':
            return {
                x: position.x,
                y: position.y + speed
            };


        case 'ArrowLeft':
            return {
                x: position.x - speed,
                y: position.y
            };

        case 'ArrowRight':
            return {
                x: position.x + speed,
                y: position.y
            };
    }
}
