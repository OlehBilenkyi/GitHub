function calculator(value) {
  let result = value;
  return {
    add: (n) => {
      result += n;
      return this;
    },
    subtract: (n) => {
      result -= n;
      return this;
    },
    multiply: (n) => {
      result *= n;
      return this;
    },
    divide: (n) => {
      result /= n;
      return this;
    },
    result: () => result,
  };
}

console.log(calculator(5).add(3).multiply(2).result()); // 16
