/* eslint-disable max-len */

const barker = {
    type: 'npc',
    name: 'barker',
    displayName: 'Barker',
    avatarImg: '/npcs/BarkerAv.png',
    img: '/npcs/Barker.png',
    map: 'hallway',
    friendship: 0,

    position: {
        x: 650,
        y: 275
    },
    dimension: {
        x: 50,
        y: 50
    },
    marginTop: '350px',
    marginLeft: '800px',
    storyBeats1: [
        'Who\'re you lookin\' at?', 'Beat it, kid', 'I said stop lookin\' at me!'],
    storyBeats2: [
        'hi', 'your mom', 'bye'],
    storyBeats3: [
        'lol?', 'smurf', 'tabernacle'
    ]
};

const cal = {
    type: 'npc',
    name: 'cal',
    displayName: 'Cal',
    avatarImg: '/npcs/CalAv.png',
    img: '/npcs/Cal.png',
    map: 'hallway2',
    friendship: 0,

    position: {
        x: 650,
        y: 275
    },
    dimension: {
        x: 50,
        y: 50
    },
    marginTop: '350px',
    marginLeft: '800px',
    storyBeats1: [
        'Who\'re you lookin\' at?', 'Beat it, kid', 'I said stop lookin\' at me!'],
    storyBeats2: [
        'hi', 'your mom', 'bye'],
    storyBeats3: [
        'lol?', 'smurf', 'tabernacle'
    ]
};

const misscreech = {
    type: 'npc',
    name: 'misscreech',
    displayName: 'Miss Creech',
    avatarImg: '/npcs/Teacher.png',
    img: '/npcs/Teacher.png',
    map: 'classroom',

    friendship: 0,
    position: {
        x: 450,
        y: 175
    },
    dimension: {
        x: 150,
        y: 75
    },
    marginTop: '150px',
    marginLeft: '475px',
    storyBeats1: [
        'Who\'re you lookin\' at?', 'Beat it, kid', 'I said stop lookin\' at me!'],
    storyBeats2: [
        'hi', 'your mom', 'bye'],
    storyBeats3: [
        'lol?', 'smurf', 'tabernacle'
    ]
};

const npcObj = { barker, cal, misscreech };

export default npcObj;
