let myArray = [NaN];

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


