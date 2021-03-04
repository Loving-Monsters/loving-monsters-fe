import { hallway } from './hallway';

export const classroom = {
    mapImage: '/classroom/Workroom.png',
    portals: {
        position: {
            x: 275,
            y: 400
        }
    },
    nextMap: hallway,

    objectArray: [
        {
            name: 'NorthWall',
            position: {
                x: 0, y: 0
            },
            dimension: {
                x: 1516, y: 400
            },
        },
        // {
        //     name: 'EastWall',
        //     position: {
        //         x: 750, y: 0
        //     },
        //     dimension: {
        //         x: 10, y: 640
        //     }
        // },
        // {
        //     name: 'SouthWall',
        //     position: {
        //         x: 0, y: 550
        //     },
        //     dimension: {
        //         x: 1516, y: 10
        //     }
        // },
        // {
        //     name: 'WestWall',
        //     position: {
        //         x: -30, y: 0
        //     },
        //     dimension: {
        //         x: 10, y: 640
        //     }
        // },
        // {
        //     name: 'Lockers1',
        //     position: {
        //         x: 0, y: 325
        //     },
        //     dimension: {
        //         x: 150, y: 100
        //     }
        // },
        // {
        //     name: 'Lockers2',
        //     position: {
        //         x: 500, y: 325
        //     },
        //     dimension: {
        //         x: 250, y: 100
        //     }
        // }
    ],
};
