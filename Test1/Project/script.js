myArray = [
  {name: 'Oli', age: 25},
  {name: 'Oleg', age: 30},
  {name: 'Alex', age: 25}
]

function vozrast(arr,num){
  
  const newArray = arr.filter((el)  => el.age == num) 
  return newArray
}

console.log(vozrast(myArray,30))