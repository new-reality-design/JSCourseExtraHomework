'use strict';

//1- Создать переменную num, вывести в консоль произведение (умножение) цифр этого числа
let num = 266219;

num = (266219).toString().split('');
let numTotal = num[0] * num[1] * num[2] * num[3] * num[4] * num[5];
console.log(numTotal);

//2- Полученный результат возвести в степень 3, используя только 1 оператор (не Math.pow)
let stringToNumber = parseInt(numTotal, 10);
console.log(stringToNumber);
console.log('Проверка значений переменных:');
console.log(typeof num);
console.log(typeof numTotal);
console.log(typeof stringToNumber);

let exponent = 3;
let result = stringToNumber ** exponent;
console.log(result);

//3- Вывести на экран первые 2 цифры полученного числа
let finalNumber = result.toString().split('');

console.log(typeof finalNumber);
console.log(finalNumber[0] + finalNumber[1]);
