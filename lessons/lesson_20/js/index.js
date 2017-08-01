function task1() {
  const element = document.getElementById('p1');

  element.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}

function task2() {
  const element = document.getElementById('p2');

  element.outerHTML = '<h3>Абзац превратился в h3!</h3>';
}

function task3() {
  const element = document.getElementById('p3');

  element.outerHTML = `<h3>${element.innerHTML}</h3>`;
}

function task4() {
  const a = document.getElementById('a4').value;
  const b = document.getElementById('b4').value;
  const element = document.getElementById('result4');

  element.innerHTML = parseInt(a) + parseInt(b);
}

function task5() {
  const elements = document.querySelectorAll('#block5 p');

  for (let i = 0; i < elements.length; i += 1) {
    elements[i].innerHTML = 'Ку-ку!';
  }

}

function task6() {
  const elements = document.querySelectorAll('#block6 .www');

  for (let i = 0; i < elements.length; i += 1) {
    elements[i].innerHTML = i;
  }

}

function task7() {
  const elements = document.querySelectorAll('#block_7 p.www');

  for (let i = 0; i < elements.length; i += 1) {
    elements[i].innerHTML = '!!!';
  }

}

function task8() {
  const element = document.getElementById('p8');

  alert(element.getAttribute('class'));
}

function task9Get() {
  const element = document.getElementById('p9');

  alert(element.getAttribute('class'));
}

function task9Remove() {
  const element = document.getElementById('p9');

  element.removeAttribute('class');
  alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!');
}

function task10Get() {
  const element = document.getElementById('p10');

  alert(element.getAttribute('class'));
}

function task10Set() {
  const element = document.getElementById('p10');

  element.setAttribute('class', 'new-class');
  alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!');
}

function task11() {
  const element = document.getElementById('span11');
  const input = document.getElementById('button11');
  element.innerHTML = input.value;
}


function task12() {
  const elements = document.getElementsByTagName('a');

  for (let i = 0; i < elements.length; i += 1) {
    elements[i].innerHTML += ' (' + elements[i].getAttribute('href') + ')';
  }

}

function task13() {
  const button = document.getElementById('button13');
  const element = document.getElementById('p13');

  element.innerHTML = 'Привет, мир!';
  element.setAttribute('class', 'my-class-13');
  button.innerHTML = 'О, на меня нельзя больше нажать!';
  button.disabled = true;
}

function task14() {
  const elements = document.querySelectorAll('#block_14 p');

  for (let i = 0; i < elements.length; i += 1) {
    elements[i].innerHTML = i;
  }

}

function task15() {
  const elements = document.querySelectorAll('#block_15 p');

  for (let i = 0; i < elements.length; i += 1) {
    elements[i].innerHTML = `${i}.${elements[i].innerHTML}`;
  }
}

window.addEventListener('load', () => {
  const values = [
    ['1', 'click', 'task1'],
    ['2', 'click', 'task2'],
    ['3', 'click', 'task3'],
    ['4', 'click', 'task4'],
    ['5', 'click', 'task5'],
    ['6', 'click', 'task6'],
    ['7', 'click', 'task7'],
    ['8', 'click', 'task8'],
    ['9-get', 'click', 'task9Get'],
    ['9-remove', 'click', 'task9Remove'],
    ['10-get', 'click', 'task10Get'],
    ['10-set', 'click', 'task10Set'],
    ['11', 'keyup', 'task11'],
    ['12', 'click', 'task12'],
    ['13', 'click', 'task13'],
    ['14', 'click', 'task14'],
    ['15', 'click', 'task15'],


  ];
  let element;

  values.forEach(function (el) {
    element = window.document.getElementById(`button${el[0]}`);
    element.addEventListener(el[1], window[el[2]]);
  });

});
