var str1 = 'hello world';
console.log(str1.length);
var str2 = 'lorem ipsum';
console.log(str2.length);
var str3 = 'javascript is cool';
console.log(str3.length);
// ----------------------------------
var strings = [str1, str2, str3];
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var str = strings_1[_i];
    console.log(str.toUpperCase());
}
// ----------------------------------
var str4 = 'HELLO WORLD';
var str5 = 'LOREM IPSUM';
var str6 = 'JAVASCRIPT IS COOL';
var strings1 = [str4, str5, str6];
for (var _a = 0, strings1_1 = strings1; _a < strings1_1.length; _a++) {
    var str = strings1_1[_a];
    console.log(str.toLowerCase());
}
// ----------------------------------
var str7 = ' dirty string   ';
console.log(str7.trim());
// ----------------------------------
function stringToArray(str) {
    return str.split(' ');
}
console.log(stringToArray('Ревуть воли як ясла повні'));
// ----------------------------------
var numbersArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
var strings2 = numbersArray.map(function (number) { return number + ''; });
console.log(strings2);
// ----------------------------------
function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort(function (a, b) { return a - b; });
    }
    else if (direction === 'descending') {
        return array.sort(function (a, b) { return b - a; });
    }
    return array; // Додано оператор return для обробки всіх можливих шляхів виконання
}
var nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
var coursesArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
var sortedCourses = coursesArray.sort(function (a, b) { return b.monthDuration - a.monthDuration; });
var filteredCourses = sortedCourses.filter(function (value) { return value.monthDuration > 5; });
var mappedCourses = filteredCourses.map(function (value, index) {
    return { id: index + 1, title: value.title, monthDuration: value.monthDuration };
});
console.log(mappedCourses);
var suits = ['spade', 'diamond', 'heart', 'clubs'];
var values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var cards = [];
for (var _b = 0, suits_1 = suits; _b < suits_1.length; _b++) {
    var suit = suits_1[_b];
    for (var _c = 0, values_1 = values; _c < values_1.length; _c++) {
        var value = values_1[_c];
        var card = { cardSuit: suit, value: value };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);
console.log(cards.find(function (card) { return card.value === 'ace' && card.cardSuit === 'spade'; }));
console.log(cards.filter(function (card) { return card.value === '6'; }));
console.log(cards.filter(function (card) { return card.color === 'red'; }));
console.log(cards.filter(function (card) { return card.cardSuit === 'diamond'; }));
console.log(cards.filter(function (card) { return card.cardSuit === 'clubs' && !['6', '7', '8'].includes(card.value); }));
