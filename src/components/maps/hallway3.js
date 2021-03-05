/* eslint-disable max-len */

export const hallway3 = {
    mapImage: '/hallway/MessyHallway.png',
    transformPositionX: 0,
    transformPositionY: 250,
    npcs: [],
    items: [],
    portals: [{
        type: 'portal',
        position: {
            x: 275,
            y: 300
        },
        dimension: {
            x: 50,
            y: 25
        },
        nextMap: 'classroom3',
        startingPosition: {
            x: 25,
            y: 375
        }
    }, {
        type: 'portal',
        position: {
            x: -25, y: 0
        },
        dimension: {
            x: 10, y: 625
        },
        nextMap: 'hallway2',
        startingPosition: {
            x: 700,
            y: 350
        }
    }, {
        type: 'portal',
        position: {
            x: 725, y: 0
        },
        dimension: {
            x: 10, y: 640
        },
        nextMap: 'courtyard',
        startingPosition: {
            x: 25,
            y: 350
        }
    }],
    arrows: [{
        location: 'hallwayarrow1',
        marginTop: '250px',
        marginLeft: '545px',
        rotate: 0
    },
    {
        location: 'hallwayarrow2',
        marginTop: '500px',
        marginLeft: '1300px',
        rotate: 90
    },
    {
        location: 'hallwayarrow3',
        marginTop: '500px',
        marginLeft: '30px',
        rotate: 270
    }],
    objectArray: [
        {
            type: 'object',
            name: 'NorthWall',
            position: {
                x: 0, y: 0
            },
            dimension: {
                x: 800, y: 325
            },
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 475
            },
            dimension: {
                x: 800, y: 10
            }
        },
        {
            type: 'object',
            name: 'Lockers1',
            position: {
                x: 0, y: 325
            },
            dimension: {
                x: 150, y: 10
            }
        },
        {
            type: 'object',
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

