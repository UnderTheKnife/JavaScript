let numTask1 = 0;

function task_1() {
  const result = document.getElementById('result1');
  const button = document.getElementById('button1');
  const a = 10;
  const b = 3;
  let division = a % b;

  numTask1++;

  if (numTask1 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML = `a % b = ${division}`;
    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

function task_2() {
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const result = document.getElementById('result2');
  let answer;

  result.style.display = 'block';
  answer = (a % b === 0) ? 'Делится.' : 'Делится с остатком.';
  result.innerHTML = answer;
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task_1);
  window.document.getElementById('button2').addEventListener('click', task_2);
});