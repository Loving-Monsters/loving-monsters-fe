/* eslint-disable max-len */
/* eslint-disable max-len */
import itemObj from '../Items/fullItems';
import npcObj from '../NPCs/fullNPCs';

const hallway = {
    mapImage: '/hallway/MessyHallway.png',
    transformPositionX: 0,
    transformPositionY: 300,
    playerOffsetX: 300,
    playerOffsetY: 100,
    left: 350,
    top: 0,
    height: 750,
    npcs: [npcObj.barker],
    items: [itemObj.snek],
    portals: [{
        type: 'portal',
        position: {
            x: 575,
            y: 250
        },
        dimension: {
            x: 100,
            y: 25
        },
        name: 'classroom',
        startingPosition: {
            x: 75,
            y: 550
        }
    }, {
        type: 'portal',
        position: {
            x: 1380, y: 0
        },
        dimension: {
            x: 10, y: 640
        },
        name: 'hallway2',
        startingPosition: {
            x: 0,
            y: 375
        }
    }],
    arrows: [{
        location: 'hallwayarrow1',
        marginTop: '250px',
        marginLeft: '895px',
        rotate: 0
    },
    {
        location: 'hallwayarrow2',
        marginTop: '500px',
        marginLeft: '1750px',
        rotate: 90
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
                x: 1100, y: 275
            },
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 615
            },
            dimension: {
                x: 1600, y: 10
            }
        },
        {
            type: 'object',
            name: 'WestWall',
            position: {
                x: 25, y: 0
            },
            dimension: {
                x: 10, y: 625
            }
        },
        {
            type: 'object',
            name: 'Lockers1',
            position: {
                x: 25, y: 275
            },
            dimension: {
                x: 325, y: 50
            }
        },
        {
            type: 'object',
            name: 'Lockers2',
            position: {
                x: 1000, y: 250
            },
            dimension: {
                x: 500, y: 75
            }
        }
    ],
};

const hallway2 = {
    mapImage: '/hallway/MessyHallway2.png',
    npcs: [npcObj.cal],
    items: [itemObj.ooze],
    transformPositionX: 0,
    transformPositionY: 300,
    playerOffsetX: 350,
    left: 0,
    top: 0,
    height: 750,
    playerOffsetY: 100,
    portals: [{
        type: 'portal',
        position: {
            x: 175,
            y: 225
        },
        dimension: {
            x: 100,
            y: 25
        },
        name: 'classroom2',
        startingPosition: {
            x: 75,
            y: 550
        }
    }, {
        type: 'portal',
        position: {
            x: -25, y: 0
        },
        dimension: {
            x: 10, y: 625
        },
        name: 'hallway',
        startingPosition: {
            x: 1300,
            y: 350
        }
    }, {
        type: 'portal',
        position: {
            x: 1000, y: 0
        },
        dimension: {
            x: 10, y: 640
        },
        name: 'hallway3',
        startingPosition: {
            x: 0,
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
        marginLeft: '200px',
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
                x: 1100, y: 250
            },
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 615
            },
            dimension: {
                x: 1500, y: 25
            }
        },
        {
            type: 'object',
            name: 'Lockers1',
            position: {
                x: 0, y: 250
            },
            dimension: {
                x: 100, y: 75
            }
        },
        {
            type: 'object',
            name: 'Lockers2',
            position: {
                x: 700, y: 250
            },
            dimension: {
                x: 250, y: 75
            }
        }
    ],
};

