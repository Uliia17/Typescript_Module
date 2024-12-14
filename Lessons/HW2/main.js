function rectangle(a, b) {
    var result = a * b;
    console.log(result);
    return result;
}
rectangle(2, 4);
// --------------------------------------
function circle(r) {
    var result = 3.14 * r * r;
    console.log(result);
    return result;
}
circle(5);
// --------------------------------------
function cylinder(h, r) {
    var result = 2 * 3.14 * r * (h + r);
    console.log(result);
    return result;
}
cylinder(5, 3);
function usersArray(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var user = array_1[_i];
        console.log(user);
    }
}
var users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
usersArray(users);
// --------------------------------------
function writer(text) {
    console.log("<p>".concat(text, "</p>"));
}
writer('lorem');
// --------------------------------------
function content(text) {
    console.log("<ul> \n<li>".concat(text, "</li> \n<li>").concat(text, "</li> \n<li>").concat(text, "</li> \n</ul>"));
}
content('lorem');
// --------------------------------------
function prescription(text, counter) {
    console.log("<ul>");
    for (var i = 0; i < counter; i++) {
        console.log("<li>".concat(text, "</li>"));
    }
    console.log("</ul>");
}
prescription('Lorem ipsum dolor.', 3);
// --------------------------------------
function elements(arrayOfPrimitives) {
    console.log("<ul>");
    for (var _i = 0, arrayOfPrimitives_1 = arrayOfPrimitives; _i < arrayOfPrimitives_1.length; _i++) {
        var element = arrayOfPrimitives_1[_i];
        console.log("<li>".concat(element, "</li>"));
    }
    console.log("</ul>");
}
elements([1, 'lorem', true, false]);
function documents(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log("<div>".concat(user.id, " ").concat(user.name, " ").concat(user.age, "</div>"));
    }
}
documents([{ id: 1, name: 'lorem', age: 10, status: true }]);
// --------------------------------------
function minimal(numbers) {
    var min = numbers[0];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minimal([3, 4, -33, 0]));
// --------------------------------------
function sum(arr) {
    var total = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var arrElement = arr_1[_i];
        total = total + arrElement;
    }
    return total;
}
console.log(sum([1, 2, 10]));
// --------------------------------------
function swap(arr, index1, index2) {
    var item = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = item;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));
function exchange(sumUAH, currencyValues, exchangeCurrency) {
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
}
console.log(exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));
