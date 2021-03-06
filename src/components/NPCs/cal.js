/* eslint-disable max-len */
export const cal = {
    type: 'npc',
    name: 'cal',
    displayName: 'Cal',
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
