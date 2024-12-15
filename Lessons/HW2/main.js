var RectangleShape = /** @class */ (function () {
    function RectangleShape(a, b) {
        this.a = a;
        this.b = b;
    }
    RectangleShape.prototype.area = function () {
        var result = this.a * this.b;
        console.log(result);
        return result;
    };
    return RectangleShape;
}());
var rectangleShape = new RectangleShape(2, 4);
rectangleShape.area();
// --------------------------------------
var CircleShape = /** @class */ (function () {
    function CircleShape(r) {
        this.r = r;
    }
    CircleShape.prototype.area = function () {
        var result = 3.14 * this.r * this.r;
        console.log(result);
        return result;
    };
    return CircleShape;
}());
var circleShape = new CircleShape(5);
circleShape.area();
// --------------------------------------
var CylinderShape = /** @class */ (function () {
    function CylinderShape(h, r) {
        this.h = h;
        this.r = r;
    }
    CylinderShape.prototype.area = function () {
        var result = 2 * 3.14 * this.r * (this.h + this.r);
        console.log(result);
        return result;
    };
    return CylinderShape;
}());
var cylinderShape = new CylinderShape(5, 3);
cylinderShape.area();
// Клас UsersList, що використовує public для властивості 'array'
var UsersList = /** @class */ (function () {
    function UsersList(array) {
        this.array = array;
    }
    UsersList.prototype.printUsers = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user);
        }
    };
    return UsersList;
}());
var usersList = new UsersList([
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
]);
usersList.printUsers();
// --------------------------------------
var TextWriter = /** @class */ (function () {
    function TextWriter(text) {
        this.text = text;
    }
    TextWriter.prototype.write = function () {
        console.log("<p>".concat(this.text, "</p>"));
    };
    return TextWriter;
}());
var textWriter = new TextWriter('lorem');
textWriter.write();
// --------------------------------------
var ContentWriter = /** @class */ (function () {
    function ContentWriter(text) {
        this.text = text;
    }
    ContentWriter.prototype.writeContent = function () {
        console.log("<ul> \n<li>".concat(this.text, "</li> \n<li>").concat(this.text, "</li> \n<li>").concat(this.text, "</li> \n</ul>"));
    };
    return ContentWriter;
}());
var contentWriter = new ContentWriter('lorem');
contentWriter.writeContent();
// --------------------------------------
var ListWriter = /** @class */ (function () {
    function ListWriter(text, counter) {
        this.text = text;
        this.counter = counter;
    }
    ListWriter.prototype.writeList = function () {
        console.log("<ul>");
        for (var i = 0; i < this.counter; i++) {
            console.log("<li>".concat(this.text, "</li>"));
        }
        console.log("</ul>");
    };
    return ListWriter;
}());
var listWriter = new ListWriter('Lorem ipsum dolor.', 3);
listWriter.writeList();
// --------------------------------------
var ElementWriter = /** @class */ (function () {
    function ElementWriter(arrayOfPrimitives) {
        this.arrayOfPrimitives = arrayOfPrimitives;
    }
    ElementWriter.prototype.writeElements = function () {
        console.log("<ul>");
        for (var _i = 0, _a = this.arrayOfPrimitives; _i < _a.length; _i++) {
            var element = _a[_i];
            console.log("<li>".concat(element, "</li>"));
        }
        console.log("</ul>");
    };
    return ElementWriter;
}());
var elementWriter = new ElementWriter([1, 'lorem', true, false]);
elementWriter.writeElements();
// --------------------------------------
var DocumentWriter = /** @class */ (function () {
    function DocumentWriter(users) {
        this.users = users;
    }
    DocumentWriter.prototype.writeDocuments = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log("<div>".concat(user.id, " ").concat(user.name, " ").concat(user.age, "</div>"));
        }
    };
    return DocumentWriter;
}());
var documentWriter = new DocumentWriter([{ id: 1, name: 'lorem', age: 10, status: true }]);
documentWriter.writeDocuments();
// --------------------------------------
var MinimalFinder = /** @class */ (function () {
    function MinimalFinder(numbers) {
        this.numbers = numbers;
    }
    MinimalFinder.prototype.findMinimal = function () {
        var min = this.numbers[0];
        for (var _i = 0, _a = this.numbers; _i < _a.length; _i++) {
            var number = _a[_i];
            if (number < min) {
                min = number;
            }
        }
        return min;
    };
    return MinimalFinder;
}());
var minimalFinder = new MinimalFinder([3, 4, -33, 0]);
console.log(minimalFinder.findMinimal());
// --------------------------------------
var SumCalculator = /** @class */ (function () {
    function SumCalculator(arr) {
        this.arr = arr;
    }
    SumCalculator.prototype.calculateSum = function () {
        var total = 0;
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var arrElement = _a[_i];
            total = total + arrElement;
        }
        return total;
    };
    return SumCalculator;
}());
var sumCalculator = new SumCalculator([1, 2, 10]);
console.log(sumCalculator.calculateSum());
// --------------------------------------
var ArraySwapper = /** @class */ (function () {
    function ArraySwapper(arr, index1, index2) {
        this.arr = arr;
        this.index1 = index1;
        this.index2 = index2;
    }
    ArraySwapper.prototype.swapElements = function () {
        var item = this.arr[this.index1];
        this.arr[this.index1] = this.arr[this.index2];
        this.arr[this.index2] = item;
        return this.arr;
    };
    return ArraySwapper;
}());
var arraySwapper = new ArraySwapper([11, 22, 33, 44], 0, 1);
console.log(arraySwapper.swapElements());
var CurrencyExchanger = /** @class */ (function () {
    function CurrencyExchanger(sumUAH, currencyValues, exchangeCurrency) {
        this.sumUAH = sumUAH;
        this.currencyValues = currencyValues;
        this.exchangeCurrency = exchangeCurrency;
    }
    CurrencyExchanger.prototype.exchangeCurrencyValue = function () {
        var chosenCurrency;
        for (var _i = 0, _a = this.currencyValues; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.currency === this.exchangeCurrency) {
                chosenCurrency = element;
            }
        }
        if (chosenCurrency) {
            return this.sumUAH / chosenCurrency.value;
        }
        return 0;
    };
    return CurrencyExchanger;
}());
var currencyExchanger = new CurrencyExchanger(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log(currencyExchanger.exchangeCurrencyValue());
