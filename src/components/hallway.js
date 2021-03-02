const NorthWall = {
    position: { x: 0, y: 0 },
    dimension: { x: 775, y: 10 }
};

const EastWall = {
    position: { x: 775, y: 0 },
    dimension: { x: 10, y: 650 }
};

const SouthWall = {
    position: { x: 0, y: 650 },
    dimension: { x: 785, y: 10 }
};

const WestWall = {
    position: { x: 0, y: 0 },
    dimension: { x: 10, y: 650 }
};

export const hallArray = [NorthWall, EastWall, SouthWall, WestWall];
