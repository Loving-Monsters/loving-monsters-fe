/* eslint-disable max-len */
import { barker } from '../NPCs/barker';

export const hallway = {
    mapImage: '/hallway/MessyHallway.png',
    transformPositionX: 0,
    transformPositionY: 250,
    npcs: [barker],
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
        nextMap: 'classroom',
        startingPosition: {
            x: 25,
            y: 375
        }
    }, {
        type: 'portal',
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
        {
            type: 'object',
            name: 'WestWall',
            position: {
                x: -25, y: 0
            },
            dimension: {
                x: 10, y: 625
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

