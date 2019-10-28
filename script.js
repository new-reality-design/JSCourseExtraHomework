'use strict';

let str =
  ' The night is dark and full of terrors, the day bright and beautiful and full of hope. ';
console.log(str.length); //проверка первоначальной длины
function changeString(s) {
  if (typeof str !== 'string') {
    console.log('Ой, ведь это не строка.');
  } else if (str.length <= 30) {
    return console.log((str = str.trim()));
  } else {
    return console.log((str = str.trim().substring(0, 30) + '...'));
  }
}

changeString(str);
console.log(str.length);
console.log(str.charAt(0)); //проверка первого символа
