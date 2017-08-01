let numTask1 = 0;
let numTask2 = 0;

function task1() {
  const result = document.getElementById('result1');
  const button = document.getElementById('button1');

  numTask1++;

  if (numTask1 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML = 'js'.toUpperCase();
    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

function task2() {
  const result = document.getElementById('result2');
  const button = document.getElementById('button2');

  numTask2 += 1;

  if (numTask2 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML = 'JS'.toLowerCase();
    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task1);
  window.document.getElementById('button2').addEventListener('click', task2);
});