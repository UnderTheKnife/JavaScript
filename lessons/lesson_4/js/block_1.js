function task_1(a) {
  let answer = (a === 0) ? 'Верно' : 'Неверно';

  alert(answer);
}

function task_2(a) {
  let answer = (a > 0) ? 'Верно' : 'Неверно';

  alert(answer);
}

function task_3(a) {
  let answer = (a < 0) ? 'Верно' : 'Неверно';

  alert(answer);
}

function task_4(a) {
  let answer = (a >= 0) ? 'Верно' : 'Неверно';

  alert(answer);
}

function task_5(a) {
  let answer = (a <= 0) ? 'Верно' : 'Неверно';

  alert(answer);
}

function task_6(a) {
  let answer = (a !== 0) ? 'Верно' : 'Неверно';

  alert(answer);
}

function task_7(a) {
  let answer = (a === 'test') ? 'Верно' : 'Неверно';

  alert(answer);
}

function task_8(a) {
  let answer = (a === '1') ? 'Верно' : 'Неверно';

  alert(answer);
}


window.addEventListener('load', () => {
  const values = [
    [1, 0, -3],
    [1, 0, -3],
    [1, 0, -3],
    [1, 0, -3],
    [1, 0, -3],
    [1, 0, -3],
    ['test', 'тест', 3],
    ['1', 1, 3]
  ];
  const blockCount = 8;
  let elements;

  for (let block = 1; block <= blockCount; block += 1) {
    elements = window.document.getElementsByClassName(`task${block}`);

    for (let button = 0; button < elements.length; button += 1) {
      let property = values[block - 1][button];

      elements[button].addEventListener('click', () => {
        window[`task_${block}`](property);
      });

    }

  }
});