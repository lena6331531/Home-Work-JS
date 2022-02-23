"use strict"
//task 1. Объём
const P_NUMBER = 3.141592653589793;

let heightСylinder = prompt('Ведите высоту циллиндра');
let diameterBaseСylinder = prompt('Введите диаметр основания циллиндра');
let volume = P_NUMBER*((diameterBaseСylinder/2)**2)*heightСylinder;
alert('Объем циллиндра составляет: ' + volume);

//task 2. Средняя прибыль
let profitPerMonthInJan = +prompt('Введите Вашу прибыль за 1 квартал/январь ');
let profitPerMonthInFeb = +prompt('Введите Вашу прибыль за 1 квартал/февравль ');
let profitPerMonthInMach = +prompt('Введите Вашу прибыль за 1 квартал/март ');
alert(((profitPerMonthInJan) + (profitPerMonthInFeb) + (profitPerMonthInMach))/3);


//task 3. Аббревиатура
  function showAbrreviation(lastName, firstName, secondName) {
      alert(lastName.charAt(0) + '.' + firstName.charAt(0) + '.' + secondName.charAt(0)); //Метод charAt - Возвращает символ указанный в index. stringName.charAt(index)
  
  }

  showAbrreviation('Карпенко', 'Елена', 'Анатольевна');

//task 4. Приветствие
function showGreeting() {
    let yourName = prompt('Внесите Ваше Имя');
    alert('Привет, ' + yourName);
}
showGreeting();

//task 5. Периметр квадрата
let squareSide = prompt('Введите сторону квадрата');
alert('Периметр квадрата равен = ' +  squareSide*4);

//task 6. Скорость
function speed() {
    let distance = prompt('Какое расстояние в км между городом А и городом Б?');
    let hour = prompt('Сколько времени в часах собиретесь потратить на дорогу? ');
        alert('Cкорость, с которой необходимо двигаться, чтобы успеть вовремя: ' + distance/hour + 'км/ч')
} 
speed();


//task 7. Наоборот - нашла в инете, не понимаю
let num = +prompt('Внесите любые цифры', '');

function getReversedNum(num) { 
  let result = 0; 
  while (num) { 
    result = result * 10 + num % 10; 
    num = Math.floor(num / 10); 
  } 
 
  return result; 
} 
 
alert(getReversedNum(num));



