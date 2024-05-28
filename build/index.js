"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const characterCollection = new CharactersCollection_1.CharacterCollection('Xaayb');
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)
// const sorter = new Sorter(characterCollection)
// sorter.sort()
// console.log(characterCollection.data)
const sorter = new sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
