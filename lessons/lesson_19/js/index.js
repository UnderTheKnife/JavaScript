function alertFunc() {
  alert('Привет!');
}

function task5() {
  const elem = document.getElementById('test5').value;

  alert(elem);
}

function task6() {
  const elem = document.getElementById('test6');

  elem.value = 'Ой, я поменял свой текст!';
}

function task7() {
  const elem = document.getElementById('img7');

  elem.src = 'img/block_7,2.jpg';
}

function task8() {
  const elem = document.getElementById('button8');

  alert(elem.value);
}

function task9() {
  const elem = document.getElementById('button9');

  elem.value = 'Ой, я поменял текст!';
}

function task10() {
  const elem = document.getElementById('button10');

  elem.value = 'Ой, я поменял текст!';
}

function task10Stop() {
  const elem = document.getElementById('button10');

  elem.value = 'Ой,а теперь еще раз поменял!';
}

function task11() {
  const elem = document.getElementById('button11');

  elem.value = 'ку-ку';
}

function task12() {
  const elem = document.getElementById('button12');

  elem.value = 'О, теперь на меня больше не нажать!';
  elem.disabled = true;
}

function task13() {
  const elem = document.getElementById('button13');

  elem.src = 'img/block_7,2.jpg';
}

function task13Stop() {
  const elem = document.getElementById('button13');

  elem.src = 'img/block_7,1.jpg';
}

function task14() {
  const elem = document.getElementById('test_14');

  elem.style.color = 'red';
  elem.style.width = '500px';
}

function task15Hide() {
  const elem = document.getElementById('test_15');

  elem.style.display = 'none';
}

function task15Show() {
  const elem = document.getElementById('test_15');

  elem.style.display = 'inline-block';
}

function task16() {
  const elem = document.getElementById('test_16');

  elem.value = 'Ой, я поменял свой текст и css!';
  elem.style.width = '300px';
  elem.style.height = '50px';
  elem.style.color = 'red';
  elem.style.borderRadius = '10px';
}

function task17Block() {
  const block = document.getElementById('button17-1');
  const unblock = document.getElementById('button17-2');

  block.value = 'О, теперь на меня больше не нажать!';
  block.disabled = true;
  unblock.style.display = 'block';
}

function task17Unblock() {
  const block = document.getElementById('button17-1');
  const unblock = document.getElementById('button17-2');

  block.value = 'О, на меня снова можно нажимать!';
  block.disabled = false;
  unblock.style.display = 'none';
}

function task18() {
  const elem = document.getElementById('test_18');

  elem.value = parseInt(elem.value) + 1;
}

function task19() {
  const elem = document.getElementById('test_19');

  elem.value = 'Теперь я плаваю справа!';
  elem.style.cssFloat = 'right';
}

function task20() {
  const elem = document.getElementById('test_20');

  elem.value = 'Мои css классы: ' + elem.className;
}

function task21() {
  const test1 = document.getElementById('test21_1');
  const test2 = document.getElementById('test21_2');
  let tmp;

  tmp = test1.value;
  test1.value = test2.value;
  test2.value = tmp;
}

function task22() {
  const test = document.getElementById('test_22');
  const result = document.getElementById('result_22');
  let value = test.value;
  let pow = Math.pow(value, 2);

  result.value = pow.toString();
}

function task23() {
  const test = document.getElementById('test_23');
  const result = document.getElementById('result_23');
  let value = test.value;

  if (!isNaN(value)) {
    result.value = value * value;
  } else {
    alert('Введено не число!');
  }

}

function task24() {
  const elem = document.getElementById('button24');

  elem.disabled = true;
  elem.style.cursor = 'not-allowed';
}

function task25(text) {
  const input = document.getElementById('input_25');
  input.value = input.value + text;
}

window.addEventListener('load', () => {
  const values = [
    ['1', 'click', 'alertFunc'],
    ['2', 'mouseover', 'alertFunc'],
    ['3', 'dblclick', 'alertFunc'],
    ['4', 'mouseleave', 'alertFunc'],
    ['5', 'click', 'task5'],
    ['6', 'click', 'task6'],
    ['7', 'click', 'task7'],
    ['8', 'click', 'task8'],
    ['9', 'click', 'task9'],
    ['10', 'focus', 'task10'],
    ['10', 'blur', 'task10Stop'],
    ['11', 'click', 'task11'],
    ['12', 'click', 'task12'],
    ['13', 'mouseover', 'task13'],
    ['13', 'mouseleave', 'task13Stop'],
    ['14', 'click', 'task14'],
    ['15-1', 'click', 'task15Hide'],
    ['15-2', 'click', 'task15Show'],
    ['16', 'click', 'task16'],
    ['17-1', 'click', 'task17Block'],
    ['17-2', 'click', 'task17Unblock'],
    ['18', 'click', 'task18'],
    ['19', 'click', 'task19'],
    ['20', 'click', 'task20'],
    ['21', 'click', 'task21'],
    ['22', 'click', 'task22'],
    ['23', 'click', 'task23'],
    ['24', 'click', 'task24']
  ];
  const symbols = [
    '+', '-', '/', '*',
    '1', '2', '3', '4',
    '5', '6', '7', '8',
    '9', '0'
  ];
  const buttons = window.document.getElementsByClassName('button25');
  let element;

  for (let i = 0; i < buttons.length; i += 1) {

    let symbol = symbols[i];
    buttons[i].addEventListener('click', () => {
      task25(symbol);
    });

  }

  values.forEach(function (el) {
    element = window.document.getElementById(`button${el[0]}`);
    element.addEventListener(el[1], window[el[2]]);
  });

});
