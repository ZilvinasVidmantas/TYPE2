declare type Person = {
    id: string;
    name: string;
    surname: string;
    age: number;
    height?: number;
    weight?: number;
};
declare const person1: Person;
declare const person2: Person;
declare const person3: Person;
declare type CreateFullname = (person: Person) => string;
declare const createFullname: CreateFullname;
declare const printCouple: (p1: Person, p2: Person) => void;
//# sourceMappingURL=main.d.ts.map