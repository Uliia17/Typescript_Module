class RectangleShape {
    constructor(public a: number, public b: number) {}

    area(): number {
        const result = this.a * this.b;
        console.log(result);
        return result;
    }
}

const rectangleShape = new RectangleShape(2, 4);
rectangleShape.area();

// --------------------------------------

class CircleShape {
    constructor(public r: number) {}

    area(): number {
        const result = 3.14 * this.r * this.r;
        console.log(result);
        return result;
    }
}

const circleShape = new CircleShape(5);
circleShape.area();

// --------------------------------------

class CylinderShape {
    constructor(public h: number, public r: number) {}

    area(): number {
        const result = 2 * 3.14 * this.r * (this.h + this.r);
        console.log(result);
        return result;
    }
}

const cylinderShape = new CylinderShape(5, 3);
cylinderShape.area();

// --------------------------------------
// Інтерфейс без модифікаторів доступу
interface User {
    id: number;  // без модифікатора
    name: string;
    age: number;
    status: boolean;
}

// Клас UsersList, що використовує public для властивості 'array'
class UsersList {
    constructor(public array: User[]) {}

    printUsers(): void {
        for (const user of this.array) {
            console.log(user);
        }
    }
}

const usersList = new UsersList([
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

class TextWriter {
    constructor(public text: string) {}

    write(): void {
        console.log(`<p>${this.text}</p>`);
    }
}

const textWriter = new TextWriter('lorem');
textWriter.write();

// --------------------------------------

class ContentWriter {
    constructor(public text: string) {}

    writeContent(): void {
        console.log(`<ul> 
<li>${this.text}</li> 
<li>${this.text}</li> 
<li>${this.text}</li> 
</ul>`);
    }
}

const contentWriter = new ContentWriter('lorem');
contentWriter.writeContent();

// --------------------------------------

class ListWriter {
    constructor(public text: string, public counter: number) {}

    writeList(): void {
        console.log(`<ul>`);
        for (let i = 0; i < this.counter; i++) {
            console.log(`<li>${this.text}</li>`);
        }
        console.log(`</ul>`);
    }
}

const listWriter = new ListWriter('Lorem ipsum dolor.', 3);
listWriter.writeList();

// --------------------------------------

class ElementWriter {
    constructor(public arrayOfPrimitives: (number | string | boolean)[]) {}

    writeElements(): void {
        console.log(`<ul>`);
        for (const element of this.arrayOfPrimitives) {
            console.log(`<li>${element}</li>`);
        }
        console.log(`</ul>`);
    }
}

const elementWriter = new ElementWriter([1, 'lorem', true, false]);
elementWriter.writeElements();

// --------------------------------------

class DocumentWriter {
    constructor(public users: User[]) {}

    writeDocuments(): void {
        for (const user of this.users) {
            console.log(`<div>${user.id} ${user.name} ${user.age}</div>`);
        }
    }
}

const documentWriter = new DocumentWriter([{ id: 1, name: 'lorem', age: 10, status: true }]);
documentWriter.writeDocuments();

// --------------------------------------

class MinimalFinder {
    constructor(public numbers: number[]) {}

    findMinimal(): number {
        let min = this.numbers[0];
        for (const number of this.numbers) {
            if (number < min) {
                min = number;
            }
        }
        return min;
    }
}

const minimalFinder = new MinimalFinder([3, 4, -33, 0]);
console.log(minimalFinder.findMinimal());

// --------------------------------------

class SumCalculator {
    constructor(public arr: number[]) {}

    calculateSum(): number {
        let total = 0;
        for (const arrElement of this.arr) {
            total = total + arrElement;
        }
        return total;
    }
}

const sumCalculator = new SumCalculator([1, 2, 10]);
console.log(sumCalculator.calculateSum());

// --------------------------------------

class ArraySwapper {
    constructor(public arr: any[], public index1: number, public index2: number) {}

    swapElements(): any[] {
        let item = this.arr[this.index1];
        this.arr[this.index1] = this.arr[this.index2];
        this.arr[this.index2] = item;
        return this.arr;
    }
}

const arraySwapper = new ArraySwapper([11, 22, 33, 44], 0, 1);
console.log(arraySwapper.swapElements());

// --------------------------------------

interface CurrencyValue {
    currency: string;
    value: number;
}

class CurrencyExchanger {
    constructor(public sumUAH: number, public currencyValues: CurrencyValue[], public exchangeCurrency: string) {}

    exchangeCurrencyValue(): number {
        let chosenCurrency: CurrencyValue | undefined;
        for (const element of this.currencyValues) {
            if (element.currency === this.exchangeCurrency) {
                chosenCurrency = element;
            }
        }
        if (chosenCurrency) {
            return this.sumUAH / chosenCurrency.value;
        }
        return 0;
    }
}

const currencyExchanger = new CurrencyExchanger(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log(currencyExchanger.exchangeCurrencyValue());
