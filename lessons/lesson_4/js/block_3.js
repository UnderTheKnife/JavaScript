function task_1(a) {
  let answer = (a > 0 && a < 5) ? 'Верно' : 'Неверно';

  alert(answer);
}

function task_2(a) {
  let addition = a + 7;
  let division = a / 10;
  let answer = (a === 0 || a === 2) ? addition : division;

  alert(answer);
}

function task_3(values) {
  const a = values[0];
  const b = values[1];
  let addition = a + b;
  let subtract = a - b;
  let answer = (a <= 1 &&  b >= 3) ? addition : subtract;

  alert(answer);
}

function task_4(values) {
  const a = values[0];
  const b = values[1];
  let answer = ((a > 2 && a < 11) || (b >= 6 && b < 14)) ? 'Верно' : 'Неверно';

  alert(answer);
}

window.addEventListener('load',function() {
  const values = [
    [5, 0, -3, 2],
    [5, 0, -3, 2],
    [[1, 3], [0, 6], [3, 5]],
    [3, 7]
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