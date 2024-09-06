let myArray = [11,1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12];

function secondLargest(arr) {
  let maxNumber = -Infinity;
  let secondMaxNumber = -Infinity;

  for (let value of arr) {
    if (value > maxNumber) {
      secondMaxNumber = maxNumber; 
      maxNumber = value;
    } else if (value > secondMaxNumber && value < maxNumber) { 
      secondMaxNumber = value;
    }
  }
 return secondMaxNumber; 
}
console.log(secondLargest(myArray));


