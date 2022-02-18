const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];

//***MAP***
//1. Get array of all names

const charNames = characters.map(names => names.name)

//2. Get array of all heights

const charHeights = characters.map(heights => heights.height)

//3. Get array of objects with just name and height properties

const nameAndHeight = characters.map(props => {
  return{name: props.name, height: props.height}
})

//4. Get array of all first names

const firstNames = characters.map(name => { 
  return name.name.slice(0, name.name.indexOf(' '))
})

//***REDUCE***
//1. Get total mass of all characters

const totalMass = characters.reduce((acc, char) => acc + char.mass, 0)

//2. Get total height of all characters

const totalHeight = characters.reduce((acc, char) => acc + char.height, 0)

//3. Get total number of characters by eye color

const byEyeColor = (color) => characters.reduce((acc, char) => {
  char.eye_color === color ? acc++ : acc
  return acc
}, 0)

//4. Get total number of characters in all the character names
const totalChar = characters.reduce((acc, char) => acc + char.name.length,0)

//***FILTER***
//1. Get characters with mass greater than 100

const bigMass = characters.filter(char => char.mass > 100)

//2. Get characters with height less than 200

const lowHeight = characters.filter(char => char.height < 200)

//3. Get all male characters

const males = characters.filter(char => char.gender === 'male')

//4. Get all female characters

const females = characters.filter(char => char.gender === 'female')

//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((a, b) => {
  return a.mass - b.mass
})

//2. Sort by height

const sortByHeight = characters.sort((a, b) => {
  return a.height - b.height
})

//3. Sort by name

const sortByName = characters.sort((a, b) => {
  return a.name - b.name
})

//4. Sort by gender
const sortByGender = characters.sort((a, b) => {
  return a.gender - b.gender
})

//***EVERY***
//1. Does every character have blue eyes?

const everyBlueEyes = characters.every((char)  =>  {
  return char.eye_color === 'blue'})

//2. Does every character have mass more than 40?

const moreThan40 = characters.every((char) => {
  return char.mass > 40})

//3. Is every character shorter than 200?

const shorterThan200 = characters.every((char) => {
  return char.height < 200})

//4. Is every character male?

const areAllMale = characters.every((char) => {
  return char.gender === 'male'})

//***SOME***
//1. Is there at least one male character?

const isThereMale = characters.some((char) => {
  return char.gender === 'male'})

//2. Is there at least one character with blue eyes?

const someBlueEyes = characters.some((char) => {
  return char.eye_color === 'blue'})

//3. Is there at least one character taller than 210?

const heightTallerThan210 = characters.some((char) => {
  return char.height > 210})

//4. Is there at least one character that has mass less than 50?

const massLessThan50 = characters.some((char) => {
  return char.mass < 50})

//***Bonus***/
// come up with your own