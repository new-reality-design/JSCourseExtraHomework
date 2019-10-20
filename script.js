'use strict';

//1- Создать переменную num, вывести в консоль произведение (умножение) цифр этого числа

let num = 266219;

let array1 = num.toString().split('');
let reducer = (accumulator, currentValue) => accumulator * currentValue;

console.log(
  'Вариант второй- к этому решению я пришла почитав ещё раз о методе reduce() на MDN.Mozilla.'
);
console.log(
  'Но мне кажется он не очень синтаксически корректен- JSHint ругается на "reducer":'
);
//console.log(typeof array1);
console.log(array1.reduce(reducer));

//2- Полученный результат возвести в степень 3.
let stringToNumber = parseInt(array1.reduce(reducer));
let exponent = 3;
let result = stringToNumber ** exponent;

//3- Вывести на экран первые 2 цифры полученного числа
let finalNumber = result.toString().split('');
//console.log(typeof finalNumber);
console.log(finalNumber[0] + finalNumber[1]);
