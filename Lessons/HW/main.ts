let a: string = 'hello';
let b: string = 'owu';
let c: string = 'com';
let d: string = 'ua';
let e: number = 1;
let f: number = 10;
let g: number = -999;
let h: number = 123;
let i: number = 3.14;
let j: number = 2.7;
let k: number = 16;
let l: boolean = true;
let m: boolean = false;

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
let firstName: string = 'Юлія';
let middleName: string = 'Ігорівна';
let lastName: string = 'Польська';
let msg: string = firstName + ' ' + middleName + ' ' + lastName;

console.log(msg);
//--------------------------------------------
let n: number = 100;
let o: string = '100';
let p: boolean = true;

console.log(typeof n);
console.log(typeof o);
console.log(typeof p);
//--------------------------------------------
let names: string[] = ["Юлія", "Ігорівна", "33"];

let FirstName: string = names[0];
console.log(FirstName);

let MiddleName: string = names[1];
console.log(MiddleName);

let Age: string = names[2];
console.log(Age);
//---------------------------------------------
let arr: (number | string | boolean)[];

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
class Book {
    title: string;
    pageCount: number;
    genre: string;
}

let book1: Book = {
    title: 'The Murders in the Rue Morgue',
    pageCount: 288,
    genre: 'detective'
};
console.log(book1);

let book2: Book = {
    title: 'The Fall of the House of Usher',
    pageCount: 640,
    genre: 'horror literature'
};
console.log(book2);

let book3: Book = {
    title: 'The Old Man And The Sea',
    pageCount: 320,
    genre: 'novel'
};
console.log(book3);
//---------------------------------------------
class Author {
    constructor(
        public name: string,
        public age: number
    ) {}
}

class BookNew {
    constructor(
        public title: string,
        public pageCount: number,
        public genre: string,
        public authors: Author[]
    ) {}

    getBookInfo(): string {
        return `${this.title}, ${this.pageCount} pages, Genre: ${this.genre}`;
    }

    getAuthorsInfo(): string {
        return this.authors.map(author => `${author.name}, Age: ${author.age}`).join('; ');
    }
}

let book4 = new BookNew(
    'The Murders in the Rue Morgue',
    288,
    'detective',
    [new Author('Edgar Allan Poe', 40)]
);
console.log(book4.getBookInfo());
console.log(book4.getAuthorsInfo());

let book5 = new BookNew(
    'The Fall of the House of Usher',
    640,
    'horror literature',
    [new Author('Edgar Allan Poe', 40)]
);
console.log(book5.getBookInfo());
console.log(book5.getAuthorsInfo());

let book6 = new BookNew(
    'The Old Man And The Sea',
    320,
    'novel',
    [new Author('Ernest Miller Hemingway', 61)]
);
console.log(book6.getBookInfo());
console.log(book6.getAuthorsInfo());
//---------------------------------------------
class User {
    name: string;
    username: string;
    password: number;
}

let user1: User = {name: 'Ann', username: 'Ann1', password: 1234};
let user2: User = {name: 'Olga', username: 'Olga2', password: 5678};
let user3: User = {name: 'Elena', username: 'Elena3', password: 2345};
let user4: User = {name: 'Julia', username: 'Julia4', password: 6789};
let user5: User = {name: 'Lara', username: 'Lara5', password: 3456};
let user6: User = {name: 'Lora', username: 'Lora6', password: 7890};
let user7: User = {name: 'Jane', username: 'Jane7', password: 4567};
let user8: User = {name: 'Nicole', username: 'Nicole8', password: 8901};
let user9: User = {name: 'Helen', username: 'Helen9', password: 5678};
let user10: User = {name: 'Katy', username: 'Katy10', password: 9012};

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
class TemperatureValues {
    constructor(
        public morning: number,
        public day: number,
        public night: number
    ) {}
}

class Temperature {
    constructor(
        public day: string,
        public values: TemperatureValues
    ) {}
}

let temperature: Temperature[] = [
    new Temperature('Monday', new TemperatureValues(10, 20, 15)),
    new Temperature('Tuesday', new TemperatureValues(15, 25, 10)),
    new Temperature('Wednesday', new TemperatureValues(12, 28, 8)),
    new Temperature('Thursday', new TemperatureValues(15, 30, 18)),
    new Temperature('Friday', new TemperatureValues(13, 23, 17)),
    new Temperature('Saturday', new TemperatureValues(11, 26, 13)),
    new Temperature('Sunday', new TemperatureValues(18, 32, 18))
];

