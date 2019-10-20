'use strict';

console.log(
  'Вариант первый- короткий способ найдённый по ссылке с несколькими вариантами:'
);

//1- Создать переменную num, вывести в консоль произведение (умножение) цифр этого числа
let num = 266219;

function originNumber(number) {
  return [...number.toString()].reduce((a, c) => a * c);
}
console.log(originNumber(num));

//2- Полученный результат возвести в степень 3, используя только 1 оператор (не Math.pow)
let stringToNumber = parseInt(originNumber(num));
console.log(stringToNumber);

let exponent = 3;
let result = stringToNumber ** exponent;
console.log(result);

//3- Вывести на экран первые 2 цифры полученного числа
let finalNumber = result.toString(10).split('');
console.log(typeof finalNumber);
console.log(finalNumber[0] + finalNumber[1]);
