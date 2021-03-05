
export const courtyard = {
    mapImage: '',
    transformPositionX: 0,
    transformPositionY: 150,
    npcs: [],
    items: [],
    portals: [{
        type: 'portal',
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
    arrows: [{
        location: 'courtyardarrow1',
        marginTop: '650px',
        marginLeft: '5px',
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
                x: 0, y: 400
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
