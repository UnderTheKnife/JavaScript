let numTask1 = 0;
let numTask2 = 0;
let numTask3 = 0;
let numTask4 = 0;

function task1() {
  const result = document.getElementById('result1');
  const button = document.getElementById('button1');

  numTask1 += 1;

  if (numTask1 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML = 'я учу javascript!'.length;
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
  const str = 'я учу javascript!';
  let substr = str.substr(1, 4);
  let substring = str.substring(2, 6);
  let slice = str.slice(1, 5);

  numTask2 += 1;

  if (numTask2 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML += `Substr : ${str.substr(1, 4)} <br>`;
    result.innerHTML += `Substring : ${str.substring(2, 6)} <br>`;
    result.innerHTML += `Slice : ${str.slice(1, 5)} <br>`;
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
  let position = 'я учу javascript!'.indexOf('учу');

  numTask3 += 1;

  if (numTask3 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML = position;
    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';
  }
}

function task4() {
  const result = document.getElementById('result4');
  const button = document.getElementById('button4');
  const str = 'я учу javascript!';
  const n = 10;
  let res;

  numTask4 += 1;

  if (numTask4 % 2 !== 0) {
    result.style.display = 'block';

    if (str.length > n) {
      res = str.substr(0, n) + '...';
    } else {
      res = str;
    }

    result.innerHTML = res;
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
  window.document.getElementById('button4').addEventListener('click', task4);
});