function chain(fns) {
  return function (arg) {
    return fns.reduce((result, fn) => fn(result), arg);
  };
}

const double = (x) => x * 2;
const square = (x) => x ** 2;

const chainedFunction = chain([double, square]);
console.log(chainedFunction(3)); // 36 (сначала удвоение, затем возведение в квадрат)
