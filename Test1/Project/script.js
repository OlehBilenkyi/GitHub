function sortByNestedLikes(arr, key) {
  // Разбиваем ключ по точкам на массив
  const keys = key.split('.');

  // Сортируем массив с помощью функции сравнения
  return arr.sort((a, b) => {
    // Изначально aValue и bValue — это сами объекты
    let aValue = a;
    let bValue = b;

    // Проходим по каждому уровню вложенности ключа
    for (let k of keys) {
      aValue = aValue[k];
      bValue = bValue[k];
    }

    // Сравнение значений
    if (aValue < bValue) return -1; // Если a меньше b
    if (aValue > bValue) return 1;  // Если a больше b
    return 0;                        // Если значения равны
  });
}

const posts = [
  { title: 'Post 1', stats: { likes: 120 } },
  { title: 'Post 2', stats: { likes: 80 } },
  { title: 'Post 3', stats: { likes: 200 } }
];

// Пример использования функции
const sortedPosts = sortByNestedLikes(posts, 'stats.likes');

console.log(sortedPosts);
