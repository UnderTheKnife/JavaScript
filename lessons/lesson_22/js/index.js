'use strict';
/*global document: false */

/*global window: false */

let image = 0;

function start(element, dis) {
  let func = element.getAttribute('title');
  let parent = '#' + element.parentElement.getAttribute('id');

  window[func + 'ID'] = window.setInterval(window[func], 1000, element);

  if (dis) {
    element.disabled = true;
    document.querySelector(parent + ' .stop').disabled = false;
  }

}

function stop(element, dis) {
  let timerId = element.getAttribute('title') + 'ID';
  let parent = '#' + element.parentElement.getAttribute('id');

  window.clearInterval(window[timerId]);

  if (dis) {
    element.disabled = true;
    document.querySelector(parent + ' .start').disabled = false;
  }

}

function addZero(num) {
  if (num <= 9) {
    return '0' + num;
  }

  return num;
}

function timer1() {
  const timer = document.getElementById('timer1');

  timer.innerHTML = parseInt(timer.innerHTML, 10) + 1;
}

function timer2() {
  const timer = document.getElementById('timer2');

  timer.innerHTML = parseInt(timer.innerHTML, 10) + 1;
}

function timer3() {
  const clock = document.getElementById('clock3');
  let date = new Date();
  let hours = addZero(date.getHours());
  let minutes = addZero(date.getMinutes());
  let seconds = addZero(date.getSeconds());

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function timer4(element) {
  const timer = document.getElementById('timer4');
  let number = parseInt(timer.innerHTML, 10) - 1;

  document.getElementById('stop4').innerHTML = '';
  timer.innerHTML = number;
  document.querySelector('#block4 .start').disabled = true;

  if (number === 0) {
    stop(element, 0);
    document.querySelector('#block4 .start').disabled = false;
    timer.innerHTML = 10;
    document.getElementById('stop4').innerHTML = 'Таймер окончен!';
  }

}

function timer5() {
  const img = document.getElementById('img5');

  if (image === undefined || image === 3) {
    image = 1;
  } else {
    image += 1;
  }

  img.src = 'img/smiles/' + image + '.png';
}

function timer6() {
  const img1 = document.getElementById('img6_1');
  const img2 = document.getElementById('img6_2');
  const img3 = document.getElementById('img6_3');
  let tmp;

  tmp = img1.src;
  img1.src = img2.src;
  img2.src = img3.src;
  img3.src = tmp;

  document.querySelector('#block6 .start').disabled = true;
}

function timer7() {
  let tmp;

  for (let i = 1; i < 6; i += 1) {

    if (i === 1) {
      tmp = document.getElementById(`img7_${i}`).src;
    }

    document.getElementById(`img7_${i}`).src =
      document.getElementById(`img7_${(i + 1)}`).src;
  }

  document.getElementById('img7_6').src = tmp;
}

function timer8() {
  const seconds = document.getElementById('seconds');
  const minutes = document.getElementById('minutes');
  const hours = document.getElementById('hours');
  let now = new Date();
  let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() +
    1, 0, 0, 0);
  let diff = Math.floor((midnight - now) / 1000);
  let hoursRemain = Math.floor(diff / (60 * 60));
  let minutesRemain = Math.floor((diff - hoursRemain * 60 * 60) / 60);
  let secondsRemain = Math.floor(diff % 60);

  hours.innerHTML = addZero(hoursRemain);
  minutes.innerHTML = addZero(minutesRemain);
  seconds.innerHTML = addZero(secondsRemain);
}

function onload() {
  window.timer3Id = window.setInterval(timer3, 1000);
  window.timer5Id = window.setInterval(timer5, 1000);
  window.timer8Id = window.setInterval(timer8, 1000);
}

window.addEventListener('load', () => {
  const values = [
    ['1', 'start', 0],
    ['2-start', 'start', 1],
    ['2-stop', 'stop', 1],
    ['4', 'start', 0],
    ['6', 'start', 0],
    ['7-start', 'start', 1],
    ['7-stop', 'stop', 1]
  ];

  values.forEach((elem) => {
    let element = window.document.getElementById(`button${elem[0]}`);
    element.addEventListener('click', () => {
      window[elem[1]](element, elem[2]);
    });
  });


});
