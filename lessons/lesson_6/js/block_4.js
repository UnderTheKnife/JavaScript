let numTask1 = 0;

function task1() {
  const result = document.getElementById('result1');
  const button = document.getElementById('button1');
  const arr = [4, -2, 5, 19, -130, 0, 10];
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);

  numTask1 += 1;

  if (numTask1 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML += `Max : ${max}<br>`;
    result.innerHTML += `Min : ${min}<br>`;
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