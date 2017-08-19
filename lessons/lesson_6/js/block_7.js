let numTask1 = 0;

function task1() {
  const result = document.getElementById('result1');
  const button = document.getElementById('button1');
  const arr = [12, 15, 20, 25, 59, 79];
  let sum = 0;

  numTask1 += 1;
  if (numTask1 % 2 !== 0) {
    result.style.display = 'block';

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    result.innerHTML = sum / arr.length;
    button.innerHTML = 'Скрыть результат';
  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

function task2() {
  const result = document.getElementById('result2');
  const num = window.document.getElementById('num').value;
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  result.innerHTML = fact;

}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task1);
  window.document.getElementById('button2').addEventListener('click', task2);
});