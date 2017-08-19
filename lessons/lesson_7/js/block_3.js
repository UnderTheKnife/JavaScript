let numTask1 = 0;

function task1() {
  const result = document.getElementById('result1');
  const button = document.getElementById('button1');
  const str = 'Я-учу-javascript!';
  let answer = (str.replace(/-/g, '!'));

  numTask1 += 1;

  if (numTask1 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML = answer;
    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task1);
});
