/**
 * Clear object value
 * @param {object} element
 */
function clear(element) {
  element.value = '';
}

/**
 * Disable object
 * @param {object} element
 */
function disable(element) {
  element.setAttribute('disabled', 'disabled');
}

/**
 * Enable object
 * @param {object} element
 */
function enabled(element) {
  element.removeAttribute('disabled');
}

/**
 * Add zeros to result
 */
function addZero(element) {
  element.value = (`0${element.value}`).slice(-2);
}

/**
 * Loop function from parameter
 * @param {string} func
 */
function loop(func) {
  for (let key in getValues) {

    if (getValues.hasOwnProperty(key)) {
      func(getValues[key]);
    }

  }
}

/**
 * Get seconds count
 * @returns {number}
 */
function getTime() {
  let time = 0;
  let toSeconds = 3600;

  for (let key in getValues) {

    if (getValues.hasOwnProperty(key)) {
      console.log(getValues[key].value);
      time += (parseInt(getValues[key].value) * toSeconds);
      toSeconds /= 60;

    }

  }
  return time;
}

/**
 * Stop timer
 */
function stop() {

  alert(message.value);

  loop(enabled);
  clear(message);
  message.style.display = 'inline-block';
  enabled(button);

  clearInterval(timerId);

}

/**
 * Timer
 */
function timer() {
  let time = getTime();
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (time > 0) {
    time -= 1;

    hours = time / 3600 ^ 0;
    minutes = (time - hours * 3600) / 60 ^ 0;
    seconds = time - hours * 3600 - minutes * 60;

    getValues.hours.value = hours;
    getValues.minutes.value = minutes;
    getValues.seconds.value = seconds;

    loop(addZero);
  } else {
    stop();
  }
}

/**
 * Check for errors
 * @returns {string}
 */
function isError() {
  let error = '';
  for (let key in getValues) {
    if (getValues.hasOwnProperty(key)) {

      if (!getValues[key].value) {
        getValues[key].value = '0';
      }

      if (getValues[key].value >= 60) {
        error = `Значение '${key}' на может быть больше 60!`;
      }

      if (isNaN(getValues[key].value)) {
        error = `Значение '${key}' дожно  быть числом!`;
      }

      if (getTime() === 0) {
        error = 'Заполните минимум одно поле!';
      }

      if (getValues[key].value < 0) {
        error = `Значение '${key}' не может быть отрицательным!`;
      }

    }
  }

  if (message.value === '') {
    error = 'Введите сообщение!';
  }

  return error;
}

/**
 * Start timer
 */
function start() {
  getValues = {
    'hours': document.getElementById('hours'),
    'minutes': document.getElementById('minutes'),
    'seconds': document.getElementById('seconds')
  };

  if (!isError()) {
    loop(disable);
    loop(addZero);

    message.style.display = 'none';
    disable(button);

    timerId = setInterval(timer, 1000);
  } else {
    alert(isError());
    loop(clear);
  }
}

/**
 * Add event
 */
window.addEventListener('load', () => {
  message = document.getElementById('message');
  button = document.getElementById('start');

  button.addEventListener('click', start);
});
