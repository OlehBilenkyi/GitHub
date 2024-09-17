// Замыкание для счетчика
// Напишите функцию createCounter(), которая возвращает функцию-счетчик.
// Каждый вызов этой функции увеличивает значение счетчика на 1.

function createCounter() {
  let creat = 0;
  if (createCounter) {
    creat += 1;
  }
  return creat;
}
console.log(createCounter());
