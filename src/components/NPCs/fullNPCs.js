/* eslint-disable max-len */

const barker = {
    type: 'npc',
    name: 'barker',
    displayName: 'Barker',
    avatarImg: '/npcs/BarkerAv.png',
    img: '/npcs/Barker.png',
    map: 'hallway',
    friendship: 0,
    items: [{
        name: 'frog',
        friendship: 10
    },
    {
        name: 'snek',
        friendship: -10
    }],
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
    storyBeats: [
        'Who\'re you lookin\' at?', 'Beat it, kid', 'I said stop lookin\' at me!'
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
    items: [{
        name: 'frog',
        friendship: -10
    },
    {
        name: 'snek',
        friendship: -10
    }],
    position: {
        x: 425,
        y: 275
    },
    dimension: {
        x: 50,
        y: 50
    },
    marginTop: '350px',
    marginLeft: '800px',
    storyBeats: [
        'You\'re gross', 'Why is your skin so dry', 'I can\'t be seen talking to you.'
    ]
};

const misscreech = {
    type: 'npc',
    name: 'misscreech',
    displayName: 'Miss Creech',
    avatarImg: '/npcs/Teacher.png',
    img: '/npcs/Teacher.png',
    map: 'classroom',
    items: [{
        name: 'frog',
        friendship: -10
    },
    {
        name: 'snek',
        friendship: -10
    }],
    friendship: 0,
    position: {
        x: 250,
        y: 175
    },
    dimension: {
        x: 75,
        y: 25
    },
    marginTop: '150px',
    marginLeft: '475px',
    storyBeats: [
        'Who\'re you lookin\' at?', 'Beat it, kid', 'I said stop lookin\' at me!'
    ]
};

const npcObj = { barker, cal, misscreech };

export default npcObj;
