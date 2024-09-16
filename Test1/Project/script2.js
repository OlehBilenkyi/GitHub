// 2. Сортировка по глубоко вложенному ключу (3 уровня)
// Есть массив данных о заказах. Отсортируй его по количеству товаров, которые находятся на третьем уровне вложенности: order.items.quantity.


const orders = [
  { id: 1, order: { items: { quantity: 5, name: 'Apple' } } },
  { id: 2, order: { items: { quantity: 2, name: 'Banana' } } },
  { id: 3, order: { items: { quantity: 10, name: 'Orange' } } }
];

function sortByNestedKey(arr,key){
const keys = key.split('.');

return arr.sort((a, b) => {
  let aValue = a;
  let bValue = b;

for(let k of keys){
  aValue = aValue[k] // на первой итации { items: { quantity: 5, name: 'Apple' } };   //{ quantity: 5, name: 'Apple' }
  bValue = bValue[k] // на первой итации { items: { quantity: 2, name: 'Banana' } };  //{ quantity: 2, name: 'Banana' }
}
if(aValue < bValue) return -1;
if(aValue > bValue) return 1;
return 0;
})
}
const sortedOrders = sortByNestedKey(orders, 'order.items.quantity');


console.log(JSON.stringify(sortedOrders,null,1));