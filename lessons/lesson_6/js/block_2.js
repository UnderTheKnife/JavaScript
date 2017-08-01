let numTask1 = 0;
let numTask2 = 0;
let numTask3 = 0;

function task_1() {
  const result = document.getElementById('result1');
  const button = document.getElementById('button1');
  let st;

  numTask1 += 1;

  if (numTask1 % 2 !== 0) {
    result.style.display = 'block';
    st = Math.pow(2, 10);
    result.innerHTML = st;
    button.innerHTML = 'Скрыть результат';
  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';
  }
}

function task_2() {
  const result = document.getElementById('result2');
  const button = document.getElementById('button2');
  let st;

  numTask2 += 1;

  if (numTask2 % 2 !== 0) {
    result.style.display = 'block';
    st = Math.sqrt(245);
    result.innerHTML = st;
    button.innerHTML = 'Скрыть результат';
  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';
  }
}

function task_3() {
  const result = document.getElementById('result3');
  const button = document.getElementById('button3');
  const arr = [4, 2, 5, 19, 13, 0, 10];
  let sum = 0;
  let st;

  numTask3 += 1;

  if (numTask3 % 2 !== 0) {
    result.style.display = 'block';

    arr.forEach(function (element) {
      sum += Math.pow(element, 3);
    });

    st = Math.sqrt(sum);
    result.innerHTML += st;
    button.innerHTML = 'Скрыть результат';
  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';
  }
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task_1);
  window.document.getElementById('button2').addEventListener('click', task_2);
  window.document.getElementById('button3').addEventListener('click', task_3);
});