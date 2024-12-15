let str1: string = 'hello world';
console.log(str1.length);
let str2: string = 'lorem ipsum';
console.log(str2.length);
let str3: string = 'javascript is cool';
console.log(str3.length);

// ----------------------------------

const strings: string[] = [str1, str2, str3];
for (const str of strings) {
    console.log(str.toUpperCase());
}

// ----------------------------------

let str4: string = 'HELLO WORLD';
let str5: string = 'LOREM IPSUM';
let str6: string = 'JAVASCRIPT IS COOL';
const strings1: string[] = [str4, str5, str6];
for (const str of strings1) {
    console.log(str.toLowerCase());
}

// ----------------------------------

let str7: string = ' dirty string   ';
console.log(str7.trim());

// ----------------------------------

function stringToArray(str: string): string[] {
    return str.split(' ');
}
console.log(stringToArray('Ревуть воли як ясла повні'));


// ----------------------------------

const numbersArray: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const strings2: string[] = numbersArray.map(number => number + '');
console.log(strings2);

// ----------------------------------

function sortNums(array: number[], direction: 'ascending' | 'descending'): number[] {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
    return array; // Додано оператор return для обробки всіх можливих шляхів виконання
}
let nums: number[] = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// ----------------------------------

interface Course {
    title: string;
    monthDuration: number;
}

let coursesArray: Course[] = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

let sortedCourses = coursesArray.sort((a, b) => b.monthDuration - a.monthDuration);
let filteredCourses = sortedCourses.filter(value => value.monthDuration > 5);
let mappedCourses = filteredCourses.map((value, index) => {
    return { id: index + 1, title: value.title, monthDuration: value.monthDuration };
});
console.log(mappedCourses);

// ----------------------------------

interface Card {
    cardSuit: string;
    value: string;
    color?: string;
}

const suits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards: Card[] = [];
for (const suit of suits) {
    for (const value of values) {
        const card: Card = { cardSuit: suit, value: value };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'clubs' && !['6', '7', '8'].includes(card.value)));
