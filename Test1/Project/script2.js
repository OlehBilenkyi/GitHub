/**Объединение объектов с суммированием значений: Реализуй функцию mergeObjects(arr), которая принимает массив объектов с одинаковыми ключами,
 *  а значениями могут быть числа. Необходимо объединить объекты так, чтобы значения числовых полей суммировались. */
const objects = [
  { apples: 5, oranges: 10 },
  { apples: 3, oranges: 8 },
  { apples: 7, bananas: 5 }
];

function mergeObjects(arr) {
  let newObj = {};
  for(let obj of arr ){  
      for(let key in obj ){
          if(newObj[key]){   //      Если ключ уже существует в новом объекте (newObj[key]), это означает, что он уже встречался ранее, и его значение нужно обновить, прибавив текущее значение.
              newObj[key] += obj[key];
          } else {
              newObj[key] = obj[key]
          }
      }
  }
return newObj
}


console.log(mergeObjects(objects));

// { apples: 15, oranges: 18, bananas: 5 }