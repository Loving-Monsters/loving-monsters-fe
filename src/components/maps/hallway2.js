/* eslint-disable max-len */
import { cal } from '../NPCs/cal';
import { ooze } from '../Items/ooze';

export const hallway2 = {
    mapImage: '/hallway/MessyHallway2.png',
    npcs: [cal],
    items: [ooze],
    transformPositionX: 0,
    transformPositionY: 250,
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
        nextMap: 'classroom2',
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
        nextMap: 'hallway',
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
        nextMap: 'hallway3',
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
    }
    ],
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
        // {
        //     name: 'EastWall',
        //     position: {
        //         x: 725, y: 0
        //     },
        //     dimension: {
        //         x: 10, y: 640
        //     }
        // },
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
        // {
        //     name: 'WestWall',
        //     position: {
        //         x: -25, y: 0
        //     },
        //     dimension: {
        //         x: 10, y: 625
        //     }
        // },
        {
            type: 'object',
            name: 'Lockers1',
            position: {
                x: 0, y: 325
            },
            dimension: {
                x: 225, y: 10
            }
        },
        {
            type: 'object',
            name: 'Lockers2',
            position: {
                x: 550, y: 325
            },
            dimension: {
                x: 250, y: 10
            }
        }
    ],
};

