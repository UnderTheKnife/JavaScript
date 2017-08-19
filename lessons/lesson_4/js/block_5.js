function task1() {
  const day = document.getElementById('day').value;
  let decade;

  if (day <= 10) {
    decade = 1;
  } else if (day >= 11 && day <= 20) {
    decade = 2;
  } else if (day >= 21 && day <= 31) {
    decade = 3;
  } else {
    decade = 'Unknown';
  }

  alert(`Декада : ${decade}`);
}

function task2() {
  const month = parseInt(document.getElementById('month').value, 10);
  let result;

  if (month === 12 || month <= 2) {
    result = 'Зима';
  } else if (month >= 3 && month <= 5) {
    result = 'Весна';
  } else if (month >= 6 && month <= 8) {
    result = 'Лето';
  } else if (month >= 9 && month <= 11) {
    result = 'Осень';
  } else {
    result = 'Unknown';
  }

  alert('Пора года : ' + result);
}

function task3() {
  const str = document.getElementById('string').value;
  let answer = (str[0] === 'a') ? 'Да!' : 'Нет!';

  alert(answer);
}

function task4(number) {
  const str = document.getElementById('string2').value;
  let answer = '';

  if (!isNaN(str)) {
    answer = (parseInt(str[0]) === number) ? 'Да!' : 'Нет!';
  } else {
    answer = 'Строка должна содержать число!';
  }

  alert(answer);
}

function task5() {
  const str = document.getElementById('string3').value;
  const numbers = str.split('');
  let result = 0;

  if (!isNaN(str) && str.length === 3) {

    numbers.forEach(function (element) {
      result += parseInt(element);
    });

  } else {
    result = 'Строка должна содержать 3-х значное число!';
  }

  alert(result);
}

function task6() {
  const str = document.getElementById('string4').value;
  let first = parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2]);
  let second = parseInt(str[3]) + parseInt(str[4]) + parseInt(str[5]);
  let answer;

  if (!isNaN(str) && str.length === 6) {
    answer = (first === second) ? 'Да!' : 'Нет!';
  } else {
    answer = 'Строка должна содержать 6-ти значное число!';
  }

  alert(answer);
}

window.addEventListener('load', () => {
  const values = [1, 2, 3];
  let elements;

  for (let block = 1; block <= 6; block += 1) {
    elements = window.document.getElementsByClassName(`task${block}`);

    if (elements.length > 1) {

      for (let button = 0; button < elements.length; button += 1) {
        elements[button].addEventListener('click', () => {
          window[`task${block}`](values[button]);
        });
      }

    } else {
      elements[0].addEventListener('click', window[`task${block}`]);
    }

  }
});