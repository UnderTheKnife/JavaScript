
function task1() {
  const str = 'Привет, Мир!';

  alert(str);
}

function task2() {
  const str1 = 'Привет, ';
  const str2 = 'Мир!';

  alert(`${str1}${str2}`);
}

function task3() {
  const name = 'Богдан';

  alert(`Привет, ${name}`);
}

function task4() {
  const age = 21;
  alert(`Мне ${age} год!`);
}

window.addEventListener('load',function() {
  window.document.getElementById('task1').addEventListener('click', task1);
  window.document.getElementById('task2').addEventListener('click', task2);
  window.document.getElementById('task3').addEventListener('click', task3);
  window.document.getElementById('task4').addEventListener('click', task4);
});