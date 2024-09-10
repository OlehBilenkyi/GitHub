/*Задача 1: Поиск объекта по значению в массиве объектов*/
const user = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 20 },
];

function findKeyByValue(array, value) {
  for (const obj of array) {
    for (kl in obj) {
      if (value == obj[kl]);
    }
    return obj;
  }
}

console.log(findKeyByValue(user, 20));
