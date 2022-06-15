const fruits = ["Apple", "Banana", "Kiwi", "Banana"];
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

let results = fruits.filter((fruit) => {
  return fruit === "Banana";
});

console.log(results);
console.log(results.length);

results = persons.filter((person) => {
  return person.gender === "female";
});
console.log("Filtered persons:");
console.log(results);
console.log(results.length);
console.log("All persons:");
console.log(persons);
console.log(persons.length);
