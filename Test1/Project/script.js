let myArr = ["apple", "kiwi", "banana"];

function myFn(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(myFn(myArr));
