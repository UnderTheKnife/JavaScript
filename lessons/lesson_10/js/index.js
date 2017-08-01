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
  const fields = ['a'];
  let a = document.getElementById('a1').value;
  let answer;
  let pow = Math.pow(parseInt(a), 2);

  answer = (a === '') ? 'Введите число!' : `${a} ^ 2 = ${pow}`;

  display(1, answer, fields);
}

function task2() {
  const fields = ['a', 'b'];
  let a = parseInt(document.getElementById('a2').value);
  let b = parseInt(document.getElementById('b2').value);
  let sum = a + b;
  let answer;

  answer = (a === '' || b === '') ? 'Введите переменные!' : `${a} + ${b} = ${sum}`;

  display(2, answer, fields);
}

function task3() {
  const fields = ['a', 'b', 'c'];
  let a = parseInt(document.getElementById('a3').value);
  let b = parseInt(document.getElementById('b3').value);
  let c = parseInt(document.getElementById('c3').value);
  let answer = (a - b) / c;

  answer = (a === '' || b === '' || c === '') ? 'Введите переменные!' : `(${a}
     - ${b}) / ${c} = ${answer}`;

  display(3, answer, fields);

}

function task4() {
  const days = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ];
  const fields = ['day'];
  let day = parseInt(document.getElementById('day4').value);
  let answer;

  if (!day) {
    answer = 'Введите число!';
  } else if (day < 1 || day > 7) {
    answer = 'Число должно быть в диапазоне от 1 до 7';
  } else {
    answer = days[day - 1];
  }

  display(4, answer, fields);
}

window.addEventListener('load', () => {
  for (let button = 1; button <= 4; button += 1) {
    let element = window.document.getElementById(`button${button}`);
    element.addEventListener('click', window[`task${button}`]);
  }
});
