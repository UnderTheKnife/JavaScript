function display(num, answer, but) {
  let result = document.getElementById('result' + num);
  let button = document.getElementById('button' + num);

  but = (but === undefined) ? true : but;

  if (but) {

    if (result.style.display === 'none') {
      result.style.display = 'block';
      result.innerHTML = answer;
      button.innerHTML = 'Скрыть результат';
    } else {
      result.style.display = 'none';
      result.innerHTML = '';
      button.innerHTML = 'Показать результат';
    }

  } else {
    result.style.display = 'block';
    result.innerHTML = answer;
  }
}

function isNumberInRange(num) {
  return (num > 0 && num < 10);
}

function getDigitsSum(num) {
  let sum = 0;

  num = String(num);

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  return sum;
}

function isEven(num) {
  return (parseInt(num) % 2 === 0);
}

function isInteger(num) {
  return (num % 1 === 0);
}

function getDivisors(num) {
  let arr = [];

  for (let i = 1; i <= num; i++) {

    if (num % i === 0) {
      arr.push(i);
    }

  }

  return arr;
}

function task1() {
  let num = document.getElementById('num1').value;

  if (num === '' || !parseInt(num)) {
    display(1, 'Введите число!', false);
  } else {
    display(1, isNumberInRange(num), false);
  }

}

function task2() {
  let arr = [1, 3, 5, 6, 9, 11, 15, 30];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (isNumberInRange(arr[i])) {
      newArr.push(arr[i]);
    }

  }

  display(2, newArr);
}

function task3() {
  const num = document.getElementById('num3').value;
  let answer;

  if (num === '' || !parseInt(num)) {
    answer = 'Введите число!';
  } else if (!isInteger(num)) {
    answer = 'Число не целое!';
  } else {
    answer = getDigitsSum(num);
  }

  display(3, answer, false);
}

function task4() {
  let answer = '';

  for (let i = 1; i <= 2017; i++) {

    if (getDigitsSum(i) === 13) {
      answer += i + ' ; ';
    }

  }

  display(4, answer);
}

function task5() {
  const num = document.getElementById('num5').value;
  let answer;

  if (!parseInt(num)) {
    answer = 'Введите число!';
  } else if (!isInteger(num)) {
    answer = 'Число не целое!';
  } else {
    answer = isEven(num);
  }

  display(5, answer, false);
}

function task6() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (isEven(arr[i])) {
      newArr.push(arr[i]);
    }

  }

  display(6, newArr);
}

function task7() {
  const num = document.getElementById('num7').value;
  let answer;

  if (num === '' || !parseInt(num)) {
    answer = 'Введите число!';
  } else if (!isInteger(num)) {
    answer = 'Число не целое!';
  } else {
    answer = getDivisors(num);
  }

  display(7, answer, false);
}

window.addEventListener('load', () => {

  for (let id = 1; id <= 7; id += 1) {
    let result = document.getElementById(`result${id}`);
    let element = window.document.getElementById(`button${id}`);
    element.addEventListener('click', window[`task${id}`]);
    result.style.display = 'none';
  }

});
