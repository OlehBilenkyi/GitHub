function countChars(aRRAy) {
  let newArr = [];
  for (let el of aRRAy) {
    let proverkaNaYnikalnost = true;
    for (let unikalnuyElement of newArr) {
      if (el === unikalnuyElement) {
        proverkaNaYnikalnost = false;
        break;
      }
    }
    if (proverkaNaYnikalnost) {
      newArr[newArr.length] = el;
    }
  }
  return newArr;
}

console.log(countChars([1, 2, 3, 2, 2, 4, 3]));
