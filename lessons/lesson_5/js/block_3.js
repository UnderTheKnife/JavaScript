let numTask1 = 0;
let numTask2 = 0;

function task1() {
  const obj = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'
  };
  let key;

  numTask1++;

  if (numTask1 % 2 !== 0) {
    document.getElementById('result1').style.display = 'block';

    for (key in obj) {
      document.getElementById('result1').innerHTML += `${key} : ${obj[key]} <br>`;
    }

    document.getElementById('button1').innerHTML = 'Скрыть результат';

  } else {
    document.getElementById('result1').style.display = 'none';
    document.getElementById('result1').innerHTML = '';
    document.getElementById('button1').innerHTML = 'Показать результат';

  }
}

function task2() {
  const obj = {
    'Kolya' : 200,
    'Vasya' : 300,
    'Petya' : 400
  };
  let key;

  numTask2++;

  if (numTask2 % 2 !== 0) {
    document.getElementById('result2').style.display = 'block';

    for (key in obj) {
      document.getElementById('result2').innerHTML += `${key} - 
        зарплата ${obj[key]} доларов.`;
      document.getElementById('result2').innerHTML += '<br>';
    }

    document.getElementById('button2').innerHTML = 'Скрыть результат';

  } else {
    document.getElementById('result2').style.display = 'none';
    document.getElementById('result2').innerHTML = '';
    document.getElementById('button2').innerHTML = 'Показать результат';

  }
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task1);
  window.document.getElementById('button2').addEventListener('click', task2);
});