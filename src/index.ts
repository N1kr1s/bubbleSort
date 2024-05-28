import { Sorter } from './sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharacterCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const characterCollection = new CharacterCollection('Xaayb')
const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

// const sorter = new Sorter(characterCollection)
// sorter.sort()
// console.log(characterCollection.data)

const sorter = new Sorter(linkedList)
sorter.sort()
linkedList.print()
