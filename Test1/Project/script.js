function filterByAge(arr, ageLimit) {
  return arr.filter((user) => user.age > ageLimit);
}

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 20 },
];

console.log(filterByAge(users, 21));
// [{ name: "John", age: 25 }, { name: "Jane", age: 30 }]
