let numTask1 = 0;
let numTask2 = 0;
let numTask3 = 0;
let numTask4 = 0;
let numTask5 = 0;
let numTask6 = 0;
let numTask7 = 0;
let numTask8 = 0;

function task_1() {
  const arr = [2, 5, 9, 15, 0, 4];
  const result = document.getElementById('result1');
  const button = document.getElementById('button1');
  let num;

  numTask1++;

  if (numTask1 % 2 !== 0) {
    result.style.display = 'block';

    for (num = 0; num < arr.length; num += 1) {

      if (arr[num] > 3 && arr[num] < 10) {
        result.innerHTML += arr[num];
        result.innerHTML += '<br>';
      }

    }

    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

function task_2() {
  const arr = [-2, 5, 9, -15, 0, 4];
  const result = document.getElementById('result2');
  const button = document.getElementById('button2');
  let sum = 0;
  let num;

  numTask2++;

  if (numTask2 % 2 !== 0) {
    result.style.display = 'block';

    for (num = 0; num < arr.length; num += 1) {

      if (arr[num] >= 0) {
        sum += arr[num];
      }

    }

    result.innerHTML = sum;
    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

function task_3() {
  const arr = [1, 2, 5, 9, 4, 13, 4, 10];
  const result = document.getElementById('result3');
  const button = document.getElementById('button3');
  let num;

  numTask3++;

  if (numTask3 % 2 !== 0) {
    result.style.display = 'block';

    for (num = 0; num < arr.length; num++) {

      if (arr[num] === 4) {
        result.innerHTML = 'Есть!';
        break;
      }

    }

    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

function task_4() {
  const arr = [10, 20, 30, 50, 235, 3000];
  const result = document.getElementById('result4');
  const button = document.getElementById('button4');
  let num;
  let str;

  numTask4++;

  if (numTask4 % 2 !== 0) {
    result.style.display = 'block';

    for (num = 0; num < arr.length; num += 1) {
      str = arr[num].toString(10);

      if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
        result.innerHTML += arr[num];
        result.innerHTML += '<br>';
      }

    }

    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

function task_5() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = document.getElementById('result5');
  const button = document.getElementById('button5');
  let num;
  let str;

  numTask5++;

  if (numTask5 % 2 !== 0) {
    result.style.display = 'block';

    for (num = 0; num < arr.length; num += 1) {

      if (num === 0) {
        str = '-';
      }

      str += arr[num] + '-';
    }

    result.innerHTML = str;
    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

function task_6() {
  const arr = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ];
  const result = document.getElementById('result6');
  const button = document.getElementById('button6');
  let num;

  numTask6++;

  if (numTask6 % 2 !== 0) {
    result.style.display = 'block';

    for (num = 0; num < arr.length; num += 1) {

      switch (arr[num]) {
      case 'Суббота' : {
        result.innerHTML += `<b> ${arr[num]} </b><br>`;
        break;
      }
      case 'Воскресенье' : {
        result.innerHTML += `<b> ${arr[num]} </b><br>`;
        break;
      }
      default  : {
        result.innerHTML += arr[num];
        result.innerHTML += '<br>';
      }
      }

    }

    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

function task_7() {
  const arr = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ];
  const days = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
  };
  const result = document.getElementById('result7');
  const button = document.getElementById('button7');
  let date = new Date();
  let day = date.getDay();
  let current = days[day];
  let num;

  numTask7++;

  if (numTask7 % 2 !== 0) {
    result.style.display = 'block';

    for (num = 0; num < arr.length; num += 1) {

      switch (arr[num]) {
      case 'Суббота' : {
        result.innerHTML += `<b> ${arr[num]} </b><br>`;
        break;
      }
      case 'Воскресенье' : {
        result.innerHTML += `<b> ${arr[num]} </b><br>`;
        break;
      }
      case current : {
        result.innerHTML += `<i> ${arr[num]} </i><br>`;
        break;
      }
      default  : {
        result.innerHTML += arr[num];
        result.innerHTML += '<br>';
      }

      }

    }

    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

function task_8() {
  const result = document.getElementById('result8');
  const button = document.getElementById('button8');
  let n = 1000;
  let num = 0;

  numTask8++;

  if (numTask8 % 2 !== 0) {
    result.style.display = 'block';

    while (n > 50) {
      n /= 2;
      result.innerHTML += n;
      result.innerHTML += '<br>';
      num += 1;

    }

    result.innerHTML += 'Количество иттераций : ' + num;
    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';

  }
}

window.addEventListener('load', () => {
  for (let button = 1; button <= 8; button += 1) {
    let element = window.document.getElementById(`button${button}`);
    element.addEventListener('click', window[`task_${button}`]);
  }
});