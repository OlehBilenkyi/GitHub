// Напиши функцию removeProperty, 
// которая принимает объект и массив строк (ключей),
//  и возвращает новый объект без этих ключей.


const person = { name: "Alice", age: 25, city: "London", job: "developer" };

function removeProperty (nameObj,filtrKey){
  let newObj = newObj
  filtrKey.forEach(element => delete newObj[element]);
  return newObj
}

console.log(removeProperty(person, ['age', 'job']));