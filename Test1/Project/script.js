const arr = [10, 20, 30, 40, 50];

function ind(ar, num) {

  for(let i = 0; i < ar.length; i++) {
    if (ar[i] === num) {
      return i
    }
  }
  return "Значение не найдено"; 
}
console.log(ind(arr, 10));
