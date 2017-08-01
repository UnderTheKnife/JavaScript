"use strict";

/*global window: false */

function isEmpty(fields) {
  let elem;

  for (let i = 0; i < fields.length; i += 1) {
    elem = window.document.getElementById(fields[i]);

    if (elem.value === '') {
      return true;
    }

  }

  return false;
}

function edit() {
  this.innerHTML = window.prompt('Edit:', this.innerHTML);
}

function add() {
  const ul = window.document.getElementById('users');
  const fields = ['firstName', 'lastName'];
  let tr = window.document.createElement('tr');
  let elem;
  let input;

  if (!isEmpty(fields)) {

    for (let i = 0; i < fields.length; i += 1) {
      elem = window.document.createElement('td');
      input = window.document.getElementById(fields[i]);
      elem.innerHTML = input.value;
      input.value = '';
      elem.addEventListener('click', edit);
      tr.appendChild(elem);
    }

    ul.appendChild(tr);
  }
}


window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', add);
});
s