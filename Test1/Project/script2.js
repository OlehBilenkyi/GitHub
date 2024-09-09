function hasKey(obj,stringKey) {
  for (key in obj){
    if(key == stringKey){
      return true 
    }
  }return false
}

const obj = { 
name: 'John',
age: 25,
city: 'New York',
name1: 'John',
color: 'New York'
};

console.log(hasKey(obj, 'color'));