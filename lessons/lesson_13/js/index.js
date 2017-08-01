function display_table(mainId, secId, answer, count) {
  let main = document.getElementById(`result${mainId}`);
  let result = document.getElementById(`result${secId}`);
  let button = document.getElementById(`button${mainId}`);

  if (count % 2 !== 0) {
    main.style.display = 'flex ';
    result.style.marginRight = '20px';
    result.innerHTML += answer;
    button.innerHTML = 'Скрыть результат';

  } else {
    main.style.display = 'none';
    result.innerHTML = '';
    button.innerHTML = 'Показать результат';
  }
}

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

let countTask1 = 0;

function task_1() {
  let multiply;
  let secId;
  let str;

  countTask1 += 1;

  for (let i = 2; i < 10; i++) {
    secId = '1_' + i;

    for (let j = 2; j <= 10; j++) {
      multiply = i * j;
      str = `${i} * ${j} = ${multiply} <br>`;

      display_table(1, secId, str, countTask1);
    }

  }
}

function task_2() {
  let str = '';

  for (let i = 1; i < 10; i++) {
    str += i;
  }

  display(2, str);
}

function task_3() {
  let str = '';

  for (let i = 9; i > 0; i--) {
    str += i;
  }

  display(3, str);
}

function task_4() {
  let str = '-';

  for (let i = 1; i < 10; i++) {
    str += `${i}-`;
  }

  display(4, str);
}

function task_5() {
  let str = '';

  for (let i = 1; i <= 20; i++) {

    for (let j = 1; j <= i; j++) {
      str += 'x';
    }

    str += '<br>';
  }

  display(5, str);
}

function task_6() {
  let str = '';

  for (let i = 1; i <= 9; i++) {

    for (let j = 1; j <= i; j++) {
      str += j;
    }

    str += '<br>';
  }

  display(6, str);
}

function task_7() {
  let str = '';

  for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {
      str += 'xx';
    }

    str += '<br>';
  }

  display(7, str);
}

window.addEventListener('load', () => {

  for (let id = 1; id <= 7; id += 1) {
    let result = document.getElementById(`result${id}`);
    let element = window.document.getElementById(`button${id}`);
    element.addEventListener('click', window[`task_${id}`]);
    result.style.display = 'none';
  }

});