const hallway3 = {
    mapImage: '/hallway/MessyHallway3.png',
    npcs: [],
    items: [itemObj.pancakes],
    transformPositionX: 0,
    transformPositionY: 300,
    playerOffsetX: 350,
    left: 0,
    top: 0,
    height: 750,
    playerOffsetY: 100,
    portals: [{
        type: 'portal',
        position: {
            x: 200,
            y: 225
        },
        dimension: {
            x: 100,
            y: 25
        },
        name: 'classroom3',
        startingPosition: {
            x: 75,
            y: 550
        }
    }, {
        type: 'portal',
        position: {
            x: -25, y: 0
        },
        dimension: {
            x: 10, y: 625
        },
        name: 'hallway2',
        startingPosition: {
            x: 950,
            y: 350
        }
    }, {
        type: 'portal',
        position: {
            x: 1000, y: 0
        },
        dimension: {
            x: 10, y: 640
        },
        name: 'courtyard',
        startingPosition: {
            x: 50,
            y: 1175
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
        marginLeft: '200px',
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
                x: 1100, y: 250
            },
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 625
            },
            dimension: {
                x: 1500, y: 10
            }
        },
        {
            type: 'object',
            name: 'Lockers1',
            position: {
                x: 0, y: 250
            },
            dimension: {
                x: 100, y: 75
            }
        },
        {
            type: 'object',
            name: 'Lockers2',
            position: {
                x: 450, y: 250
            },
            dimension: {
                x: 1000, y: 75
            }
        }
    ],
};

const classroom = {
    mapImage: '/classroom/Workroom.png',
    transformPositionX: 0,
    transformPositionY: 150,
    playerOffsetX: 300,
    playerOffsetY: 100,
    left: 350,
    top: 100,
    height: 750,
    items: [itemObj.frog],
    npcs: [npcObj.misscreech],
    whiteBoard: {
        type: 'whiteBoard',
        name: 'classroom',
        position: {
            x: 150,
            y: 100
        },
        dimension: {
            x: 175,
            y: 25
        }
    },
    portals: [{
        type: 'portal',
        position: {
            x: 50,
            y: 700
        },
        dimension: {
            x: 75,
            y: 25
        },
        name: 'hallway',
        startingPosition: {
            x: 625,
            y: 325
        }
    }],
    arrows: [{
        location: 'classroomarrow1',
        marginTop: '750px',
        marginLeft: '355px',
        rotate: 180
    }],
    objectArray: [
        {
            type: 'object',
            name: 'NorthWall',
            position: {
                x: 0, y: 25
            },
            dimension: {
                x: 1000, y: 125
            }
        },
        {
            type: 'object',
            name: 'EastWall',
            position: {
                x: 725, y: 0
            },
            dimension: {
                x: 10, y: 800
            }
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 700
            },
            dimension: {
                x: 1000, y: 150
            }
        },
        {
            type: 'object',
            name: 'WestWall',
            position: {
                x: 25, y: 0
            },
            dimension: {
                x: 50, y: 600
            }
        },
    ],
};

const classroom2 = {
    mapImage: '/classroom/classroom2.png',
    transformPositionX: 0,
    transformPositionY: 150,
    playerOffsetX: 300,
    playerOffsetY: 100,
    left: 350,
    top: 100,
    height: 750,
    items: [itemObj.nightlight],
    npcs: [],
    whiteBoard: {
        type: 'whiteBoard',
        name: 'classroom',
        position: {
            x: 150,
            y: 75
        },
        dimension: {
            x: 175,
            y: 50
        }
    },
    portals: [{
        type: 'portal',
        position: {
            x: 0,
            y: 700
        },
        dimension: {
            x: 100,
            y: 25
        },
        name: 'hallway2',
        startingPosition: {
            x: 225,
            y: 325
        }
    }],
    arrows: [{
        location: 'classroomarrow1',
        marginTop: '750px',
        marginLeft: '355px',
        rotate: 180
    }],
    objectArray: [
        {
            type: 'object',
            name: 'NorthWall',
            position: {
                x: 0, y: 25
            },
            dimension: {
                x: 1000, y: 125
            }
        },
        {
            type: 'object',
            name: 'EastWall',
            position: {
                x: 715, y: 0
            },
            dimension: {
                x: 25, y: 800
            }
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 700
            },
            dimension: {
                x: 1000, y: 150
            }
        },
        {
            type: 'object',
            name: 'WestWall',
            position: {
                x: 25, y: 0
            },
            dimension: {
                x: 50, y: 600
            }
        },
    ],
};

