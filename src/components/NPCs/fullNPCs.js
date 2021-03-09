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
        x: 850,
        y: 250
    },
    dimension: {
        x: 50,
        y: 50
    },
    marginTop: '350px',
    marginLeft: '1100px',
    positiveReaction: 'Thank you for',
    positiveReaction2: 'I love',
    neutralReaction: 'I care not for',
    neutralReaction2: ' ',
    negativeReaction: 'I hate',
    negativeReaction2: 'and I hate you for give me ',
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
        x: 500,
        y: 250
    },
    dimension: {
        x: 50,
        y: 50
    },
    marginTop: '350px',
    marginLeft: '800px',
    positiveReaction: 'ooooohhhh a',
    positiveReaction2: 'I would kill for',
    negativeReaction: 'I hate',
    negativeReaction2: '',
    neutralReaction: 'I care not for',
    neutralReaction2: ' ',
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
        x: 550,
        y: 75
    },
    dimension: {
        x: 150,
        y: 75
    },
    marginTop: '200px',
    marginLeft: '840px',
    positiveReaction: 'wow a ',
    positiveReaction2: 'Ive always wanted a',
    negativeReaction: 'I hate',
    negativeReaction2: '',
    neutralReaction: 'I care not for',
    neutralReaction2: ' ',
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
