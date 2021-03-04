
export const classroom = {
    mapImage: '/classroom/Workroom.png',
    transformPositionX: 200,
    transformPositionY: 200,
    portals: [{
        position: {
            x: 250,
            y: 400
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
                x: 600, y: 150
            }
        },
        {
            name: 'EastWall',
            position: {
                x: 450, y: 0
            },
            dimension: {
                x: 10, y: 640
            }
        },
        {
            name: 'SouthWall',
            position: {
                x: 0, y: 475
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
