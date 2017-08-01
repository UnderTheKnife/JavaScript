'use strict';

function person() {
  let name = prompt('Пожалуйста, ведите ваше имя.', 'Гость');

  alert(`Ваше имя : ${name}`);
}

function number() {
  let number = prompt('Пожалуйста, ведите число.', '0');
  let pow = Math.pow(number, 2);

  alert(`Квадрат вашего числа : ${pow}`);
}

window.addEventListener('load',function() {
  window.document.getElementById('task1').addEventListener('click', person);
  window.document.getElementById('task2').addEventListener('click', number);
});