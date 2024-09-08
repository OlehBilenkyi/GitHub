//Напишите функцию secondLargest(arr), которая принимает массив чисел и возвращает второе наибольшее число в массиве.
// Не используйте встроенные методы сортировки.
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
/*Уровень 7: Задачи с повышенной сложностью
Задача 1: Фильтрация объектов в массиве по условию
Описание: Напишите функцию, которая принимает массив объектов и возвращает только 
те объекты, в которых значение заданного ключа больше указанного числа.*/

function filterByAge(arr, ageLimit) {
    return arr.filter(user => user.age > ageLimit);
  }
  
  const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jim", age: 20 }
  ];
  
  console.log(filterByAge(users, 21));
  // [{ name: "John", age: 25 }, { name: "Jane", age: 30 }]