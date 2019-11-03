'use strict';

/**
 * 1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
 */

let arr = ['345', '242', '787', '999', '424', '100', '245'];
let arrContainer = [];

let filterNum = arr.filter(item => {
  if (item[0] === '2' || item[0] === '4') {
    return arrContainer.push(item);
  }
});
console.log('arrContainer', arrContainer);

/** 
 * 2) Вывести в столбик все простые числа от 1 до 100
— Рядом с каждым числом написать оба делителя данного числа
Например: “Делители этого числа: 1 и n”
*/
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
for (let i = 0; i < 100; i++) {
  let one = '1';
  if (isPrime(i)) {
    console.log(i, 'Делители этого числа: ' + one + ' и ' + i);
  }
}
