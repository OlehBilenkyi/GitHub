let a = {
  name: "John",
  details: {
    age: 25,
    city: "New York",
  },
};

function plas(obj) {
  let res = JSON.parse(JSON.stringify(obj));
  return res;
}

console.log(plas(a));
