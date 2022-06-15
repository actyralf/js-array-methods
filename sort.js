const fruits = ["Banana", "Kiwi", "Apple", "banana"];
const numbers = [8, 2, 13, 1];
const persons = [
  {
    firstName: "Ralf",
    age: 54,
    gender: "male",
  },
  {
    firstName: "Paul",
    age: 19,
    gender: "male",
  },
  {
    firstName: "Sonja",
    age: 49,
    gender: "female",
  },
];

const sortedArray = fruits.sort();
console.log(sortedArray);

const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const sortedPersons = persons.sort((a, b) => {
  if (a.age < b.age) {
    return -1;
  } else {
    return 1;
  }
});
console.log(sortedPersons);
console.log(persons);

const betterSortedNumbers = numbers.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
});

console.log(betterSortedNumbers);
