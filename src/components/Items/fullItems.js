const frog = {
    type: 'item',
    name: 'frog',
    img: '/items/Frog.png',
    map: 'classroom',
    display: '',
    friendship: {
        misscreech: 0,
        barker: -1,
        cal: 1
    },
    position: {
        x: 100,
        y: 250
    },
    dimension: {
        x: 1,
        y: 1
    },
    marginTop: '425px',
    marginLeft: '350px',
};

const nightlight = {
    type: 'item',
    name: 'nightlight',
    img: '/items/Nightlight.png',
    map: 'classroom',
    display: '',
    friendship: {
        misscreech: 0,
        barker: 1,
        cal: -1
    },
    position: {
        x: 625,
        y: 125
    },
    dimension: {
        x: 1,
        y: 1
    },
    marginTop: '300px',
    marginLeft: '880px',
};

const ooze = {
    type: 'item',
    name: 'ooze',
    img: '/items/Ooze.png',
    map: 'classroom',
    display: '',
    friendship: {
        misscreech: 1,
        barker: 0,
        cal: 1
    },
    position: {
        x: 425,
        y: 475
    },
    dimension: {
        x: 1,
        y: 1
    },
    marginTop: '650px',
    marginLeft: '730px',
};

const pancakes = {
    type: 'item',
    name: 'pancakes',
    img: '/items/pancakes.png',
    map: 'classroom',
    display: '',
    friendship: {
        misscreech: 0,
        barker: 1,
        cal: -1
    },
    position: {
        x: 650,
        y: 325
    },
    dimension: {
        x: 1,
        y: 1
    },
    marginTop: '500px',
    marginLeft: '950px',
};

const snek = {
    type: 'item',
    name: 'snek',
    img: '/items/Snek.png',
    map: 'hallway',
    display: '',
    friendship: {
        misscreech: -1,
        barker: 1,
        cal: 1
    },
    position: {
        x: 450,
        y: 275
    },
    dimension: {
        x: 1,
        y: 1
    },
    marginTop: '425px',
    marginLeft: '680px',
};

const swampscum = {
    type: 'item',
    name: 'swampscum',
    img: '/items/swampscum.png',
    map: 'classroom',
    display: '',
    friendship: {
        misscreech: 0,
        barker: 0,
        cal: 1
    },
    position: {
        x: 125,
        y: 350
    },
    dimension: {
        x: 1,
        y: 1
    },
    marginTop: '600px',
    marginLeft: '200px',
};

const itemObj = { frog, nightlight, ooze, pancakes, snek, swampscum };

export default itemObj;

