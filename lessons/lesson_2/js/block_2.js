
function task_1() {
  const str = 'Привет, Мир!';

  alert(str);
}

function task_2() {
  const str1 = 'Привет, ';
  const str2 = 'Мир!';

  alert(`${str1}${str2}`);
}

function task_3() {
  const name = 'Богдан';

  alert(`Привет, ${name}`);
}

function task_4() {
  const age = 21;
  alert(`Мне ${age} год!`);
}

window.addEventListener('load',function() {
  window.document.getElementById('task1').addEventListener('click', task_1);
  window.document.getElementById('task2').addEventListener('click', task_2);
  window.document.getElementById('task3').addEventListener('click', task_3);
  window.document.getElementById('task4').addEventListener('click', task_4);
});