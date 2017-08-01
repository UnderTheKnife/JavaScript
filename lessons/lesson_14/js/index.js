function display(num, answer) {
  let result = document.getElementById(`result${num}`);
  let button = document.getElementById(`button${num}`);
  if (result.style.display === 'none') {
    result.style.display = 'block';
    result.innerHTML = answer;
    button.innerHTML = 'Скрыть результат';
  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';
  }
}

function task1() {
  let str = 'x';
  let arr = [];

  for (let i = 1; i < 10; i++) {
    arr.push(str);
    str += 'x';
  }

  display(1, arr);
}

function task2() {
  let arr = [];
  let str;

  for (let i = 1; i < 10; i++) {
    str = '';

    for (let j = 1; j <= i; j++) {
      str += i;
    }

    arr.push(str);
  }

  display(2, arr);
}

function task3() {
  const value = document.getElementById('value3').value;
  const count = document.getElementById('count3').value;
  const result = document.getElementById('result3');
  let num = parseInt(count);
  let arr = [];
  let answer;
  let str;

  if (value === '' || count === '') {
    answer = 'Заполните поля!';
  } else if (!parseInt(count)) {
    answer = 'Количество должно быть числом!';
  } else {
    str = value;

    for (let i = 0; i < num; i++) {
      arr.push(str);
    }

    answer = arr;
  }

  result.innerHTML = answer;
  result.style.display = 'block';
}

function task4() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;
  let answer;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > 10) {
      answer = `${arr} <br> sum = ${sum} <br> ${i + 1}`;
      display(4, answer, 'none');
      break;
    }

  }

}

function task5() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    answer.push(arr[i]);
  }

  display(5, answer);
}

function task6() {
  let arr = [[1, 2, 3], [4, 5], [6]];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }

  }

  display(6, sum);
}

function task7() {
  let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {

      for (let n = 0; n < arr[i][j].length; n++) {
        sum += arr[i][j][n];
      }

    }

  }

  display(7, sum);
}

window.addEventListener('load', () => {

  for (let id = 1; id <= 7; id += 1) {
    let result = document.getElementById(`result${id}`);
    let element = window.document.getElementById(`button${id}`);
    element.addEventListener('click', window[`task${id}`]);
    result.style.display = 'none';
  }

});