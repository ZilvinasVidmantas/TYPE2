"use strict";
class List {
    constructor(initialNode) {
        this.addNodeStart = (node) => {
            if (this.head === null) {
                this.head = node;
                this.tail = node;
            }
            else {
                node.next = this.head;
                this.head = node;
            }
        };
        this.addNodeEnd = (node) => {
            if (this.tail === null) {
                this.head = node;
                this.tail = node;
            }
            else {
                this.tail.next = node;
                this.tail = node;
            }
        };
        this.forEach = (callback) => {
            if (this.head === null)
                return;
            let currentNode = this.head;
            while (true) {
                callback(currentNode.data);
                if (currentNode.next === null)
                    break;
                currentNode = currentNode.next;
            }
        };
        this.toArray = () => {
            const arr = [];
            this.forEach(x => arr.push(x));
            return arr;
        };
        this.deleteItem = (data) => {
            if (this.head === null)
                return false;
            if (this.head.data === data) {
                if (this.head.next !== null) {
                    this.head = this.head.next;
                }
                else {
                    this.head = null;
                    this.tail = null;
                }
                return true;
            }
            let prev = this.head;
            while (true) {
                if (prev.next === null)
                    return false;
                const current = prev.next;
                if (current.data === data) {
                    if (current.next === null) {
                        prev.next = null;
                        this.tail = prev;
                    }
                    else {
                        prev.next = current.next;
                    }
                    return true;
                }
                prev = prev.next;
            }
        };
        if (initialNode !== undefined) {
            this.head = initialNode;
            this.tail = initialNode;
        }
        else {
            this.head = null;
            this.tail = null;
        }
    }
}
const stringNode1 = { data: 'labas', next: null };
const stringNode2 = { data: 'vakaras', next: stringNode1 };
const stringList = new List();
const numberNode = { data: 5, next: null };
const numberList = new List(numberNode);
const stringNodeToAdd1 = { data: 'Serbentautas', next: null };
const stringNodeToAdd2 = { data: 'Vardas', next: null };
const stringNodeToAdd3 = { data: 'Mano', next: null };
const numberNodeToAdd1 = { data: 1, next: null };
const numberNodeToAdd2 = { data: 2, next: null };
const numberNodeToAdd3 = { data: 3, next: null };
console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
    console.log({
        listNode1: stringNode1,
        listNode2: stringNode2,
    });
}
console.groupEnd();
console.group('2. Sukurkite sąrašo klasę List');
{
    console.log('Tučias string sąrašas');
    console.log(stringList);
    console.log('number sąrašas');
    console.log(numberList);
}
console.groupEnd();
console.group('3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.');
{
    console.log('String sąrašas');
    console.log(stringList);
    console.log('Pridedamas Mazgas 1', stringNodeToAdd1);
    stringList.addNodeStart(stringNodeToAdd1);
    console.log('Sąrašas po pridėjimo', Object.assign({}, stringList));
    console.log('Pridedamas Mazgas 2', stringNodeToAdd2);
    stringList.addNodeStart(stringNodeToAdd2);
    console.log('Sąrašas po pridėjimo', Object.assign({}, stringList));
    console.log('Pridedamas Mazgas 3', stringNodeToAdd3);
    stringList.addNodeStart(stringNodeToAdd3);
    console.log('Sąrašas po pridėjimo', Object.assign({}, stringList));
}
console.groupEnd();
console.group('4. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.');
{
    console.log('String sąrašas');
    console.log(numberList);
    console.log('Pridedamas Mazgas 1', numberNodeToAdd1);
    numberList.addNodeEnd(numberNodeToAdd1);
    console.log('Sąrašas po pridėjimo', Object.assign({}, numberList));
    console.log('Pridedamas Mazgas 2', numberNodeToAdd2);
    numberList.addNodeEnd(numberNodeToAdd2);
    console.log('Sąrašas po pridėjimo', Object.assign({}, numberList));
    console.log('Pridedamas Mazgas 3', numberNodeToAdd3);
    numberList.addNodeEnd(numberNodeToAdd3);
    console.log('Sąrašas po pridėjimo', Object.assign({}, numberList));
}
console.groupEnd();
console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
    console.log('string sąrašo spausdinimas');
    stringList.forEach((str) => console.log(str));
    const stringArr = [];
    const putInStringArr = (x) => {
        stringArr.push(String(x));
    };
    console.log('number sąrašo spausdinimas');
    numberList.forEach(putInStringArr);
    const numberListStringRepresentation = stringArr.join(' → ');
    console.log(numberListStringRepresentation);
}
console.groupEnd();
console.group('6. Sukurkite metodą List.toArray(): T[], kuris paverstų sąrašą masyvu');
{
    console.log(numberList.toArray());
    console.log(stringList.toArray());
}
console.groupEnd();
console.group('7. Sukurkite metodą List.deleteItem(data: T): boolean, kuris ištrintų pirmą surastą elementą sąraše');
{
    console.group('Trinamas neegzituojantis elementas');
    {
        console.log(numberList.toArray());
        console.log('trinama:', 6);
        let deleteSuccess = numberList.deleteItem(6);
        console.log(deleteSuccess ? 'ištrinta' : 'elementas nerastas');
        console.log(numberList.toArray());
    }
    console.groupEnd();
    console.group('Trinamas paskutinis elementas');
    {
        console.log('trinama:', 3);
        let deleteSuccess = numberList.deleteItem(3);
        console.log(deleteSuccess ? 'ištrinta' : 'elementas nerastas');
        console.log(numberList.toArray());
    }
    console.groupEnd();
    console.group('Trinamas vidurinis elementas');
    {
        console.log('trinama:', 1);
        let deleteSuccess = numberList.deleteItem(1);
        console.log(deleteSuccess ? 'ištrinta' : 'elementas nerastas');
        console.log(numberList.toArray());
    }
    console.groupEnd();
    console.group('Trinamas pirmasis elementas');
    {
        console.log('trinama:', 5);
        let deleteSuccess = numberList.deleteItem(5);
        console.log(deleteSuccess ? 'ištrinta' : 'elementas nerastas');
        console.log(numberList.toArray());
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map