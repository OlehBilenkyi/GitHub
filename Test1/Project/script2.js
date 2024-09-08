//Напишите функцию secondLargest(arr), которая принимает массив чисел и возвращает второе наибольшее число в массиве.
// Не используйте встроенные методы сортировки.

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function secondLargest(arr) {
  let maxNumber = -Infinity; // Инициализируем максимальное число как -Infinity
  let secondMaxNumber = -Infinity; // Инициализируем второе максимальное число также как -Infinity



  for (let value of arr) {
    if (value > maxNumber) { // Если текущее значение больше maxNumber
      secondMaxNumber = maxNumber; // Обновляем второе максимальное значение на текущее максимальное
      maxNumber = value; // Устанавливаем новое максимальное значение
    } else if (value > secondMaxNumber && value < maxNumber) {  // проверка
      // Если текущее значение больше второго максимального и меньше текущего максимального
      secondMaxNumber = value; // Обновляем второе максимальное значение
    }   //else if нужен нам если в масиве числа не попорядку
  }

  return secondMaxNumber; // Возвращаем второе по величине число
}

console.log(secondLargest(myArray)); // Выводит: 9

/*Переменные maxNumber и secondMaxNumber инициализируются значением -Infinity, чтобы корректно обрабатывать отрицательные числа.*/
