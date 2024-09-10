function mean(array) {
  let sum = 0;
  for (let num of array) {
    if (array.length > 0) {
      sum += num;
    }
  }
  return sum / array.length;
}

console.log(mean([]));