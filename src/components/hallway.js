const NorthWall = {
    position: { x: 0, y: 0 },
    dimension: { x: 1516, y: 400 }
};

const EastWall = {
    position: { x: 800, y: 0 },
    dimension: { x: 10, y: 640 }
};

const SouthWall = {
    position: { x: 0, y: 625 },
    dimension: { x: 1516, y: 10 }
};

const WestWall = {
    position: { x: -30, y: 0 },
    dimension: { x: 10, y: 640 }
};

export const hallArray = [NorthWall, EastWall, SouthWall, WestWall];
