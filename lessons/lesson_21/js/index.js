'use strict';

/*global document: false */

function getZero(num) {
  if (num > 0 && num < 10) {
    return '0' + num;
  }

  return num;
}

function showDay(day) {
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];

  return days[day];
}

function go1() {
  const elem = document.getElementById('result1');
  let date = new Date();

  elem.innerHTML = date.getDate().toString();
}

function go2() {
  const elem = document.getElementById('result2');
  let date = new Date();
  let month = date.getMonth();

  elem.innerHTML = (month + 1).toString();
}

function go3() {
  const elem = document.getElementById('result3');
  let date = new Date();

  elem.innerHTML = date.getFullYear().toString();
}

function go4() {
  const element = document.getElementById('result4');
  let date = new Date();
  let time = [date.getHours(), date.getMinutes(), date.getSeconds()];
  let fullDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()];

  for (let i = 0; i < 3; i += 1) {
    time[i] = getZero(time[i]);
    fullDate[i] = getZero(fullDate[i]);
  }

  element.innerHTML = `${time.join(':')} ${fullDate.join('.')}`;
}

function go5() {
  const elem = document.getElementById('result5');
  let date = new Date();

  elem.innerHTML = date.getDay().toString();
}

function go6() {
  const elem = document.getElementById('result6');
  let date = new Date();

  elem.innerHTML = showDay(date.getDay());
}

function go7() {
  const elem = document.getElementById('result7');
  let date = new Date(2015, 0, 7);

  elem.innerHTML = showDay(date.getDay());

}

function go8() {
  const elem = document.getElementById('result8');
  let date = new Date();
  let minutes = Math.floor(date.getTime() / (1000 * 60));

  elem.innerHTML = (minutes).toString();
}

function go9() {
  const elem = document.getElementById('result9');
  let time = Date.parse('1988-03-01T00:00:00');
  let date = new Date();
  let now = date.getTime();
  let result = (now - time) / (1000 * 60 * 60);

  elem.innerHTML = result.toFixed(2);
}

function go10() {
  const elem = document.getElementById('result10');
  let date = new Date();
  let time = new Date(date.getFullYear(), date.getMonth(),
    date.getDate(), 0, 0, 0);
  let result = Math.floor((date.getTime() - time.getTime()) / 1000);

  elem.innerHTML = result.toString();
}

function go11() {
  const elem = document.getElementById('result11');
  let date = new Date();
  let time = new Date(date.getFullYear(), date.getMonth(),
    date.getDate(), 23, 59, 59);
  let result = Math.floor((time.getTime() - date.getTime()) / 1000);

  elem.innerHTML = result.toString();
}

function go12() {
  const element = document.getElementById('button12');
  const text = document.getElementById('text12');
  const result = document.getElementById('result12');
  let birthday = new Date(element.value);
  let date = new Date();
  let year;
  let answer;
  let next;

  if (element.value !== '') {

    if (birthday.getMonth() < date.getMonth() ||
      birthday.getDate() < date.getDate()) {
      year = date.getFullYear() + 1;
    } else {
      year = date.getFullYear();
    }

    next = new Date(year, birthday.getMonth(), birthday.getDate());
    answer = Math.ceil((next - date) / (1000 * 60 * 60 * 24));

    if (!isNaN(answer)) {
      text.style.display = 'inline';
      result.innerHTML = `${answer} дней`;
    } else {
      text.style.display = 'none';
      result.innerHTML = 'Неверный формат!';
    }

  }

}

window.addEventListener('load', () => {
  let element;
  for (let id = 1; id <= 11; id += 1 ){
    element = window.document.getElementById(`button${id}`);
    element.addEventListener('click', window[`go${id}`]);
  }

  element = window.document.getElementById('button12');
  element.addEventListener('blur', go12);

});
