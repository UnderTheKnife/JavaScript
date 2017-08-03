/**
 * clear object value
 * @param {object} element
 */
function clear(element) {
  element.value = '';
}

/**
 * disable object
 * @param {object} element
 */
function disable(element) {
  element.setAttribute('disabled', 'disabled');
}

/**
 * enable object
 * @param {object} element
 */
function enabled(element) {
  element.removeAttribute('disabled');
}

/**
 * loop function from parameter
 * @param {string} func
 */
function loop(func) {
  for (let key in window.get) {

    if (window.get.hasOwnProperty(key)) {
      window[func](window.get[key]);
    }

  }
}

/**
 * get seconds count
 * @returns {number}
 */
function getTime() {
  let time = 0;
  let toSeconds = 3600;

  for (let key in window.get) {

    if (window.get.hasOwnProperty(key)) {
      time += (parseInt(window.get[key].value) * toSeconds);
      toSeconds /= 60;
    }

  }

  return time;
}

/**
 * add zeros to result
 */
function addZero() {
  for (let key in window.get) {

    if (window.get.hasOwnProperty(key)) {

      if (window.get[key].value === '') {
        window.get[key].value = '00';
      }

      if (window.get[key].value < 10 && window.get[key].value !== '00') {
        window.get[key].value = `0${ window.get[key].value}`;
      }

    }

  }
}

/**
 * stop timer
 */
function stop() {
  window.clearInterval(window.timerId);

  alert(window.message.value);

  loop('enabled');
  window.message.value = '';
  window.message.style.display = 'inline-block';
  enabled(window.button);
}


/**
 * timer
 */
function timer() {
  let time = getTime();
  let hours;
  let minutes;
  let seconds;

  if (time !== 0) {
    time -= 1;

    hours = time / 3600 ^ 0;
    minutes = (time - hours * 3600) / 60 ^ 0;
    seconds = time - hours * 3600 - minutes * 60;

    window.get.hours.value = hours;
    window.get.minutes.value = minutes;
    window.get.seconds.value = seconds;

    addZero();
  } else {
    stop();
  }
}

/**
 * check for errors
 * @returns {string}
 */
function isError() {
  let error = 'none';
  for (let key in window.get) {
    if (window.get.hasOwnProperty(key)) {

      if (window.message.value === '') {
        error = 'Введите сообщение!';
      }

      if (isNaN(window.get[key].value)) {
        error = 'Значение дожно быть числом!';
      }

      if (getTime() === 0) {
        error = 'Заполните минимум одно поле!';
      }

      if (window.get[key].value < 0) {
        error =  'Значение не может быть отрицательным!';
      }

      if (key !== 'hours' && window.get[key].value >= 60) {
        error =  'Значение на может быть больше 60!';
      }

    }
  }

  return error;
}

/**
 * start timer
 */
function start() {
  addZero();

  if (isError() !== 'none') {
    alert(isError());
    loop('clear');
  } else {
    loop('disable');
    window.message.style.display = 'none';
    disable(window.button);

    window.timerId = window.setInterval(timer, 1000);
  }
}

/**
 * add event
 */
window.addEventListener('load', () => {
  window.get = {
    'hours': window.document.getElementById('hours'),
    'minutes': window.document.getElementById('minutes'),
    'seconds': window.document.getElementById('seconds')
  };
  window.message = window.document.getElementById('message');
  window.button = window.document.getElementById('start');

  window.button.addEventListener('click', start);
});