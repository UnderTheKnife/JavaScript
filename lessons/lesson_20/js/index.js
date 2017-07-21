function go_1() {
  var element = document.getElementById('p1');
  element.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}

function go_2() {
  var element = document.getElementById('p2');
  element.outerHTML = '<h3>Абзац превратился в h3!</h3>'
}

function go_3() {
  var element = document.getElementById('p3');
  element.outerHTML = '<h3>' + element.innerHTML + '</h3>';
}

function go_4(a,b) {
  var element = document.getElementById('result4');
  element.innerHTML = parseInt(a) + parseInt(b);
}

function go_5() {
  var elements = document.getElementsByTagName('p');
  for (var i = 3; i <= 6; i++){
    elements[i].innerHTML = 'Ку-ку!';
  }
}

function go_6() {
  var elements = document.getElementsByClassName('www');
  for (var i = 0; i < elements.length; i++){
    elements[i].innerHTML = i;
  }
}

function go_7() {
  var elements = document.querySelectorAll('#block_7 p.www');
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = '!!!';
  }
}

function go_8() {
  var element = document.getElementById('p8');
  alert(element.getAttribute('class'));
}

function go_9(operation) {
  var element = document.getElementById('p9');
  switch (operation) {
    case 'get' :  {
      alert(element.getAttribute('class'));
      break;
    }
    case 'remove' : {
      element.removeAttribute('class');
      alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!');
      break;
    }
  }
}

function go_10(operation) {
  var element = document.getElementById('p10');
  switch (operation) {
    case 'get' :  {
      alert(element.getAttribute('class'));
      break;
    }
    case 'set' : {
      element.setAttribute('class', 'new-class');
      alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!');
      break;
    }
  }
}

function go_11(input) {
  var element = document.getElementById('span11');
  element.innerHTML = input.value;
}


function go_12(){
  var elements = document.getElementsByTagName('a');
  for (var i = 0; i < elements.length; i++){
    elements[i].innerHTML += ' ('+elements[i].getAttribute('href')+')';
  }
}

function go_13(button) {
  var element = document.getElementById('p13');
  element.innerHTML = 'Привет, мир!';
  element.setAttribute('class', 'my-class-13');
  button.innerHTML = 'О, на меня нельзя больше нажать!';
  button.disabled = true;
}

function go_14() {
  var elements = document.querySelectorAll('#block_14 p');
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i;
  }
}

function go_15() {
  var elements = document.querySelectorAll('#block_15 p');
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i + '. ' + elements[i].innerHTML;
  }
}