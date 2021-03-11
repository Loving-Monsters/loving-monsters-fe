const runDirections = ['up', 'down', 'left', 'right'];
const validKeyPress = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export const handleKeyPress = (e, setSpriteDirection) => {
    if (validKeyPress.includes(e.key)) {
        e.preventDefault();
        const parsedKeyPress = e.key.split('Arrow')[1].toLowerCase();
        if (runDirections.includes(parsedKeyPress)) {
            setSpriteDirection(parsedKeyPress);
        }
    }
};
