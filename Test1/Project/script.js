function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const value = obj[key];
    if (!acc[value]) {
      acc[value] = [];
    }
    acc[value].push(obj);
    return acc;
  }, {});
}

console.log(
  groupBy(
    [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Jim", age: 25 },
    ],
    "age"
  )
);
// {
//   25: [{ name: "John", age: 25 }, { name: "Jim", age: 25 }],
//   30: [{ name: "Jane", age: 30 }]
// }
