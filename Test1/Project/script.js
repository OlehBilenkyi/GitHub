const myArray = [
  {id:1, name: 'John'},
  {id:2, name: 'Jane'},
  {id:3, name: 'Jim'},
 ]

 function change(arr) {
  let newObject = {};
    for(let i = 0, j = 1; i < arr.length; i++, j++){
     newObject[j] = arr[i]
}
return newObject
 }
 console.log(change(myArray))