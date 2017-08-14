/**
 * Generate new random array
 */
function getArray() {
  mainArray = [];
  let element = 0;

  for (let i = 0; i < 10; i += 1) {
    element = Math.floor((Math.random() * 100) + 1);
    mainArray.push(element);
  }

  document.getElementById('array').innerHTML = mainArray;

}

/**
 * Bubble sort
 */
function bubbleSort() {
  let array = mainArray;
  let length = array.length;
  let tmp = 0;
  let next = 0;

  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - 1; j += 1) {
      next = j + 1;

      if (array[next] < array[j]) {

        tmp = array[next];
        array[next] = array[j];
        array[j] = tmp;

      }

    }
  }

  alert(`Bubble : ${array}`);

}

/**
 * Insertion sort
 */
function insertionSort() {
  let array = mainArray;
  let length = array.length;
  let value = 0;
  let num = 0;

  for (let i = 0; i < length; i += 1) {
    value = array[i];
    num = i - 1;

    while (num >= 0 && array[num] > value) {
      array[num + 1] = array[num];
      num -= 1;
    }

    array[num + 1] = value;
  }

  alert(`Insertion : ${array}`);

}

/**
 * Shell sort
 */
function shellSort() {
  let array = mainArray;
  let length = array.length;
  let step = Math.floor(length / 2);
  let tmp = 0;
  let current = 0;

  while (step > 0) {
    for (let j = 0; j < length; j += 1) {
      current = j;
      tmp = array[j];

      while (current >= step && array[current - step] > tmp) {
        array[current] = array[current - step];
        current -= step;
      }

      array[current] = tmp;
    }

    step = Math.floor(step / 2);
  }

  alert(`Shell : ${array}`);

}

/**
 *  Create 'load' event
 */
window.addEventListener('load', () => {
  getArray();
  document.getElementById('generate').addEventListener('click', getArray);
  document.getElementById('bubble').addEventListener('click', bubbleSort);
  document.getElementById('insertion').addEventListener('click', insertionSort);
  document.getElementById('shell').addEventListener('click', shellSort);
});