var detectiveBook = {
    title: 'The Murders in the Rue Morgue',
    pageCount: 288,
    genre: 'detective'
};
console.log(detectiveBook);
var horrorBook = {
    title: 'The Fall of the House of Usher',
    pageCount: 640,
    genre: 'horror literature'
};
console.log(horrorBook);
var novelBook = {
    title: 'The Old Man And The Sea',
    pageCount: 320,
    genre: 'novel'
};
console.log(novelBook);
var createBook = function (title, pageCount, genre, authors) {
    return {
        title: title,
        pageCount: pageCount,
        genre: genre,
        authors: authors,
        getBookInfo: function () {
            return "".concat(this.title, ", ").concat(this.pageCount, " pages, Genre: ").concat(this.genre);
        },
        getAuthorsInfo: function () {
            return this.authors.map(function (author) { return "".concat(author.name, ", Age: ").concat(author.age); }).join('; ');
        }
    };
};
var bookDetective = createBook('The Murders in the Rue Morgue', 288, 'detective', [{ name: 'Edgar Allan Poe', age: 40 }]);
console.log(bookDetective.getBookInfo());
console.log(bookDetective.getAuthorsInfo());
var bookHorror = createBook('The Fall of the House of Usher', 640, 'horror literature', [{ name: 'Edgar Allan Poe', age: 40 }]);
console.log(bookHorror.getBookInfo());
console.log(bookHorror.getAuthorsInfo());
var bookNovel = createBook('The Old Man And The Sea', 320, 'novel', [{ name: 'Ernest Miller Hemingway', age: 61 }]);
console.log(bookNovel.getBookInfo());
console.log(bookNovel.getAuthorsInfo());
var userA = { name: 'Ann', username: 'Ann1', password: 1234 };
var userB = { name: 'Olga', username: 'Olga2', password: 5678 };
var userC = { name: 'Elena', username: 'Elena3', password: 2345 };
var userD = { name: 'Julia', username: 'Julia4', password: 6789 };
var userE = { name: 'Lara', username: 'Lara5', password: 3456 };
var userF = { name: 'Lora', username: 'Lora6', password: 7890 };
var userG = { name: 'Jane', username: 'Jane7', password: 4567 };
var userH = { name: 'Nicole', username: 'Nicole8', password: 8901 };
var userI = { name: 'Helen', username: 'Helen9', password: 5678 };
var userJ = { name: 'Katy', username: 'Katy10', password: 9012 };
console.log(userA.password);
console.log(userB.password);
console.log(userC.password);
console.log(userD.password);
console.log(userE.password);
console.log(userF.password);
console.log(userG.password);
console.log(userH.password);
console.log(userI.password);
console.log(userJ.password);
var weeklyTemperature = [
    { day: 'Monday', values: { morning: 10, day: 20, night: 15 } },
    { day: 'Tuesday', values: { morning: 15, day: 25, night: 10 } },
    { day: 'Wednesday', values: { morning: 12, day: 28, night: 8 } },
    { day: 'Thursday', values: { morning: 15, day: 30, night: 18 } },
    { day: 'Friday', values: { morning: 13, day: 23, night: 17 } },
    { day: 'Saturday', values: { morning: 11, day: 26, night: 13 } },
    { day: 'Sunday', values: { morning: 18, day: 32, night: 18 } }
];
console.log(weeklyTemperature);
var coursesList = [
    { title: 'JavaScript Complex', monthDuration: 5, hourDuration: 150, modules: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Java Complex', monthDuration: 6, hourDuration: 180, modules: ['Java', 'Spring', 'Hibernate'] },
    { title: 'Python Complex', monthDuration: 6, hourDuration: 180, modules: ['Python', 'Django', 'Flask'] },
    { title: 'QA Complex', monthDuration: 4, hourDuration: 120, modules: ['Manual Testing', 'Automation Testing'] },
    { title: 'FullStack', monthDuration: 7, hourDuration: 210, modules: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'] },
    { title: 'Frontend', monthDuration: 4, hourDuration: 120, modules: ['HTML', 'CSS', 'JavaScript', 'React'] }
];
for (var _i = 0, coursesList_1 = coursesList; _i < coursesList_1.length; _i++) {
    var course = coursesList_1[_i];
    if (course.monthDuration > 5) {
        console.log('super');
    }
}
var coursesAndDuration = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (var _a = 0, coursesAndDuration_1 = coursesAndDuration; _a < coursesAndDuration_1.length; _a++) {
    var course = coursesAndDuration_1[_a];
    if (course.monthDuration > 5) {
        console.log('super');
    }
}
var status1 = 1;
if (status1 !== 0) {
    console.log('right');
}
else {
    console.log('wrong');
}
var status2 = 0;
if (status2 !== 0) {
    console.log('right');
}
else {
    console.log('wrong');
}
var status3 = -3;
if (status3 !== 0) {
    console.log('right');
}
else {
    console.log('wrong');
}
var productList = [
    { title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg' },
    { title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg' },
    { title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74' },
    { title: 'tea', price: 15, image: 'https://content1.rozetka.com.ua/goods/images/big/374140819.jpg' }
];
for (var i = 0; i < productList.length; i++) {
    var product = productList[i];
    console.log("<div class=\"product-card\">\n        <h3 class=\"product-title\">".concat(product.title, ". Price - ").concat(product.price, "</h3>\n        <img src=\"").concat(product.image, "\" alt=\"image\" class=\"product-image\">\n    </div>"));
}
