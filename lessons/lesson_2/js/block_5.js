'use strict';

function task_1() {
  let hour = 60 * 60;
  let day = hour * 24;
  let month = day * 30;

  alert(`Number of seconds in one hour : ${hour}`);
  alert(`Number of seconds in one day : ${day}`);
  alert(`Number of seconds in one month : ${month}`);
}

function task_2() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  alert(`${hours} : ${minutes} : ${seconds}`);
}

function task_3() {
  const number = 12;
  let pow = Math.pow(number, 2);
  alert(pow);
}

window.addEventListener('load',function() {
  window.document.getElementById('task1').addEventListener('click', task_1);
  window.document.getElementById('task2').addEventListener('click', task_2);
  window.document.getElementById('task3').addEventListener('click', task_3);
});