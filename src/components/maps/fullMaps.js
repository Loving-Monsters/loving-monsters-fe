/* eslint-disable max-len */
import itemObj from '../Items/fullItems';
import npcObj from '../NPCs/fullNPCs';

const hallway = {
    mapImage: '/hallway/MessyHallway.png',
    transformPositionX: 0,
    transformPositionY: 300,
    npcs: [npcObj.barker],
    items: [itemObj.snek],
    portals: [{
        type: 'portal',
        position: {
            x: 375,
            y: 275
        },
        dimension: {
            x: 50,
            y: 25
        },
        nextMap: 'classroom',
        startingPosition: {
            x: 0,
            y: 375
        }
    }, {
        type: 'portal',
        position: {
            x: 1000, y: 0
        },
        dimension: {
            x: 10, y: 640
        },
        nextMap: 'hallway2',
        startingPosition: {
            x: 0,
            y: 500
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
                x: 0, y: 525
            },
            dimension: {
                x: 1100, y: 10
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
                x: 25, y: 250
            },
            dimension: {
                x: 100, y: 75
            }
        },
        {
            type: 'object',
            name: 'Lockers2',
            position: {
                x: 750, y: 250
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

const hallway3 = {
    mapImage: '/hallway/MessyHallway3.png',
    transformPositionX: 0,
    transformPositionY: 250,
    npcs: [],
    items: [itemObj.pancakes],
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
                x: 225, y: 10
            }
        },
        {
            type: 'object',
            name: 'Lockers2',
            position: {
                x: 425, y: 325
            },
            dimension: {
                x: 250, y: 10
            }
        }
    ],
};

const classroom = {
    mapImage: '/classroom/Workroom.png',
    transformPositionX: 0,
    transformPositionY: 150,
    items: [itemObj.frog],
    npcs: [npcObj.misscreech],
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
        nextMap: 'hallway',
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

const classroom2 = {
    mapImage: '/classroom/Workroom.png',
    transformPositionX: 0,
    transformPositionY: 150,
    npcs: [],
    items: [itemObj.nightlight],
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
        nextMap: 'hallway2',
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

const classroom3 = {
    mapImage: '/classroom/Workroom.png',
    transformPositionX: 0,
    transformPositionY: 150,
    npcs: [],
    items: [itemObj.swampscum],
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

const courtyard = {
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


const mapObj = { hallway, hallway2, hallway3, classroom, classroom2, classroom3, courtyard };

export default mapObj;


