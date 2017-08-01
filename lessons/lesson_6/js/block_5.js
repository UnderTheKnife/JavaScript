function task_1() {
  const result = document.getElementById('result1');
  let answer = Math.floor(Math.random() * ( 100 )) + 1;

  result.innerHTML = answer.toString();
}

function task_2() {
  const result = document.getElementById('result2');
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * ( 100 )) + 1;
  }
  result.innerHTML = arr;
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task_1);
  window.document.getElementById('button2').addEventListener('click', task_2);
});