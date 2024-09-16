/**Алгоритм сортировки объектов по вложенным ключам: Напиши функцию sortByNestedKey(arr, key), 
 * которая сортирует массив объектов по вложенному ключу.
 *  Например, для объекта вида { name: 'Alice', address: { city: 'NY' } }, сортировать по address.city. */


const data = [
  { name: 'Alice', address: { city: 'Boston' } },
  { name: 'Bob', address: { city: 'Chicago' } },
  { name: 'Charlie', address: { city: 'Austin' } }
];

function sortByNestedKey(arr, key) {
  const keys = key.split('.'); // Разбиваем ключ по точке
  
  return arr.sort((a, b) => {
    let aValue = a;
    let bValue = b;

    // Проходим по каждому уровню вложенности
    for (let k of keys) {
      aValue = aValue[k];
      bValue = bValue[k];
    }

    // Сравнение строк (в данном случае — названий городов)
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });
}

console.log(sortByNestedKey(data, 'address.city'));