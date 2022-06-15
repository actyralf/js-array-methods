const fruits = ["Apple", "Banana", "Kiwi"];

let result = fruits.find((fruit) => fruit === "Banana");
console.log(result);

const persons = [
  {
    firstName: "Ralf",
    age: 54,
  },
  {
    firstName: "Paul",
    age: 19,
  },
];

result = persons.find((person) => {
  return person.age < 18;
});

console.log(result);

console.log(6 < 5);
