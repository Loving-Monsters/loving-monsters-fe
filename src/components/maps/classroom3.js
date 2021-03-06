import { swampscum } from '../Items/swampscum';

export const classroom3 = {
    mapImage: '/classroom/Workroom.png',
    transformPositionX: 0,
    transformPositionY: 150,
    npcs: [],
    items: [swampscum],
    portals: [{
        type: 'portal',
        position: {
            x: 25,
            y: 425
        },
        dimension: {
            x: 25,
            y: 25
        },
        nextMap: 'hallway3',
        startingPosition: {
            x: 275,
            y: 350
        }
    }],
    arrows: [{
        location: 'classroomarrow1',
        marginTop: '650px',
        marginLeft: '5px',
        rotate: 180
    }],
    objectArray: [
        {
            type: 'object',
            name: 'NorthWall',
            position: {
                x: 0, y: 0
            },
            dimension: {
                x: 600, y: 150
            }
        },
        {
            type: 'object',
            name: 'EastWall',
            position: {
                x: 350, y: 0
            },
            dimension: {
                x: 10, y: 400
            }
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 425
            },
            dimension: {
                x: 600, y: 150
            }
        },
        {
            type: 'object',
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
