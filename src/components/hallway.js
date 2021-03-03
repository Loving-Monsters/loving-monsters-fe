/* eslint-disable max-len */
const NorthWall = {
    position: { x: 0, y: 0 },
    dimension: { x: 1516, y: 400 }
};

const EastWall = {
    position: { x: 750, y: 0 },
    dimension: { x: 10, y: 640 }
};

const SouthWall = {
    position: { x: 0, y: 550 },
    dimension: { x: 1516, y: 10 }
};

const WestWall = {
    position: { x: -30, y: 0 },
    dimension: { x: 10, y: 640 }
};

const Lockers1 = {
    position: { x: 0, y: 325 },
    dimension: { x: 150, y: 100 }
};

const Lockers2 = {
    position: { x: 500, y: 325 },
    dimension: { x: 250, y: 100 }
};

export const hallArray = [NorthWall, EastWall, SouthWall, WestWall, Lockers1, Lockers2];
