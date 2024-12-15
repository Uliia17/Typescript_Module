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
// Заміна методу find
var aceOfSpades;
for (var _d = 0, cards_1 = cards; _d < cards_1.length; _d++) {
    var card = cards_1[_d];
    if (card.value === 'ace' && card.cardSuit === 'spade') {
        aceOfSpades = card;
        break;
    }
}
console.log(aceOfSpades);
// Заміна методу includes
var sixes = [];
for (var _e = 0, cards_2 = cards; _e < cards_2.length; _e++) {
    var card = cards_2[_e];
    if (card.value === '6') {
        sixes.push(card);
    }
}
console.log(sixes);
var redCards = [];
for (var _f = 0, cards_3 = cards; _f < cards_3.length; _f++) {
    var card = cards_3[_f];
    if (card.color === 'red') {
        redCards.push(card);
    }
}
console.log(redCards);
var diamonds = [];
for (var _g = 0, cards_4 = cards; _g < cards_4.length; _g++) {
    var card = cards_4[_g];
    if (card.cardSuit === 'diamond') {
        diamonds.push(card);
    }
}
console.log(diamonds);
var clubsExcluding678 = [];
for (var _h = 0, cards_5 = cards; _h < cards_5.length; _h++) {
    var card = cards_5[_h];
    if (card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8') {
        clubsExcluding678.push(card);
    }
}
console.log(clubsExcluding678);
