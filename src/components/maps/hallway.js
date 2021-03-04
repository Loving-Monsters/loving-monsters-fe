/* eslint-disable max-len */

export const hallway = {
    mapImage: '/hallway/MessyHallway.png',
    transformPositionX: 0,
    transformPositionY: 250,
    npc: 'barker',
    portals: [{
        position: {
            x: 275,
            y: 325
        },
        dimension: {
            x: 25,
            y: 25
        },
        nextMap: 'classroom',
        startingPosition: {
            x: 25,
            y: 350
        }
    }, {
        position: {
            x: 725, y: 0
        },
        dimension: {
            x: 10, y: 640
        },
        nextMap: 'hallway2',
        startingPosition: {
            x: 25,
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
                x: 800, y: 325
            },
        },
        {
            name: 'SouthWall',
            position: {
                x: 0, y: 475
            },
            dimension: {
                x: 800, y: 10
            }
        },
        {
            name: 'WestWall',
            position: {
                x: -25, y: 0
            },
            dimension: {
                x: 10, y: 625
            }
        },
        {
            name: 'Lockers1',
            position: {
                x: 0, y: 325
            },
            dimension: {
                x: 150, y: 10
            }
        },
        {
            name: 'Lockers2',
            position: {
                x: 500, y: 325
            },
            dimension: {
                x: 250, y: 10
            }
        }
    ],
};

