'use strict';

function task_1() {
  const arr = ['a', 'b', 'c'];

  alert(arr);
}

function task_2() {
  const arr = ['a', 'b', 'c'];
  let num;

  for (num = 0; num < 3; num += 1) {
    alert(arr[num]);
  }
}

function task_3() {
  const arr = ['a', 'b', 'c', 'd'];

  alert(`${arr[0]}+${arr[1]}; ${arr[2]}+${arr[3]}`);
}

function task_4() {
  const arr = [2, 5, 3, 9];
  let result = arr[0] * arr[1] + arr[2] * arr[3];

  alert(result);
}

window.addEventListener('load',function() {
  window.document.getElementById('task1').addEventListener('click', task_1);
  window.document.getElementById('task2').addEventListener('click', task_2);
  window.document.getElementById('task3').addEventListener('click', task_3);
  window.document.getElementById('task4').addEventListener('click', task_4);
});
