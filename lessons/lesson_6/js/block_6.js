function task_1() {
  const a = document.getElementById('a1').value;
  const b = document.getElementById('b1').value;
  const result = document.getElementById('result1');
  let abs = Math.abs(a - b);
  result.innerHTML = abs.toString();
}

function task_2() {
  const a = document.getElementById('a2').value;
  const b = document.getElementById('b2').value;
  const result = document.getElementById('result2');
  let c = Math.abs(a - b);

  result.innerHTML = c.toString();
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', task_1);
  window.document.getElementById('button2').addEventListener('click', task_2);
});