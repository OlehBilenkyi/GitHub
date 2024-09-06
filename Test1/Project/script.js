let myArray = [1,2,3];
let myArray2 = ['qwe','zxc']

function secondLargest(arr1,arr2) {
  return  [
      ...arr1, 
      ...arr2
      
    ]
  
}
console.log(secondLargest(myArray,myArray2));


