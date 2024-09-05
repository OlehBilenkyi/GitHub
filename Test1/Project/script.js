// Функция для проверки, является ли строка палиндромом
function isPalindrome(str) {
  // Преобразуем строку в нижний регистр и удаляем все неалфавитные символы
  const cleanedStr = str.toLowerCase();
  
  // Функция для развертывания строки
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Проверяем, равна ли исходная строка развернутой строке
  return cleanedStr === reverseString(cleanedStr);
}

// Примеры использования
console.log(isPalindrome("A man, a plan a canal Panama")); // true
console.log(isPalindrome("Was it a car or a cat I saw")); // true
console.log(isPalindrome("hello")); // false