function display(num, answer, but) {
  let result = document.getElementById('result' + num);
  let button = document.getElementById('button' + num);

  but = (but === undefined) ? true : but;

  if (but === true) {

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

function ucfirst(str) {
  return `${str[0].toUpperCase()}${str.substr(1)}`;
}

function inArray(str, arr) {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === str) {
      return true;
    }

  }
  return false;
}

function task1() {
  const str = document.getElementById('string1').value;
  let arr = str.split(' ');
  let newArr = [];
  let answer;

  if (str === '') {
    answer = 'Заполните строку!';
  } else {

    for (let i = 0; i < arr.length; i++) {
      newArr.push(ucfirst(arr[i]));
    }

    answer = newArr.join(' ');
  }

  display(1, answer, false);
}

function task2() {
  const str = 'var_text_hello';
  let arr = str.split('_');
  let newArr = [];
  let newStr;

  for (let i = 1; i < arr.length; i++) {
    newArr.push(ucfirst(arr[i]));
  }

  newStr = arr[0] + newArr.join('');
  display(2, newStr, true);
}

function task3() {
  const str = document.getElementById('string3-1').value;
  const substr = document.getElementById('string3-2').value;
  let answer;
  let arr;

  if (str === '' || substr === '') {
    answer = 'Заполните строки!';
  } else {
    arr = str.split(',');
    answer = inArray(substr, arr);
  }

  display(3, answer, false);
}

function task4() {
  const str = '123456';
  let arr = str.split('');
  let answer;
  let x;

  for (let i = 0; i < arr.length; i += 2) {
    x = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = x;
  }

  answer = arr.join('');
  display(4, answer);
}

window.addEventListener('load', () => {

  for (let id = 1; id <= 4; id += 1) {
    let result = document.getElementById(`result${id}`);
    let element = window.document.getElementById(`button${id}`);
    element.addEventListener('click', window[`task${id}`]);
    result.style.display = 'none';
  }

});
