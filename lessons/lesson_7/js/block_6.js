function task1() {
  const result = document.getElementById('result1');
  const str = 'я учу javascript!';

  result.innerHTML = `${str[0].toUpperCase()}${str.slice(1)}`;
}

function task2() {
  const result = document.getElementById('result2');
  const str = 'я учу javascript!';
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  result.innerHTML = arr.join(' ');
}

function task3() {
  const result = document.getElementById('result3');
  const str = 'var_test_text';
  let arr = str.split('_');

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  result.innerHTML = arr.join('');
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task1);
  window.document.getElementById('button2').addEventListener('click', task2);
  window.document.getElementById('button3').addEventListener('click', task3);
});
