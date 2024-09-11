/*Задача 1: Поиск объекта по значению в массиве объектов*/
const user = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 20 },
  { name: "Sas", age: 25 },
  { name: "Vcf", age: 30 },
  { name: "ZXc", age: 20 },
];
const user1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { name: "DSa", age: 25 },
  { name: "zxc", age: 30 },
  { name: "thb", age: 20 },
];

function findKeyByValue(arr, arr2) {
  let newArr = {};
  arr.forEach((obj) => (newArr[obj.name] = { ...obj }));
  arr2.forEach((obj) => (newArr[obj.name] = { ...newArr[obj.name], ...obj }));
  return Object.values(newArr);
}

console.log(findKeyByValue(user, user1));
