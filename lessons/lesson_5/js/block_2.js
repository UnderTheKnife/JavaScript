let numTask1 = 0;
let numTask2 = 0;

function task_1() {
  const arr = [1, 2, 3, 4, 5];
  let num;

  numTask1++;

  if (numTask1 % 2 !== 0) {
    document.getElementById('result1').style.display = 'block';

    for (num = 0; num < arr.length; num += 1) {
      document.getElementById('result1').innerHTML += `${arr[num]} <br>`;
    }

    document.getElementById('button1').innerHTML = 'Скрыть результат';

  } else {
    document.getElementById('result1').style.display = 'none';
    document.getElementById('result1').innerHTML = '';
    document.getElementById('button1').innerHTML = 'Показать результат';

  }
}

function task_2() {
  const arr = [1, 2, 3, 4, 5];
  let result = 0;
  let num;

  numTask2++;

  if (numTask2 % 2 !== 0) {
    document.getElementById('result2').style.display = 'block';

    for (num = 0; num < arr.length; num += 1) {
      result += arr[num];
    }

    document.getElementById('result2').innerHTML = result.toString();
    document.getElementById('button2').innerHTML = 'Скрыть результат';

  } else {
    document.getElementById('result2').style.display = 'none';
    document.getElementById('result2').innerHTML = '';
    document.getElementById('button2').innerHTML = 'Показать результат';

  }
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task_1);
  window.document.getElementById('button2').addEventListener('click', task_2);
});