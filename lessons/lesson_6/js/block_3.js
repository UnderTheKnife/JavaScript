let numTask1 = 0;
let numTask2 = 0;

function task_1() {
  const result = document.getElementById('result1');
  const button = document.getElementById('button1');
  let answer = Math.sqrt(379);

  numTask1 += 1;

  if (numTask1 % 2 !== 0) {
    result.style.display = 'block';
    result.innerHTML += answer.toFixed(0) + '<br>';
    result.innerHTML += answer.toFixed(1) + '<br>';
    result.innerHTML += answer.toFixed(2) + '<br>';
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
  const obj = {floor: '', ceil: ''};

  numTask2 += 1;

  if (numTask2 % 2 !== 0) {
    result.style.display = 'block';
    obj.floor = Math.floor(Math.sqrt(587));
    obj.ceil = Math.ceil(Math.sqrt(587));

    for (let key in obj) {
      result.innerHTML += key.concat(' : ', obj[key], '<br>');
    }

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
});