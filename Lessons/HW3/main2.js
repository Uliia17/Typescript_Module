var cardSuitsArray = ['spade', 'diamond', 'heart', 'clubs'];
var cardValuesArray = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var deckOfPlayingCards = [];
for (var _i = 0, cardSuitsArray_1 = cardSuitsArray; _i < cardSuitsArray_1.length; _i++) {
    var suit = cardSuitsArray_1[_i];
    for (var _a = 0, cardValuesArray_1 = cardValuesArray; _a < cardValuesArray_1.length; _a++) {
        var value = cardValuesArray_1[_a];
        var card = { cardSuit: suit, value: value };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        deckOfPlayingCards.push(card);
    }
}
console.log(deckOfPlayingCards);
var groupedDeckOfCards = deckOfPlayingCards.reduce(function (accum, card) {
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
console.log(groupedDeckOfCards);
var courseArray = [
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
console.log(courseArray.filter(function (course) {
    return course.modules.includes('sass');
}));
console.log(courseArray.filter(function (course) {
    return course.modules.includes('docker');
}));
var productArray = [
    { title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg' },
    { title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg' },
    { title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74' },
    { title: 'tea', price: 15, image: 'https://content1.rozetka.com.ua/goods/images/big/374140819.jpg' }
];
for (var i = 0; i < productArray.length; i++) {
    var product = productArray[i];
    console.log("<div class=\"product-card\">\n        <h3 class=\"product-title\">".concat(product.title, ". Price - ").concat(product.price, "</h3>\n        <img src=\"").concat(product.image, "\" alt=\"image\" class=\"product-image\">\n    </div>"));
}
var userArray = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false },
    { id: 5, name: 'max', age: 30, status: true },
    { id: 6, name: 'anya', age: 31, status: false },
    { id: 7, name: 'oleg', age: 28, status: false },
    { id: 8, name: 'andrey', age: 29, status: true },
    { id: 9, name: 'masha', age: 30, status: true },
    { id: 10, name: 'olya', age: 31, status: false },
    { id: 11, name: 'max', age: 31, status: true }
];
for (var _b = 0, userArray_1 = userArray; _b < userArray_1.length; _b++) {
    var user = userArray_1[_b];
    if (user.status) {
        console.log(user);
    }
}
for (var _c = 0, userArray_2 = userArray; _c < userArray_2.length; _c++) {
    var user = userArray_2[_c];
    if (!user.status) {
        console.log(user);
    }
}
for (var _d = 0, userArray_3 = userArray; _d < userArray_3.length; _d++) {
    var user = userArray_3[_d];
    if (user.age > 30) {
        console.log(user);
    }
}
var people = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false },
    { id: 5, name: 'max', age: 30, status: true },
    { id: 6, name: 'anya', age: 31, status: false },
    { id: 7, name: 'oleg', age: 28, status: false },
    { id: 8, name: 'andrey', age: 29, status: true },
    { id: 9, name: 'masha', age: 30, status: true },
    { id: 10, name: 'olya', age: 31, status: false },
    { id: 11, name: 'max', age: 31, status: true }
];
var displayPeople = function (array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var person = array_1[_i];
        console.log(person);
    }
};
displayPeople(people);
var convertCurrency = function (sumUAH, currencyRates, targetCurrency) {
    var chosenRate;
    for (var _i = 0, currencyRates_1 = currencyRates; _i < currencyRates_1.length; _i++) {
        var rate = currencyRates_1[_i];
        if (rate.currency === targetCurrency) {
            chosenRate = rate;
        }
    }
    if (chosenRate) {
        return sumUAH / chosenRate.value;
    }
    return 0;
};
console.log(convertCurrency(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));
