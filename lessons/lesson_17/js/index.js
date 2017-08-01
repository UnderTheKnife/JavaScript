function display(num, answer) {
  let result = document.getElementById('result' + num);

  result.style.display = 'block';

  if (answer === 'clear') {
    result.innerHTML = '';
  } else {
    result.innerHTML += answer + '<br>';
  }

}

function func(arr) {
  display(1, arr[0]);
  arr.splice(0, 1);

  if (arr.length > 0) {
    func(arr);
  }

}

function func2(num) {
  let numbers = num.toString().split('');
  let result = 0;

  numbers.forEach(function (element) {
    result += parseInt(element);
  });

  display(2, result);

  if (result > 9) {
    func2(result);
  }

}

function task1() {
  display(1, 'clear');

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  func(arr);
}

function task2() {
  const num = document.getElementById('num2').value;
  display(2, 'clear');
  if (num === '') {
    display(2, 'Введите число!');
  } else {
    func2(num);
  }
}

window.addEventListener('load', () => {

  for (let id = 1; id <= 2; id += 1) {
    let result = document.getElementById(`result${id}`);
    let element = window.document.getElementById(`button${id}`);
    element.addEventListener('click', window[`task${id}`]);
    result.style.display = 'none';
  }

});