console.log(temperature);
class Course {
    constructor(
        public title: string,
        public monthDuration: number
    ) {}
}
//---------------------------------------------
let q: number = 0;
let r: number = 0;
if (q === r) {
    console.log('===');
} else if (q > r) {
    console.log(q);
} else if (r > q) {
    console.log(r);
}
//-------------------------------------------
let x: string | number = 0;
if (true) {
    x = 'default';
}
console.log(x);

let x1: string | null = null;
if (true) {
    x1 = 'default';
}
console.log(x1);

let x2: string | undefined = undefined;
if (true) {
    x2 = 'default';
}
console.log(x2);

let x3: string | number = NaN;
if (true) {
    x3 = 'default';
}
console.log(x3);

let x4: string = 'ok';
if (false) {
    x4 = 'default';
}
console.log(x4);
//--------------------------------------------
class CourseLast {
    constructor(
        public title: string,
        public monthDuration: number
    ) {}
}

let coursesAndDurationArray: CourseLast[] = [
    new Course('JavaScript Complex', 5),
    new Course('Java Complex', 6),
    new Course('Python Complex', 6),
    new Course('QA Complex', 4),
    new Course('FullStack', 7),
    new Course('Frontend', 4)
];

for (let course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log('super');
    }
}
//---------------------------------------------
class CourseNext {
    constructor(
        public title: string,
        public monthDuration: number
    ) {}
}

class Schedule {
    constructor(
        public day: string,
        public activity: string
    ) {}
}

let s1: number = 1;
if (s1 !== 0) {
    console.log('right');
} else {
    console.log('wrong');
}

let t2: number = 0;
if (t2 !== 0) {
    console.log('right');
} else {
    console.log('wrong');
}

let u3: number = -3;
if (u3 !== 0) {
    console.log('right');
} else {
    console.log('wrong');
}
//-----------------------------------------------
let time: number = 0;
if (time >= 0 && time <= 15) {
    console.log('quarter 1');
} else if (time > 15 && time <= 30) {
    console.log('quarter 2');
} else if (time > 30 && time <= 45) {
    console.log('quarter 3');
} else if (time > 45 && time < 60) {
    console.log('quarter 4');
}
//----------------------------------------------
let day: number = 1;
if (day >= 1 && day <= 10) {
    console.log('decade 1');
} else if (day > 10 && day <= 20) {
    console.log('decade 2');
} else if (day > 20 && day <= 31) {
    console.log('decade 3');
}
//----------------------------------------------
let scheduleOptions: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let schedule: string | null = scheduleOptions[Math.floor(Math.random() * scheduleOptions.length)];

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
for (let i: number = 0; i < 10; i++) {
    console.log(`<div>Lorem ipsum dolor sit.</div>`);
}
// ------------------------------------------------
for (let i: number = 0; i < 10; i++) {
    console.log(`<div>Lorem ipsum dolor sit. ${i}</div>`);
}
// ------------------------------------------------
let v: number = 0;
while (v < 20) {
    v++;
    console.log(`<h1>Lorem ipsum dolor.</h1>`);
}
// -------------------------------------------------
let w: number = 0;
while (w < 20) {
    console.log(`<h1>Lorem ${w}</h1>`);
    w++;
}
// ----------------------------------------------------
let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
console.log(`<ul>`);
for (const item of listOfItems) {
    console.log(`<li>${item}</li>`);
}
console.log(`</ul>`);
// ----------------------------------------------------
class Product {
    constructor(
        public title: string,
        public price: number,
        public image: string
    ) {}
}

let products: Product[] = [
    new Product('milk', 22, 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'),
    new Product('juice', 27, 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'),
    new Product('tomato', 47, 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'),
    new Product('tea', 15, 'https://content1.rozetka.com.ua/goods/images/big/374140819.jpg')
];

for (let i: number = 0; i < products.length; i++) {
    const product: Product = products[i];
    console.log(`<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="image" class="product-image">
    </div>`);
}
// ----------------------------------------------------------------------------
class User2 {
    constructor(
        public name: string,
        public age: number,
        public status: boolean
    ) {}
}

let users: User2[] = [
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

for (const user of users) {
    if (user.status) {
        console.log(user);
    }
}

for (const user of users) {
    if (!user.status) {
        console.log(user);
    }
}

for (const user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}




