'use strict';

/*global window: false */

function block1() {
  window.alert(window.document.documentElement.clientHeight);
}

function block2() {
  let height = window.innerHeight;

  window.scrollBy(0, height);
}

function block3() {
  window.alert(`Текущая прокрутка сверху: ${window.pageYOffset}`);
}

window.addEventListener('load', () => {
  window.document.getElementById('button1').addEventListener('click', block1);
  window.document.getElementById('button2').addEventListener('click', block2);
  window.document.getElementById('button3').addEventListener('click', block3);
});
