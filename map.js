const fruits = ["Apple", "Banana", "Kiwi", "Banana"];
const persons = [
  {
    firstName: "Ralf",
    age: 54,
    gender: "male",
    password: "sdfkjhsdf",
  },
  {
    firstName: "Paul",
    age: 19,
    gender: "male",
    password: "sdfkjhsdf",
  },
  {
    firstName: "Sonja",
    age: 49,
    gender: "female",
    password: "sdfkjhsdf",
  },
];

const modifiedFruits = fruits.map((fruit, index) => {
  return `I am a ${fruit}!`;
});
console.log(modifiedFruits);
console.log(fruits);

const salutations = persons.map((person) => {
  let salutation;
  if (person.gender === "male") {
    salutation = "Herr";
  } else {
    salutation = "Frau";
  }
  return `Hallo ${salutation} ${person.firstName}!`;
});

console.log(salutations);
