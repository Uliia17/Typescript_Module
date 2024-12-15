var rectangle = function (a, b) { return a * b; };
console.log(rectangle(2, 4));
// --------------------------------------
var circle = function (r) { return 3.14 * r * r; };
console.log(circle(5));
// --------------------------------------
var cylinder = function (h, r) { return 2 * 3.14 * r * (h + r); };
console.log(cylinder(5, 3));
var users = [
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
var usersArray = function (array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var user = array_1[_i];
        console.log(user);
    }
};
usersArray(users);
// --------------------------------------
var writer = function (text) {
    console.log("<p>".concat(text, "</p>"));
};
writer('lorem');
// --------------------------------------
var content = function (text) {
    console.log("<ul><li>".concat(text, "</li><li>").concat(text, "</li><li>").concat(text, "</li></ul>"));
};
content('lorem');
// --------------------------------------
var prescription = function (text) {
    console.log("<ul>");
    for (var i = 0; i < 3; i++) {
        console.log("<li>".concat(text, "</li>"));
    }
    console.log("</ul>");
};
prescription('Lorem ipsum dolor.');
// --------------------------------------
var elements = function (arrayOfPrimitives) {
    console.log("<ul>");
    for (var _i = 0, arrayOfPrimitives_1 = arrayOfPrimitives; _i < arrayOfPrimitives_1.length; _i++) {
        var element = arrayOfPrimitives_1[_i];
        console.log("<li>".concat(element, "</li>"));
    }
    console.log("</ul>");
};
elements([1, 'lorem', true, false]);
// --------------------------------------
var documents = function (users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log("<div>".concat(user.id, " ").concat(user.name, " ").concat(user.age, "</div>"));
    }
};
documents([{ id: 1, name: 'lorem', age: 10, status: true }]);
// --------------------------------------
var minimal = function (numbers) {
    var min = numbers[0];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (number < min) {
            min = number;
        }
    }
    return min;
};
console.log(minimal([3, 4, -33, 0]));
// --------------------------------------
var sum = function (arr) {
    var total = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var arrElement = arr_1[_i];
        total = total + arrElement;
    }
    return total;
};
console.log(sum([1, 2, 10]));
// --------------------------------------
var swap = function (arr, index1, index2) {
    var item = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = item;
    return arr;
};
console.log(swap([11, 22, 33, 44], 0, 1));
var exchange = function (sumUAH, currencyValues, exchangeCurrency) {
    var chosenCurrency;
    for (var _i = 0, currencyValues_1 = currencyValues; _i < currencyValues_1.length; _i++) {
        var element = currencyValues_1[_i];
        if (element.currency === exchangeCurrency) {
            chosenCurrency = element;
        }
    }
    if (chosenCurrency) {
        return sumUAH / chosenCurrency.value;
    }
    return 0;
};
console.log(exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));
