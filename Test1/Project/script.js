function countChars(aRRAy) {
  let newArr = [];
  for (let el of aRRAy) {
    if (newArr[el] == index) {
      newArr += [el]
    }
  }
  return newArr;
}

console.log(countChars([1, 2, 3, 2, 2, 4, 3]));
