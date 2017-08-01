function display(num, answer, fields) {
  let result = document.getElementById(`result${num}`);
  let field;

  fields.forEach(function (element) {
    field = document.getElementById(element + num);
    field.value = '';
  });

  result.innerHTML = answer;
}

function task1() {
  const a = parseInt(document.getElementById('a1').value);
  const b = parseInt(document.getElementById('b1').value);
  const fields = ['a', 'b'];
  let answer = `${a} = ${b} ? : `;

  if (!a || !b) {
    answer = 'Введите число!';
  } else {
    answer += (a === b);
  }

  display(1, answer, fields);
}

function task2() {
  const a = parseInt(document.getElementById('a2').value);
  const b = parseInt(document.getElementById('b2').value);
  const fields = ['a', 'b'];
  let answer = `${a} + ${b} > 10 ? : `;
  let sum = a + b;

  if (!a || !b) {
    answer = 'Введите число!';
  } else {
    answer += (sum > 10);
  }

  display(2, answer, fields);
}

function task3() {
  const a = parseInt(document.getElementById('a3').value);
  const fields = ['a'];
  let answer = `${a} < 0 ? : `;

  if (!a) {
    answer = 'Введите число!';
  } else {
    answer += (a < 0);
  }
  display(3, answer, fields);

}

window.addEventListener('load', () => {
  for (let button = 1; button <= 3; button += 1) {
    let element = window.document.getElementById(`button${button}`);
    element.addEventListener('click', window[`task${button}`]);
  }
});
