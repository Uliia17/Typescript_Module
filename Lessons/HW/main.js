var a = 'hello';
var b = 'owu';
var c = 'com';
var d = 'ua';
var e = 1;
var f = 10;
var g = -999;
var h = 123;
var i = 3.14;
var j = 2.7;
var k = 16;
var l = true;
var m = false;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
//--------------------------------------------
var firstName = 'Юлія';
var middleName = 'Ігорівна';
var lastName = 'Польська';
var msg = firstName + ' ' + middleName + ' ' + lastName;
console.log(msg);
//--------------------------------------------
var n = 100;
var o = '100';
var p = true;
console.log(typeof n);
console.log(typeof o);
console.log(typeof p);
//--------------------------------------------
var names = ["Юлія", "Ігорівна", "33"];
var FirstName = names[0];
console.log(FirstName);
var MiddleName = names[1];
console.log(MiddleName);
var Age = names[2];
console.log(Age);
//---------------------------------------------
var arr;
arr = [1, 2.4, -100, 0, 'a', 'number', 'word', 'text', true, false];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
//---------------------------------------------
var Book = /** @class */ (function () {
    function Book(title, pageCount, genre) {
        this.title = title;
        this.pageCount = pageCount;
        this.genre = genre;
    }
    return Book;
}());
var book1 = new Book('The Murders in the Rue Morgue', 288, 'detective');
console.log(book1);
var book2 = new Book('The Fall of the House of Usher', 640, 'horror literature');
console.log(book2);
var book3 = new Book('The Old Man And The Sea', 320, 'novel');
console.log(book3);
//---------------------------------------------
var Author = /** @class */ (function () {
    function Author(name, age) {
        this.name = name;
        this.age = age;
    }
    return Author;
}());
var BookNew = /** @class */ (function () {
    function BookNew(title, pageCount, genre, authors) {
        this.title = title;
        this.pageCount = pageCount;
        this.genre = genre;
        this.authors = authors;
    }
    BookNew.prototype.getBookInfo = function () {
        return "".concat(this.title, ", ").concat(this.pageCount, " pages, Genre: ").concat(this.genre);
    };
    BookNew.prototype.getAuthorsInfo = function () {
        return this.authors.map(function (author) { return "".concat(author.name, ", Age: ").concat(author.age); }).join('; ');
    };
    return BookNew;
}());
var book4 = new BookNew('The Murders in the Rue Morgue', 288, 'detective', [new Author('Edgar Allan Poe', 40)]);
console.log(book4.getBookInfo());
console.log(book4.getAuthorsInfo());
var book5 = new BookNew('The Fall of the House of Usher', 640, 'horror literature', [new Author('Edgar Allan Poe', 40)]);
console.log(book5.getBookInfo());
console.log(book5.getAuthorsInfo());
var book6 = new BookNew('The Old Man And The Sea', 320, 'novel', [new Author('Ernest Miller Hemingway', 61)]);
console.log(book6.getBookInfo());
console.log(book6.getAuthorsInfo());
//---------------------------------------------
var User3 = /** @class */ (function () {
    function User3(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
    return User3;
}());
var user1 = new User3('Ann', 'Ann1', 1234);
var user2 = new User3('Olga', 'Olga2', 5678);
var user3 = new User3('Elena', 'Elena3', 2345);
var user4 = new User3('Julia', 'Julia4', 6789);
var user5 = new User3('Lara', 'Lara5', 3456);
var user6 = new User3('Lora', 'Lora6', 7890);
var user7 = new User3('Jane', 'Jane7', 4567);
var user8 = new User3('Nicole', 'Nicole8', 8901);
var user9 = new User3('Helen', 'Helen9', 5678);
var user10 = new User3('Katy', 'Katy10', 9012);
console.log(user1.password);
console.log(user2.password);
console.log(user3.password);
console.log(user4.password);
console.log(user5.password);
console.log(user6.password);
console.log(user7.password);
console.log(user8.password);
console.log(user9.password);
console.log(user10.password);
//---------------------------------------------
var TemperatureValues = /** @class */ (function () {
    function TemperatureValues(morning, day, night) {
        this.morning = morning;
        this.day = day;
        this.night = night;
    }
    return TemperatureValues;
}());
var Temperature = /** @class */ (function () {
    function Temperature(day, values) {
        this.day = day;
        this.values = values;
    }
    return Temperature;
}());
var temperature = [
    new Temperature('Monday', new TemperatureValues(10, 20, 15)),
    new Temperature('Tuesday', new TemperatureValues(15, 25, 10)),
    new Temperature('Wednesday', new TemperatureValues(12, 28, 8)),
    new Temperature('Thursday', new TemperatureValues(15, 30, 18)),
    new Temperature('Friday', new TemperatureValues(13, 23, 17)),
    new Temperature('Saturday', new TemperatureValues(11, 26, 13)),
    new Temperature('Sunday', new TemperatureValues(18, 32, 18))
];
console.log(temperature);
var Course = /** @class */ (function () {
    function Course(title, monthDuration) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
    return Course;
}());
//---------------------------------------------
var q = 0;
var r = 0;
if (q === r) {
    console.log('===');
}
else if (q > r) {
    console.log(q);
}
else if (r > q) {
    console.log(r);
}
//-------------------------------------------
var x = 'default';
console.log(x);
var x1 = 'default';
console.log(x1);
var x2 = 'default';
console.log(x2);
var x3 = 'default';
console.log(x3);
var x4 = 'default';
console.log(x4);
//--------------------------------------------
var CourseLast = /** @class */ (function () {
    function CourseLast(title, monthDuration) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
    return CourseLast;
}());
var coursesAndDurationArray = [
    new Course('JavaScript Complex', 5),
    new Course('Java Complex', 6),
    new Course('Python Complex', 6),
    new Course('QA Complex', 4),
    new Course('FullStack', 7),
    new Course('Frontend', 4)
];
for (var _i = 0, coursesAndDurationArray_1 = coursesAndDurationArray; _i < coursesAndDurationArray_1.length; _i++) {
    var course = coursesAndDurationArray_1[_i];
    if (course.monthDuration > 5) {
        console.log('super');
    }
}
//---------------------------------------------
var CourseNext = /** @class */ (function () {
    function CourseNext(title, monthDuration) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
    return CourseNext;
}());
var Schedule = /** @class */ (function () {
    function Schedule(day, activity) {
        this.day = day;
        this.activity = activity;
    }
    return Schedule;
}());
var s1 = 1;
if (s1 !== 0) {
    console.log('right');
}
else {
    console.log('wrong');
}
var t2 = 0;
if (t2 !== 0) {
    console.log('right');
}
else {
    console.log('wrong');
}
var u3 = -3;
if (u3 !== 0) {
    console.log('right');
}
else {
    console.log('wrong');
}
//-----------------------------------------------
var time = 0;
if (time >= 0 && time <= 15) {
    console.log('quarter 1');
}
else if (time > 15 && time <= 30) {
    console.log('quarter 2');
}
else if (time > 30 && time <= 45) {
    console.log('quarter 3');
}
else if (time > 45 && time < 60) {
    console.log('quarter 4');
}
//----------------------------------------------
var day = 1;
if (day >= 1 && day <= 10) {
    console.log('decade 1');
}
else if (day > 10 && day <= 20) {
    console.log('decade 2');
}
else if (day > 20 && day <= 31) {
    console.log('decade 3');
}
//----------------------------------------------
var scheduleOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var schedule = scheduleOptions[Math.floor(Math.random() * scheduleOptions.length)];
switch (schedule) {
    case 'Monday':
        console.log('work meeting');
        break;
    case 'Tuesday':
        console.log('meeting with friends');
        break;
    case 'Wednesday':
        console.log('visiting parents');
        break;
    case 'Thursday':
        console.log('shopping');
        break;
    case 'Friday':
        console.log('work meeting');
        break;
    case 'Saturday':
        console.log('going to party');
        break;
    case 'Sunday':
        console.log('work meeting');
        break;
    default:
        console.log('No schedule found');
}
// --------------------------------------------
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log("<div>Lorem ipsum dolor sit.</div>");
}
// ------------------------------------------------
for (var i_2 = 0; i_2 < 10; i_2++) {
    console.log("<div>Lorem ipsum dolor sit. ".concat(i_2, "</div>"));
}
// ------------------------------------------------
var v = 0;
while (v < 20) {
    v++;
    console.log("<h1>Lorem ipsum dolor.</h1>");
}
// -------------------------------------------------
var w = 0;
while (w < 20) {
    console.log("<h1>Lorem ".concat(w, "</h1>"));
    w++;
}
// ----------------------------------------------------
var listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
console.log("<ul>");
for (var _a = 0, listOfItems_1 = listOfItems; _a < listOfItems_1.length; _a++) {
    var item = listOfItems_1[_a];
    console.log("<li>".concat(item, "</li>"));
}
console.log("</ul>");
// ----------------------------------------------------
var Product = /** @class */ (function () {
    function Product(title, price, image) {
        this.title = title;
        this.price = price;
        this.image = image;
    }
    return Product;
}());
var products = [
    new Product('milk', 22, 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'),
    new Product('juice', 27, 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'),
    new Product('tomato', 47, 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'),
    new Product('tea', 15, 'https://content1.rozetka.com.ua/goods/images/big/374140819.jpg')
];
for (var i_3 = 0; i_3 < products.length; i_3++) {
    var product = products[i_3];
    console.log("<div class=\"product-card\">\n        <h3 class=\"product-title\">".concat(product.title, ". Price - ").concat(product.price, "</h3>\n        <img src=\"").concat(product.image, "\" alt=\"image\" class=\"product-image\">\n    </div>"));
}
// ----------------------------------------------------------------------------
var User2 = /** @class */ (function () {
    function User2(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    return User2;
}());
var userList = [
    new User2('vasya', 31, false),
    new User2('petya', 30, true),
    new User2('kolya', 29, true),
    new User2('olya', 28, false),
    new User2('max', 30, true),
    new User2('anya', 31, false),
    new User2('oleg', 28, false),
    new User2('andrey', 29, true),
    new User2('masha', 30, true),
    new User2('olya', 31, false),
    new User2('max', 31, true)
];
for (var _b = 0, userList_1 = userList; _b < userList_1.length; _b++) {
    var user = userList_1[_b];
    if (user.status) {
        console.log(user);
    }
}
for (var _c = 0, userList_2 = userList; _c < userList_2.length; _c++) {
    var user = userList_2[_c];
    if (!user.status) {
        console.log(user);
    }
}
for (var _d = 0, userList_3 = userList; _d < userList_3.length; _d++) {
    var user = userList_3[_d];
    if (user.age > 30) {
        console.log(user);
    }
}
