const p = 3.1415926;
const retiredAgeUrkaine = 65;
const currentYear = 2022;

//1 task
let data = prompt ('Введите радиус, будет рассчитана площадь круга!');
let dataInsquare = data*data;
let result = p*dataInsquare;
alert('Площадь круга составляет: ' + result);

//2 task
let yourYear = prompt('Введите Ваш год рождения в формате "гггг"');
let youAge = currentYear - yourYear;
alert('Прошло ' + youAge + ' лет/года.');

//3 task
let age = prompt('Введите Ваш возраст');
let leftToRetire = retiredAgeUrkaine - age;
let yearToRetire = currentYear + leftToRetire;
alert('Вам до пенсии осталось: ' + leftToRetire + ' лет/года.' + '\n' + 'Пенсию Вы начнете получать в ' + yearToRetire + ' году.');
