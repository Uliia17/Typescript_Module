var cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
var cardValues = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var deckOfCards = [];
for (var _i = 0, cardSuits_1 = cardSuits; _i < cardSuits_1.length; _i++) {
    var suit = cardSuits_1[_i];
    for (var _a = 0, cardValues_1 = cardValues; _a < cardValues_1.length; _a++) {
        var value = cardValues_1[_a];
        var card = { cardSuit: suit, value: value };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        deckOfCards.push(card);
    }
}
console.log(deckOfCards);
var groupedCards = deckOfCards.reduce(function (accum, card) {
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
var courseList = [
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
console.log(courseList.filter(function (course) {
    return course.modules.includes('sass');
}));
console.log(courseList.filter(function (course) {
    return course.modules.includes('docker');
}));
