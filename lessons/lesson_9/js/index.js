function display(num, answer, but) {
  let result = document.getElementById(`result${num}`);
  let button = document.getElementById(`button${num}`);
  let styles = getComputedStyle(result);

  but = (but === undefined) ? true : but;

  if (styles.display === 'none') {
    result.style.display = 'block';
    result.innerHTML = answer;

    if (but) {
      button.innerHTML = 'Скрыть результат';
    }
  } else {
    result.style.display = 'none';
    result.innerHTML = '';

    if (but) {
      button.innerHTML = 'Показать результат';
    }
  }
}

function task_1_1() {
  let str = 'hello';
  str = str[0].toUpperCase() + str.substr(1);

  display(1, str, false);
}

function task_1_2() {
  let str = 'hello';
  let answer;

  str = str.split('');
  str[0] = str[0].toUpperCase();
  answer = str.join('');

  display(1, answer, false);
}

function task_2() {
  const str = '123456';
  let answer = str.split('').reverse().join('');

  display(2, answer);
}

function task_3() {
  const num = 3751;
  let answer = num.toString(10).split('').sort().join('');

  display(3, answer);
}

function task_4() {
  const str = 'http://theory.phphtml.net/';
  let substr = str.substr(0, 7);
  let answer;

  answer = (substr === 'http://') ? 'Да' : 'Нет';

  display(4, answer);
}

function task_5() {
  const str = 'index.html';
  let substr = str.substr(-5);
  let answer;

  answer = (substr === '.html') ? 'Да' : 'Нет';

  display(5, answer);
}

window.addEventListener('load', () => {
  window.document.getElementById('button1-1').addEventListener('click', task_1_1);
  window.document.getElementById('button1-2').addEventListener('click', task_1_2);
  for (let button = 2; button <= 5; button += 1) {
    let element = window.document.getElementById(`button${button}`);
    element.addEventListener('click', window[`task_${button}`]);
  }
});
