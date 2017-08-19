"use strict";

/*global window: false */

function go(event) {
  const show = window.document.getElementById('show');
  const input = window.document.getElementById('input');

  if (event.keyCode === 13) {
    show.innerHTML = input.value;
    input.value = '';
  }
}

window.addEventListener('load', () => {
  window.document.getElementById('input').addEventListener('keydown', go);
});