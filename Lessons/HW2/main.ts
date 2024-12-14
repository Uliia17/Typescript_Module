function rectangle(a: number, b: number): number {
    const result = a * b;
    console.log(result);
    return result;
}
rectangle(2, 4);

// --------------------------------------

function circle(r: number): number {
    const result = 3.14 * r * r;
    console.log(result);
    return result;
}
circle(5);

// --------------------------------------

function cylinder(h: number, r: number): number {
    const result = 2 * 3.14 * r * (h + r);
    console.log(result);
    return result;
}
cylinder(5, 3);

// --------------------------------------

interface User {
    name: string;
    age: number;
    status: boolean;
}

function usersArray(array: User[]): void {
    for (const user of array) {
        console.log(user);
    }
}
let users: User[] = [
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

function writer(text: string): void {
    console.log(`<p>${text}</p>`);
}
writer('lorem');

// --------------------------------------

function content(text: string): void {
    console.log(`<ul> 
<li>${text}</li> 
<li>${text}</li> 
<li>${text}</li> 
</ul>`);
}
content('lorem');

// --------------------------------------

function prescription(text: string, counter: number): void {
    console.log(`<ul>`);
    for (let i = 0; i < counter; i++) {
        console.log(`<li>${text}</li>`);
    }
    console.log(`</ul>`);
}
prescription('Lorem ipsum dolor.', 3);

// --------------------------------------

function elements(arrayOfPrimitives: (number | string | boolean)[]): void {
    console.log(`<ul>`);
    for (const element of arrayOfPrimitives) {
        console.log(`<li>${element}</li>`);
    }
    console.log(`</ul>`);
}
elements([1, 'lorem', true, false]);
// --------------------------------------

interface UserWithId extends User {
    id: number;
}
function documents(users: UserWithId[]): void {
    for (const user of users) {
        console.log(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
documents([{ id: 1, name: 'lorem', age: 10, status: true }]);

// --------------------------------------

function minimal(numbers: number[]): number {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minimal([3, 4, -33, 0]));

// --------------------------------------

function sum(arr: number[]): number {
    let total = 0;
    for (const arrElement of arr) {
        total = total + arrElement;
    }
    return total;
}
console.log(sum([1, 2, 10]));

// --------------------------------------

function swap(arr: any[], index1: number, index2: number): any[] {
    let item = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = item;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));

// --------------------------------------

interface CurrencyValue {
    currency: string;
    value: number;
}

function exchange(sumUAH: number, currencyValues: CurrencyValue[], exchangeCurrency: string): number {
    let chosenCurrency: CurrencyValue | undefined;
    for (const element of currencyValues) {
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
