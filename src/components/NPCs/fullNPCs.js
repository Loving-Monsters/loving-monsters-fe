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
    positiveReaction: 'Whoa! A ',
    positiveReaction2: ' for me? I love it!',
    neutralReaction: 'Uh, ',
    neutralReaction2: '? Thanks, I guess?',
    negativeReaction: 'Gross, I hate ',
    negativeReaction2: 's.',
    storyBeats1: [
        'Who\'re you lookin\' at?', 'Beat it, kid.', 'I don\'t talk to strangers.'],
    storyBeats2: [
        'You ever just catch yourself staring at lights?', 'I could really go for some pancakes right now.', 'Miss Creech gave me an F in Monster Studies, what a pain.'],
    storyBeats3: [
        'Hey, friend! How\'s it going?', 'We should go for a flight sometime. I\'ll show you the best view of the city!', 'Watch your step! Someone broke a jar of ooze nearby.'
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
    positiveReaction: 'Oh! ',
    positiveReaction2: '! I love this!',
    negativeReaction: 'Yuck, ',
    negativeReaction2: '. This is super gross.',
    neutralReaction: '',
    neutralReaction2: '? Okay...?',
    storyBeats1: [
        'We\'re fighting the Gundam\'s next week for homecoming.', 'Um, who are you again?', 'Sorry, what?'],
    storyBeats2: [
        'I love the fountain in the courtyard. It reminds me of home.', 'I lost my favorite swampscum the other day.', 'Barker\'s cool, I guess.'],
    storyBeats3: [
        'You should come by my swamp sometime!', 'Do you like the way I styled my gills today?', 'You\'ll come watch me cheer at the game, won\'t you?'
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
    positiveReaction: 'Aha!',
    positiveReaction2: 'Thank you for turning it in!',
    negativeReaction: 'A ',
    negativeReaction2: '?! Are you trying to kill me?!',
    neutralReaction: 'You found ',
    neutralReaction2: '? I\'ll put it in the lost and found.',
    storyBeats1: [
        'Step away from my desk.', 'They took away your desks due to budget cuts.', 'I don\'t get paid enough for what I put up with.'],
    storyBeats2: [
        'You should go out to the courtyard for some air.', 'If you find any ooze, bring it to me.', 'Class starts soon. Have you finished the reading?'],
    storyBeats3: [
        'I am not your friend, I am your teacher.'
    ]
};

const nvisible = {
    type: 'npc',
    name: 'nvisible',
    displayName: 'N. Visible',
    avatarImg: '/npcs/whitesquare.jpg',
    img: '',
    map: 'classroom3',
    friendship: 0,
    position: {
        x: 75,
        y: 300
    },
    dimension: {
        x: 50,
        y: 50
    },
    marginTop: '400px',
    marginLeft: '350px',
    positiveReaction: 'You got me ',
    positiveReaction2: '? How nice!',
    negativeReaction: 'Why would I want ',
    negativeReaction2: '?',
    neutralReaction: 'Oh, you found ',
    neutralReaction2: '? I\'ll just put it...over here.',
    storyBeats1: [
        'Watch where you\'re going!', 'Keep it down! We like to keep the study room quiet.', 'You\'re stepping on my foot!'],
    storyBeats2: [
        'Do you like my new tie?', 'People do strange things when they think no one\'s watching', 'Have you played oozeball with a friend in the courtyard?'],
    storyBeats3: [
        'You still haven\'t commented on my tie.', 'It would be easier to study if we had desks...', 'Swamps are so nasty, don\'t you think?'
    ]
};

const npcObj = { barker, cal, misscreech, nvisible };

export default npcObj;
