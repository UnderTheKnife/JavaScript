let numTask1 = 0;
let numTask2 = 0;
let numTask3 = 0;
let numTask4 = 0;

function task_1() {
  let num = 1;

  numTask1 += 1;

  if (numTask1 % 2 !== 0) {
    document.getElementById('result1').style.display = 'block';

    while (num <= 100) {
      document.getElementById('result1').innerHTML += `${num} <br>`;
      num += 1;
    }

    document.getElementById('button1').innerHTML = 'Скрыть результат';

  } else {
    document.getElementById('result1').style.display = 'none';
    document.getElementById('result1').innerHTML = '';
    document.getElementById('button1').innerHTML = 'Показать результат';
  }
}

function task_2() {
  let num = 11;

  numTask2 += 1;

  if (numTask2 % 2 !== 0) {
    document.getElementById('result2').style.display = 'block';

    while (num <= 33) {
      document.getElementById('result2').innerHTML += `${num} <br>`;
      num += 1;
    }

    document.getElementById('button2').innerHTML = 'Скрыть результат';

  } else {
    document.getElementById('result2').style.display = 'none';
    document.getElementById('result2').innerHTML = '';
    document.getElementById('button2').innerHTML = 'Показать результат';
  }
}

function task_3() {
  let num = 0;

  numTask3 += 1;

  if (numTask3 % 2 !== 0) {
    document.getElementById('result3').style.display = 'block';

    while (num <= 100) {

      if (num % 2 === 0) {
        document.getElementById('result3').innerHTML += `${num} <br>`;
      }

      num += 1;
    }

    document.getElementById('button3').innerHTML = 'Скрыть результат';

  } else {
    document.getElementById('result3').style.display = 'none';
    document.getElementById('result3').innerHTML = '';
    document.getElementById('button3').innerHTML = 'Показать результат';
  }
}

function task_4() {
  let num = 1;
  let sum = 0;

  numTask4 += 1;

  if (numTask4 % 2 !== 0) {
    document.getElementById('result4').style.display = 'block';

    while (num <= 100) {
      sum += num;
      num += 1;
    }

    document.getElementById('result4').innerHTML = sum;
    document.getElementById('button4').innerHTML = 'Скрыть результат';

  } else {
    document.getElementById('result4').style.display = 'none';
    document.getElementById('result4').innerHTML = '';
    document.getElementById('button4').innerHTML = 'Показать результат';
  }
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task_1);
  window.document.getElementById('button2').addEventListener('click', task_2);
  window.document.getElementById('button3').addEventListener('click', task_3);
  window.document.getElementById('button4').addEventListener('click', task_4);
});
