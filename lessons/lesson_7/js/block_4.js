let numTask1 = 0;
let numTask2 = 0;
let numTask3 = 0;

function task1() {
  const result = document.getElementById('result1');
  const button = document.getElementById('button1');
  const str = 'Я учу javascript!';
  const arr = str.split(' ');

  numTask1 += 1;

  if (numTask1 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML = arr;
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
  const str = 'Я учу javascript!';
  const arr = str.split('');

  numTask2 += 1;

  if (numTask2 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML = arr;
    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';
  }
}

function task3() {
  const result = document.getElementById('result3');
  const button = document.getElementById('button3');
  const date = '2025-12-31';
  const arr = date.split('-');
  let day = arr[1];
  let month = arr[2];
  let year = arr[0];

  numTask3 += 1;

  if (numTask3 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML = `${month}.${day}.${year}`;
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
  window.document.getElementById('button3').addEventListener('click', task3);
});
