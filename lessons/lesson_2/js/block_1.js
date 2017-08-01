'use strict';

function task_1() {
  const num = 3;

  alert(num);
}

function task_2() {
  const a = 10;
  const b = 2;
  let addition = a + b;
  let subtract = a - b;
  let multiply = a * b;
  let division = a / b;

  alert(`Addition : ${addition}`);
  alert(`Subtraction : ${subtract}`);
  alert(`Multiplication : ${multiply}`);
  alert(`Division : ${division}`);
}

function task_3() {
  const c = 15;
  const d = 2;
  let result = c + d;

  alert(`Result : ${result}`);
}

function task_4() {
  const a = 10;
  const b = 2;
  const c = 5;
  let addition = a + b + c;

  alert(`Addition : ${addition}`);
}

function task_5() {
  const a = 17;
  const b = 10;
  const d = 7;
  let c = a - b;
  let result = c + d;

  alert(`Result : ${result}`);
}

window.addEventListener('load',function() {
  window.document.getElementById('task1').addEventListener('click', task_1);
  window.document.getElementById('task2').addEventListener('click', task_2);
  window.document.getElementById('task3').addEventListener('click', task_3);
  window.document.getElementById('task4').addEventListener('click', task_4);
  window.document.getElementById('task5').addEventListener('click', task_5);
});
