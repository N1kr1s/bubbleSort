import { NumbersCollection } from './NumbersCollection'
import { CharacterCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const characterCollection = new CharacterCollection('Xaayb')
const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const linkedList = new LinkedList()

numbersCollection.sort()
console.log(numbersCollection.data)

characterCollection.sort()
console.log(characterCollection.data)
