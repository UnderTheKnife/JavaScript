function display(num, answer) {
  let result = document.getElementById(`result${num}`);
  let button = document.getElementById(`button${num}`);
  let styles = getComputedStyle(result);

  if (styles.display === 'none') {
    result.style.display = 'block';
    result.innerHTML = answer;
    button.innerHTML = 'Скрыть результат';

  } else {
    result.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';
  }
}

function task_1() {
  const arr = [1, 2, 3, 5];
  let flag = false;
  let answer = `${arr} <br><br>`;

  arr.forEach(function (element) {
    flag = (element === 5) ? true : flag;
  });

  answer += (flag) ? 'Да' : 'Нет';

  display(1, answer);
}

function task_2() {
  const num = 31;
  let flag = false;

  for (let i = 2; i < num; i++) {
    flag = (num % i) ? flag : true;
  }

  display(2, flag);
}

function task_3() {
  const arr = [1, 2, 3, 3, 5];
  let flag = false;
  let answer = `${arr} <br><br>`;

  for (let i = 1; i < arr.length; i++) {
    flag = (arr[i] === arr[i - 1]) ? true : flag;
  }

  answer += (flag) ? 'Да' : 'Нет';

  display(3, answer);
}

window.addEventListener('load', () => {
  for (let button = 1; button <= 3; button += 1) {
    let element = window.document.getElementById(`button${button}`);
    element.addEventListener('click', window[`task_${button}`]);
  }
});
