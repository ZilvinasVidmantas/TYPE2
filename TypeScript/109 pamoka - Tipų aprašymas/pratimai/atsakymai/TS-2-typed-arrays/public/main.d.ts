declare type Person = {
    id: string;
    name: string;
    surname: string;
    age: number;
    height?: number;
    weight?: number;
};
declare const numbers: number[];
declare const names: Array<string>;
declare const people: Person[];
declare type CreatePeopleArrayFunction = (p1: Person, p2: Person) => Person[];
declare const printStrings: (strings: string[]) => void;
declare const sumNumbers: (nums: Array<number>) => number;
declare const createPeopleArray: CreatePeopleArrayFunction;
//# sourceMappingURL=main.d.ts.map