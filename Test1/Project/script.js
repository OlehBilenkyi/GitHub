//let arr = [1, 2, 3, 4, 5, 6,8,10,11];

function zalupa(num) {

  return num.toString().split("").reduce((xuy, digit)=> xuy + Number(digit), 0) 
   
}
console.log(zalupa(123));
