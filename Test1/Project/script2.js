/*Задача 2: Найти ключ по значению в объекте
Описание: Напишите функцию, которая принимает объект и значение, и возвращает первый ключ, 
который соответствует этому значению. Если ключ не найден, функция должна вернуть сообщение "Значение не найдено".*/

const user = { name: 'John', age: 25, city: 'New York' };

function findKeyByValue(obj, value){
for( kl in obj ){
  if(value == obj[kl]) return kl 
}// 'John' == 'John'         name
}

console.log(findKeyByValue(user, 'New York'));