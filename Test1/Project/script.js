function sortByKeys(arr, key1, key2) {
  return arr.slice().sort((a, b) => {
    if (a[key1] === b[key1]) {
      return a[key2] > b[key2] ? 1 : -1;
    }
    return a[key1] > b[key1] ? 1 : -1;
  });
}

const users = [
  { name: "John", age: 25, city: "N York" },
  { name: "Jane", age: 30, city: "London" },
  { name: "Jim", age: 25, city: "Ap" },
];

console.log(sortByKeys(users, "age", "city"));
