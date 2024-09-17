// : Пересечение массивов
// Напишите функцию intersection(arr1, arr2), которая принимает два массива и возвращает новый массив,
//  содержащий только те элементы, которые встречаются в обоих массивах.

function intersection(arr1, arr2) {
  return arr1.filter(el => arr2.includes(el));
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
-----------------------------

function intersection(arr1, arr2) {
  return arr1.filter(el => arr2.indexOf(el) !== -1);
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
----------------------------------------

function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (found) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
---------------------------------------------

function intersection(arr1, arr2) {
  let set2 = new Set(arr2);
  return arr1.filter(el => set2.has(el));
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
--------------------------------------------