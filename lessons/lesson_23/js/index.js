'use strict';
/*global document: false */
/*global window: false */

/*jslint devel: true */

function setRed() {
  this.style.background = 'red';
  this.removeEventListener('click', setRed);
  this.addEventListener('click', setGreen);
}

function setGreen() {
  this.style.background = 'green';
  this.removeEventListener('click', setGreen);
  this.addEventListener('click', setRed);
}

function block1() {
  alert(this.src);
}

function block2() {
  this.title = this.innerHTML;
}

function block3() {
  let str = this.innerHTML;

  if (str.indexOf(this.href) <= 0) {
    this.innerHTML = `${str} (${this.href})`;
  }

}

function block4() {
  this.innerHTML = `${this.innerHTML} (${this.href})`;
  this.removeEventListener('mouseover', block4);
}

function block5() {
  const parag = document.getElementById('test5');

  parag.innerHTML = this.value;
}

function block6() {
  alert(this.value);
  this.removeEventListener('click', block6);
}

function block7() {
  let num = parseInt(this.innerHTML, 10);

  this.innerHTML = Math.pow(num, 2);
}

function block8() {
  let correctLength = parseInt(this.dataset.length, 10);
  let inputDataLength = this.value.length;

  if (correctLength === inputDataLength) {
    this.style.borderColor = 'green';
  } else {
    this.style.borderColor = 'red';
  }

}

function block9() {
  this.addEventListener('click', setRed);
}

window.addEventListener('load', () => {
  const functions = [
    {
      'id': 'block1',
      'tag': 'img',
      'action': 'click'
    },
    {
      'id': 'block2',
      'tag': 'a',
      'action': 'mouseover'
    },
    {
      'id': 'block3',
      'tag': 'a',
      'action': 'mouseover'
    },
    {
      'id': 'block4',
      'tag': 'a',
      'action': 'mouseover'
    },
    {
      'id': 'block5',
      'tag': 'input',
      'action': 'blur'
    },
    {
      'id': 'block6',
      'tag': 'input',
      'action': 'click'
    },
    {
      'id': 'block7',
      'tag': 'p',
      'action': 'click'
    },
    {
      'id': 'block8',
      'tag': 'input',
      'action': 'blur'
    },
    {
      'id': 'block9',
      'tag': 'div',
      'action': 'click'
    }
  ];

  functions.forEach(function (elem) {
    let id = elem.id;
    let tag = elem.tag;
    let action = elem.action;
    let elements = document.querySelectorAll('#' + id + ' ' + tag);

    elements.forEach((button) => {
      button.addEventListener(action, window[id]);
    });

  });

});