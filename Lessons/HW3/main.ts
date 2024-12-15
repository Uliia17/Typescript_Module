interface Book {
    title: string;
    pageCount: number;
    genre: string;
}

let detectiveBook: Book = {
    title: 'The Murders in the Rue Morgue',
    pageCount: 288,
    genre: 'detective'
};
console.log(detectiveBook);

let horrorBook: Book = {
    title: 'The Fall of the House of Usher',
    pageCount: 640,
    genre: 'horror literature'
};
console.log(horrorBook);

let novelBook: Book = {
    title: 'The Old Man And The Sea',
    pageCount: 320,
    genre: 'novel'
};
console.log(novelBook);
// ------------------------------------------------
interface Author {
    name: string;
    age: number;
}

interface BookNew {
    title: string;
    pageCount: number;
    genre: string;
    authors: Author[];
    getBookInfo(): string;
    getAuthorsInfo(): string;
}

const createBook = (title: string, pageCount: number, genre: string, authors: Author[]): BookNew => {
    return {
        title,
        pageCount,
        genre,
        authors,
        getBookInfo() {
            return `${this.title}, ${this.pageCount} pages, Genre: ${this.genre}`;
        },
        getAuthorsInfo() {
            return this.authors.map(author => `${author.name}, Age: ${author.age}`).join('; ');
        }
    };
};

let bookDetective: BookNew = createBook(
    'The Murders in the Rue Morgue',
    288,
    'detective',
    [{ name: 'Edgar Allan Poe', age: 40 }]
);
console.log(bookDetective.getBookInfo());
console.log(bookDetective.getAuthorsInfo());

let bookHorror: BookNew = createBook(
    'The Fall of the House of Usher',
    640,
    'horror literature',
    [{ name: 'Edgar Allan Poe', age: 40 }]
);
console.log(bookHorror.getBookInfo());
console.log(bookHorror.getAuthorsInfo());

let bookNovel: BookNew = createBook(
    'The Old Man And The Sea',
    320,
    'novel',
    [{ name: 'Ernest Miller Hemingway', age: 61 }]
);
console.log(bookNovel.getBookInfo());
console.log(bookNovel.getAuthorsInfo());
// --------------------------------------------------
interface User3 {
    name: string;
    username: string;
    password: number;
}

let userA: User3 = { name: 'Ann', username: 'Ann1', password: 1234 };
let userB: User3 = { name: 'Olga', username: 'Olga2', password: 5678 };
let userC: User3 = { name: 'Elena', username: 'Elena3', password: 2345 };
let userD: User3 = { name: 'Julia', username: 'Julia4', password: 6789 };
let userE: User3 = { name: 'Lara', username: 'Lara5', password: 3456 };
let userF: User3 = { name: 'Lora', username: 'Lora6', password: 7890 };
let userG: User3 = { name: 'Jane', username: 'Jane7', password: 4567 };
let userH: User3 = { name: 'Nicole', username: 'Nicole8', password: 8901 };
let userI: User3 = { name: 'Helen', username: 'Helen9', password: 5678 };
let userJ: User3 = { name: 'Katy', username: 'Katy10', password: 9012 };

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
//---------------------------------------------
interface TemperatureValues {
    morning: number;
    day: number;
    night: number;
}

interface Temperature {
    day: string;
    values: TemperatureValues;
}

let weeklyTemperature: Temperature[] = [
    { day: 'Monday', values: { morning: 10, day: 20, night: 15 } },
    { day: 'Tuesday', values: { morning: 15, day: 25, night: 10 } },
    { day: 'Wednesday', values: { morning: 12, day: 28, night: 8 } },
    { day: 'Thursday', values: { morning: 15, day: 30, night: 18 } },
    { day: 'Friday', values: { morning: 13, day: 23, night: 17 } },
    { day: 'Saturday', values: { morning: 11, day: 26, night: 13 } },
    { day: 'Sunday', values: { morning: 18, day: 32, night: 18 } }
];

console.log(weeklyTemperature);
//---------------------------------------------
interface Course {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}

let coursesList: Course[] = [
    { title: 'JavaScript Complex', monthDuration: 5, hourDuration: 150, modules: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Java Complex', monthDuration: 6, hourDuration: 180, modules: ['Java', 'Spring', 'Hibernate'] },
    { title: 'Python Complex', monthDuration: 6, hourDuration: 180, modules: ['Python', 'Django', 'Flask'] },
    { title: 'QA Complex', monthDuration: 4, hourDuration: 120, modules: ['Manual Testing', 'Automation Testing'] },
    { title: 'FullStack', monthDuration: 7, hourDuration: 210, modules: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'] },
    { title: 'Frontend', monthDuration: 4, hourDuration: 120, modules: ['HTML', 'CSS', 'JavaScript', 'React'] }
];

for (let course of coursesList) {
    if (course.monthDuration > 5) {
        console.log('super');
    }
}
// -----------------------------------------------
interface CourseLast {
    title: string;
    monthDuration: number;
}

let coursesAndDuration: CourseLast[] = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

for (let course of coursesAndDuration) {
    if (course.monthDuration > 5) {
        console.log('super');
    }
}
//---------------------------------------------
interface CourseNext {
    title: string;
    monthDuration: number;
}

interface Schedule {
    day: string;
    activity: string;
}

let status1: number = 1;
if (status1 !== 0) {
    console.log('right');
} else {
    console.log('wrong');
}

let status2: number = 0;
if (status2 !== 0) {
    console.log('right');
} else {
    console.log('wrong');
}

let status3: number = -3;
if (status3 !== 0) {
    console.log('right');
} else {
    console.log('wrong');
}
// -----------------------------------------------
interface Product {
    title: string;
    price: number;
    image: string;
}

let productList: Product[] = [
    { title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg' },
    { title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg' },
    { title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74' },
    { title: 'tea', price: 15, image: 'https://content1.rozetka.com.ua/goods/images/big/374140819.jpg' }
];

for (let i: number = 0; i < productList.length; i++) {
    const product: Product = productList[i];
    console.log(`<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="image" class="product-image">
    </div>`);
}


