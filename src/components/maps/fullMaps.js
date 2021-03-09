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
    npcs: [npcObj.barker],
    items: [itemObj.snek],
    balls: {
        rotate: 0,
        display: true,
        type: 'ball',
        position: {
            x: 175,
            y: 400
        },
        location: {
            x: 500,
            y: 600
        },
        dimension: {
            x: 50,
            y: 50
        }
    },


    portals: [{
        type: 'portal',
        position: {
            x: 575,
            y: 300
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
                x: 0, y: 525
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
                x: 25, y: 300
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
    playerOffsetY: 100,
    balls: {
        rotate: 0,
        display: false,
        type: 'ball',
        position: {
            x: 125,
            y: 400
        },
        location: {
            x: 500,
            y: 600
        },
        dimension: {
            x: 50,
            y: 50
        }
    },
    portals: [{
        type: 'portal',
        position: {
            x: 175,
            y: 300
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
                x: 1100, y: 300
            },
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 525
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
    playerOffsetY: 100,
    balls: {
        rotate: 0,
        display: false,
        type: 'ball',
        position: {
            x: 125,
            y: 400
        },
        location: {
            x: 500,
            y: 600
        },
        dimension: {
            x: 50,
            y: 50
        }
    },
    portals: [{
        type: 'portal',
        position: {
            x: 200,
            y: 300
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
            x: 200,
            y: 200
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
                x: 1100, y: 300
            },
        },
        {
            type: 'object',
            name: 'SouthWall',
            position: {
                x: 0, y: 525
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
                x: 250, y: 75
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
            y: 50
        }
    },
    balls: {
        rotate: 0,
        display: false,
        type: 'ball',
        position: {
            x: 175,
            y: 400
        },
        location: {
            x: 500,
            y: 600
        },
        dimension: {
            x: 50,
            y: 50
        }
    },
    portals: [{
        type: 'portal',
        position: {
            x: 50,
            y: 600
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
                x: 0, y: 625
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
                x: 10, y: 600
            }
        },
    ],
};
const classroom2 = {
    mapImage: '/classroom/Workroom.png',
    transformPositionX: 0,
    transformPositionY: 150,
    playerOffsetX: 300,
    playerOffsetY: 100,
    left: 350,
    top: 100,
    balls: {
        rotate: 0,
        display: false,
        type: 'ball',
        position: {
            x: 175,
            y: 400
        },
        location: {
            x: 500,
            y: 600
        },
        dimension: {
            x: 50,
            y: 50
        }
    },
    items: [itemObj.nightlight],
    npcs: [],
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
            y: 600
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
                x: 0, y: 625
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
                x: 10, y: 600
            }
        },
    ],
};
const classroom3 = {
    mapImage: '/classroom/Workroom.png',
    transformPositionX: 0,
    transformPositionY: 150,
    playerOffsetX: 300,
    playerOffsetY: 100,
    left: 350,
    top: 100,
    balls: {
        rotate: 0,
        display: false,
        type: 'ball',
        position: {
            x: 175,
            y: 400
        },
        location: {
            x: 500,
            y: 600
        },
        dimension: {
            x: 50,
            y: 50
        }
    },
    items: [],
    npcs: [],
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
            x: 25,
            y: 600
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
                x: 0, y: 625
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
                x: 10, y: 600
            }
        },
    ],
};


//

const courtyard = {
    mapImage: '/courtyard.png',
    transformPositionX: 0,
    transformPositionY: 150,
    playerOffsetX: 300,
    playerOffsetY: 100,
    left: 50,
    top: 50,
    npcs: [],
    items: [],
    balls: {
        rotate: 0,
        display: false,
        type: 'ball',
        position: {
            x: 175,
            y: 400
        },
        location: {
            x: 500,
            y: 600
        },
        dimension: {
            x: 50,
            y: 50
        }
    },
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
            x: 25,
            y: 600
        },
        dimension: {
            x: 100,
            y: 25
        },
        name: 'hallway3',
        startingPosition: {
            x: 900,
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
                x: 0, y: 625
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
                x: 10, y: 600
            }
        },
    ],
};


const mapObj = { hallway, hallway2, hallway3, classroom, classroom2, classroom3, courtyard };

export default mapObj;


