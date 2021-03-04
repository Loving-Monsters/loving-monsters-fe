
export const courtyard = {
    mapImage: '',
    transformPositionX: 0,
    transformPositionY: 150,
    portals: [{
        position: {
            x: 25,
            y: 375
        },
        dimension: {
            x: 25,
            y: 25
        },
        nextMap: 'hallway3',
        startingPosition: {
            x: 600,
            y: 350
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
                x: 350, y: 0
            },
            dimension: {
                x: 10, y: 400
            }
        },
        {
            name: 'SouthWall',
            position: {
                x: 0, y: 400
            },
            dimension: {
                x: 600, y: 150
            }
        },
        {
            name: 'WestWall',
            position: {
                x: -25, y: 0
            },
            dimension: {
                x: 10, y: 400
            }
        },
    ],
};
