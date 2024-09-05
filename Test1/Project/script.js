let myArr = [1, 2, 5, 5];

function myFn(arr, num) {
  const newArray = arr.filter((el) => el == num).length;
  return newArray;
}

console.log(myFn(myArr, 5));
