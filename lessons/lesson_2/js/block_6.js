'use strict';

function task1() {
  let num = 47;

  num += 7;
  num -= 18;
  num *= 10;
  num /= 15;

  alert(num);
}

function task2() {
  let num = 10;

  num++;
  num++;
  num--;

  alert(num);
}

window.addEventListener('load',function() {
  window.document.getElementById('task1').addEventListener('click', task1);
  window.document.getElementById('task2').addEventListener('click', task2);
});