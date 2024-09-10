function hasKey(array) {
  return array.every((el) => Boolean(el));
}

let allTrue = [1, true, 'string', {a: 'asd'}];

console.log(hasKey(allTrue)); // true
