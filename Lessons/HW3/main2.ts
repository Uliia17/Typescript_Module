type PlayingCard = {
    cardSuit: string;
    value: string;
    color?: string;
};

const cardSuitsArray: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const cardValuesArray: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deckOfPlayingCards: PlayingCard[] = [];
for (const suit of cardSuitsArray) {
    for (const value of cardValuesArray) {
        const card: PlayingCard = { cardSuit: suit, value: value };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        deckOfPlayingCards.push(card);
    }
}
console.log(deckOfPlayingCards);

type CardGroup = {
    spades: PlayingCard[];
    diamonds: PlayingCard[];
    hearts: PlayingCard[];
    clubs: PlayingCard[];
};

let groupedDeckOfCards: CardGroup = deckOfPlayingCards.reduce((accum: CardGroup, card: PlayingCard) => {
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

// ----------------------------------

type CourseType = {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
};

let courseArray: CourseType[] = [
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

console.log(courseArray.filter(course => {
    return course.modules.includes('sass');
}));
console.log(courseArray.filter(course => {
    return course.modules.includes('docker');
}));
// -----------------------------------------------
type ProductType = {
    title: string;
    price: number;
    image: string;
};

let productArray: ProductType[] = [
    { title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg' },
    { title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg' },
    { title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74' },
    { title: 'tea', price: 15, image: 'https://content1.rozetka.com.ua/goods/images/big/374140819.jpg' }
];

for (let i: number = 0; i < productArray.length; i++) {
    const product: ProductType = productArray[i];
    console.log(`<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="image" class="product-image">
    </div>`);
}
// ----------------------------------------------------------------------------
type UserType = {
    id: number;
    name: string;
    age: number;
    status: boolean;
};

let userArray: UserType[] = [
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

for (const user of userArray) {
    if (user.status) {
        console.log(user);
    }
}

for (const user of userArray) {
    if (!user.status) {
        console.log(user);
    }
}

for (const user of userArray) {
    if (user.age > 30) {
        console.log(user);
    }
}
// --------------------------------------------------
type Person = {
    name: string;
    age: number;
    status: boolean;
};

type PersonWithId = Person & {
    id: number;
};

let people: PersonWithId[] = [
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

let displayPeople = (array: PersonWithId[]): void => {
    for (const person of array) {
        console.log(person);
    }
};
displayPeople(people);

// --------------------------------------

type CurrencyRate = {
    currency: string;
    value: number;
};

const convertCurrency = (sumUAH: number, currencyRates: CurrencyRate[], targetCurrency: string): number => {
    let chosenRate: CurrencyRate | undefined;
    for (const rate of currencyRates) {
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