const classroom3 = {
    mapImage: '/classroom/classroom3.png',
    transformPositionX: 0,
    transformPositionY: 150,
    playerOffsetX: 300,
    playerOffsetY: 100,
    left: 350,
    top: 100,
    height: 750,
    items: [],
    npcs: [npcObj.nvisible],
    whiteBoard: {
        type: 'whiteBoard',
        name: 'classroom',
        position: {
            x: 150,
            y: 75
        },
        dimension: {
            x: 175,
            y: 50
        }
    },
    portals: [{
        type: 'portal',
        position: {
            x: 25,
            y: 700
        },
        dimension: {
            x: 100,
            y: 25
        },
        name: 'hallway3',
        startingPosition: {
            x: 225,
            y: 325
        }
    }],
    arrows: [{
        location: 'classroomarrow1',
        marginTop: '750px',
        marginLeft: '355px',
        rotate: 180
    }],
    objectArray: [
        {
            type: 'object',
            name: 'NorthWall',
            position: {
                x: 0, y: 25
            },
            dimension: {
                x: 1000, y: 125
            }
        },
        {
            type: 'object',
            name: 'EastWall',
            position: {
                x: 725, y: 0
            },
            dimension: {
                x: 10, y: 800
            }
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 700
            },
            dimension: {
                x: 1000, y: 150
            }
        },
        {
            type: 'object',
            name: 'WestWall',
            position: {
                x: 25, y: 0
            },
            dimension: {
                x: 50, y: 600
            }
        },
    ],
};

