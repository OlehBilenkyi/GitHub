function sortByKeys(arr, key1, key2) {
  return arr.slice().sort((a, b) => {
    if (a[key1] === b[key1]) {
      return a[key2] > b[key2] ? 1 : -1;
    }
    return a[key1] > b[key1] ? 1 : -1;
  });
}

const users = [
  { name: "John", age: 25, city: "Nk" },
  { name: "Jane", age: 30, city: "Re" },
  { name: "Jim", age: 25, city: "Ap" },
  { name: "John", age: 25, city: "XVB" },
  { name: "Jane", age: 30, city: "Lo" },
  { name: "Jim", age: 25, city: "WAp" },
  { name: "John", age: 25, city: "TGF" },
  { name: "Jane", age: 30, city: "Gndon" },
  { name: "Jim", age: 25, city: "DFD" },
];

console.log(sortByKeys(users, "age", "city"));
