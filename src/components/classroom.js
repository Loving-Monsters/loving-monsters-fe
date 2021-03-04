
export const classroom = {
    mapImage: '/classroom/Workroom.png',
    portals: [{
        position: {
            x: 250,
            y: 500
        },
        dimension: {
            x: 50,
            y: 50
        },
        nextMap: 'hallway',
        startingPosition: {
            x: 275,
            y: 400
        }
    }],
    objectArray: [
        {
            name: 'NorthWall',
            position: {
                x: 0, y: 0
            },
            dimension: {
                x: 700, y: 150
            }
        },
        {
            name: 'EastWall',
            position: {
                x: 325, y: 0
            },
            dimension: {
                x: 10, y: 640
            }
        },
        {
            name: 'SouthWall',
            position: {
                x: 0, y: 525
            },
            dimension: {
                x: 700, y: 150
            }
        },
        {
            name: 'WestWall',
            position: {
                x: 0, y: 0
            },
            dimension: {
                x: 10, y: 640
            }
        },
    ],
};
