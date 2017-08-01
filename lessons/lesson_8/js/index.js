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
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  let answer = arr1.concat(arr2);

  display(1, answer);
}

function task_2() {
  const arr = [1, 2, 3];
  let answer = arr.reverse();

  display(2, answer);
}

function task_3() {
  let arr = [1, 2, 3];

  arr.push(4, 5, 6);

  display(3, arr);

}

function task_4() {
  let arr = [1, 2, 3];

  arr.unshift(4, 5, 6);

  display(4, arr);
}

function task_5() {
  const arr = ['js', 'css', 'jq'];
  let answer = arr.shift();

  display(5, answer);
}

function task_6() {
  const arr = ['js', 'css', 'jq'];
  let answer = arr.pop();

  display(6, answer);
}

function task_7() {
  const arr = [1, 2, 3, 4, 5];
  let answer = arr.slice(0, 3);

  display(7, answer);
}

function task_8() {
  const arr = [1, 2, 3, 4, 5];
  let answer = arr.slice(-2);

  display(8, answer);
}

function task_9() {
  let arr = [1, 2, 3, 4, 5];

  arr.splice(1, 2);

  display(9, arr);
}

function task_10() {
  const arr = [1, 2, 3, 4, 5];
  let answer = arr.splice(1, 3);

  display(10, answer);
}

function task_11() {
  let arr = [1, 2, 3, 4, 5];

  arr.splice(3, 0, 'a', 'b', 'c');

  display(11, arr);
}

function task_12() {
  let arr = [1, 2, 3, 4, 5];

  arr.splice(1, 0, 'a', 'b');
  arr.splice(6, 0, 'c');
  arr.splice(8, 0, 'e');

  display(12, arr);
}

function task_13() {
  const arr = [3, 4, 1, 2, 7];
  let answer = arr.sort();

  display(13, answer);
}

function task_14() {
  const arr = {
    js: 'test',
    jq: 'hello',
    css: 'world'
  };
  let answer = Object.keys(arr);

  display(14, answer);
}

window.addEventListener('load', () => {
  for (let button = 1; button <= 14; button += 1) {
    let element = window.document.getElementById(`button${button}`);
    element.addEventListener('click', window[`task_${button}`]);
  }
});
