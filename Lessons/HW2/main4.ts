interface Card {
    cardSuit: string;
    value: string;
    color?: string;
}

const cardSuits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deckOfCards: Card[] = [];
for (const suit of cardSuits) {
    for (const value of cardValues) {
        const card: Card = { cardSuit: suit, value: value };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        deckOfCards.push(card);
    }
}
console.log(deckOfCards);

interface CardGroups {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
}

let groupedCards: CardGroups = deckOfCards.reduce((accum: CardGroups, card: Card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'clubs':
            accum.clubs.push(card);
            break;
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(groupedCards);

// ----------------------------------

interface Course {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}

let courseList: Course[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(courseList.filter(course => {
    return course.modules.includes('sass');
}));
console.log(courseList.filter(course => {
    return course.modules.includes('docker');
}));

