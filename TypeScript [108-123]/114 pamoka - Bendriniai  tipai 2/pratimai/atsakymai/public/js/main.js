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
            let current = this.head;
            let previous = current;
            while (true) {
                if (current.data === data) {
                    previous.next = current.next;
                    if (current === this.head) {
                        if (current.next === null) {
                            this.tail = null;
                        }
                        this.head = current.next;
                        return true;
                    }
                    if (current.next === null)
                        this.tail = previous;
                    else
                        this.tail = current.next;
                    return true;
                }
                ;
                if (current.next === null)
                    break;
                previous = current;
                current = current.next;
            }
            return false;
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
console.group('1. Sukurkit?? s??ra??o mazgo strukt??r?? ListNode, bet kokiam duomen?? tipui');
{
    console.log({
        listNode1: stringNode1,
        listNode2: stringNode2,
    });
}
console.groupEnd();
console.group('2. Sukurkite s??ra??o klas?? List');
{
    console.log('Tu??ias string s??ra??as');
    console.log(stringList);
    console.log('number s??ra??as');
    console.log(numberList);
}
console.groupEnd();
console.group('3. Sukurkite metod?? prid??ti s??ra??o elementui ?? s??ra??o priek??.');
{
    console.log('String s??ra??as');
    console.log(stringList);
    console.log('Pridedamas Mazgas 1', stringNodeToAdd1);
    stringList.addNodeStart(stringNodeToAdd1);
    console.log('S??ra??as po prid??jimo', Object.assign({}, stringList));
    console.log('Pridedamas Mazgas 2', stringNodeToAdd2);
    stringList.addNodeStart(stringNodeToAdd2);
    console.log('S??ra??as po prid??jimo', Object.assign({}, stringList));
    console.log('Pridedamas Mazgas 3', stringNodeToAdd3);
    stringList.addNodeStart(stringNodeToAdd3);
    console.log('S??ra??as po prid??jimo', Object.assign({}, stringList));
}
console.groupEnd();
console.group('4. Sukurkite metod?? prid??ti s??ra??o elementui ?? s??ra??o priek??.');
{
    console.log('String s??ra??as');
    console.log(numberList);
    console.log('Pridedamas Mazgas 1', numberNodeToAdd1);
    numberList.addNodeEnd(numberNodeToAdd1);
    console.log('S??ra??as po prid??jimo', Object.assign({}, numberList));
    console.log('Pridedamas Mazgas 2', numberNodeToAdd2);
    numberList.addNodeEnd(numberNodeToAdd2);
    console.log('S??ra??as po prid??jimo', Object.assign({}, numberList));
    console.log('Pridedamas Mazgas 3', numberNodeToAdd3);
    numberList.addNodeEnd(numberNodeToAdd3);
    console.log('S??ra??as po prid??jimo', Object.assign({}, numberList));
}
console.groupEnd();
console.group('5. Sukurkite metod?? List.forEach klas??je List, kuris vykdyt?? parametru perduot?? funkcij??');
{
    console.log('string s??ra??o spausdinimas');
    stringList.forEach((str) => console.log(str));
    const stringArr = [];
    const putInStringArr = (x) => {
        stringArr.push(String(x));
    };
    console.log('number s??ra??o spausdinimas');
    numberList.forEach(putInStringArr);
    const numberListStringRepresentation = stringArr.join(' ??? ');
    console.log(numberListStringRepresentation);
}
console.groupEnd();
console.group('6. Sukurkite metod?? List.toArray(): T[], kuris paverst?? s??ra???? masyvu');
{
    console.log(numberList.toArray());
    console.log(stringList.toArray());
}
console.groupEnd();
console.group('7. Sukurkite metod?? List.deleteItem(data: T): boolean, kuris i??trint?? pirm?? surast?? element?? s??ra??e');
{
    console.group('Trinamas neegzituojantis elementas');
    {
        console.log(numberList.toArray());
        console.log('trinama:', 6);
        let deleteSuccess = numberList.deleteItem(6);
        console.log(deleteSuccess ? 'i??trinta' : 'elementas nerastas');
        console.log(numberList.toArray());
    }
    console.groupEnd();
    console.group('Trinamas pirmasis elementas');
    {
        console.log('trinama:', 5);
        let deleteSuccess = numberList.deleteItem(5);
        console.log(deleteSuccess ? 'i??trinta' : 'elementas nerastas');
        console.log(numberList.toArray());
    }
    console.groupEnd();
    console.group('Trinamas vidurinis elementas');
    {
        console.log('trinama:', 1);
        let deleteSuccess = numberList.deleteItem(1);
        console.log(deleteSuccess ? 'i??trinta' : 'elementas nerastas');
        console.log(numberList.toArray());
    }
    console.groupEnd();
    console.group('Trinamas paskutinis elementas');
    {
        console.log('trinama:', 3);
        let deleteSuccess = numberList.deleteItem(3);
        console.log(deleteSuccess ? 'i??trinta' : 'elementas nerastas');
        console.log(numberList.toArray());
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map