const courtyard = {
    mapImage: '/courtyard.png',
    transformPositionX: 0,
    transformPositionY: 200,
    playerOffsetX: 300,
    playerOffsetY: -100,
    left: 300,
    top: 300,
    height: 2000,
    npcs: [],
    items: [itemObj.swampscum],
    whiteBoard: {
        type: 'whiteBoard',
        name: 'classroom',
        position: {
            x: 150,
            y: 100
        },
        dimension: {
            x: 175,
            y: 50
        }
    },
    portals: [{
        type: 'portal',
        position: {
            x: 0,
            y: 1200
        },
        dimension: {
            x: 0,
            y: 50
        },
        name: 'hallway3',
        startingPosition: {
            x: 900,
            y: 375
        }
    }, {
        type: 'portal',
        name: 'frogger',
        position: {
            x: 900,
            y: 850
        },
        dimension: {
            x: 50,
            y: 50
        },
        startingPosition: {
            x: 700,
            y: 1050
        }
    }

    ],
    arrows: [{
        location: 'classroomarrow1',
        marginTop: '1100px',
        marginLeft: '200px',
        rotate: 270
    }],
    objectArray: [
        {
            type: 'object',
            name: 'NorthWall',
            position: {
                x: 0, y: 325
            },
            dimension: {
                x: 1925, y: 25
            }
        },
        {
            type: 'object',
            name: 'EastWall',
            position: {
                x: 1925, y: 325
            },
            dimension: {
                x: 25, y: 2275
            }
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 2350
            },
            dimension: {
                x: 1925, y: 25
            }
        },
        {
            type: 'object',
            name: 'WestWall',
            position: {
                x: 0, y: 0
            },
            dimension: {
                x: 0, y: 2275
            }
        },
        {
            type: 'object',
            name: 'Fountain',
            position: {
                x: 425, y: 985
            },
            dimension: {
                x: 1025, y: 625
            }
        },
    ],
};
const frogger = {
    mapImage: '/FroggerBkgd.png',
    transformPositionX: 0,
    transformPositionY: 200,
    playerOffsetX: 300,
    playerOffsetY: 100,
    left: 350,
    top: 350,
    height: 1025,
    npcs: [],
    items: [],
    portals: [
        {
            type: 'portal',
            position: {
                x: 0,
                y: 0
            },
            dimension: {
                x: 0,
                y: 0
            },
            name: 'courtyard',
            startingPosition: {
                x: 600,
                y: 850
            }
        }
        // {
        //     type: 'portal',
        //     position: {
        //         x: 1380, y: 0
        //     },
        //     dimension: {
        //         x: 10, y: 640
        //     },
        //     name: 'hallway2',
        //     startingPosition: {
        //         x: 0,
        //         y: 375
        //     }
        // }
    ],
    arrows: [
    ],
    objectArray: [
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 25, y: 1200
            },
            dimension: {
                x: 2000, y: 25
            }
        },
        {
            type: 'object',
            name: 'NorthWall',
            position: {
                x: 25, y: 225
            },
            dimension: {
                x: 2000, y: 25
            }
        },
        {
            type: 'object',
            name: 'WestWall',
            position: {
                x: 25, y: 225
            },
            dimension: {
                x: 25, y: 1200
            }
        },
        {
            type: 'object',
            name: 'EastWall',
            position: {
                x: 1625, y: 225
            },
            dimension: {
                x: 25, y: 1200
            }
        },
    ],
    pads: [
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '1',
            position: {
                x: 395, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 129
        },
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '2',
            position: {
                x: 545, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 282
        },
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '3',
            position: {
                x: 695, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 178
        },
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '4',
            position: {
                x: 845, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 121
        },
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '5',
            position: {
                x: 995, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 313
        },
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '6',
            position: {
                x: 1145, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 122
        },
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '7',
            position: {
                x: 1295, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 50
        },
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '8',
            position: {
                x: 1445, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 164
        },
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '9',
            position: {
                x: 1595, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 124
        },
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '10',
            position: {
                x: 1745, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 158
        },
        {
            speed: 0,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '11',
            position: {
                x: 1895, y: 1170
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 206
        },
        {
            speed: 20,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '13',
            position: {
                x: 575, y: 1020
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 309
        },
        {
            speed: 20,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '14',
            position: {
                x: 825, y: 1020
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 277
        },
        {
            speed: -20,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '15',
            position: {
                x: 1275, y: 870
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 82
        },
        {
            speed: -20,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '16',
            position: {
                x: 1075, y: 870
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 223
        },
        {
            speed: -20,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '17',
            position: {
                x: 925, y: 870
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 251
        },
        {
            speed: 20,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '18',
            position: {
                x: 975, y: 720
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 202
        },
        {
            speed: 20,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '19',
            position: {
                x: 825, y: 720
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 282
        },
        {
            speed: 20,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '20',
            position: {
                x: 475, y: 720
            },
            dimension: {
                x: 75, y: 75
            }
            ,
            rotate: 269
        },
        {
            speed: -30,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '21',
            position: {
                x: 675, y: 570
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 249
        },
        {
            speed: -30,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '22',
            position: {
                x: 525, y: 570
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 209
        },
        {
            speed: -30,
            win: false,
            img: '/lilypad.png',
            type: 'pad',
            name: '23',
            position: {
                x: 1075, y: 570
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 257
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '31',
            position: {
                x: 395, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 178
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '32',
            position: {
                x: 545, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 175
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '33',
            position: {
                x: 695, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 203
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '34',
            position: {
                x: 845, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 321
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '35',
            position: {
                x: 995, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 59
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '36',
            position: {
                x: 1145, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 157
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '37',
            position: {
                x: 1295, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 46
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '38',
            position: {
                x: 1445, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 237
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '39',
            position: {
                x: 1595, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 207
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '41',
            position: {
                x: 1745, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 255
        },
        {
            speed: 0,
            win: true,
            img: '/winninglily.png',
            type: 'pad',
            name: '42',
            position: {
                x: 1895, y: 420
            },
            dimension: {
                x: 75, y: 75
            },
            rotate: 341
        }
    ],
};

const mapObj = { hallway, hallway2, hallway3, classroom, classroom2, classroom3, courtyard, frogger };

export default mapObj;

