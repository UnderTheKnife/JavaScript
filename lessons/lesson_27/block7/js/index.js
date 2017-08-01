"use strict";

/*global window: false */


function go(event) {
  const elem = window.document.getElementById('show');

  if (event.ctrlKey) {
    elem.innerHTML = '1';
  }
  if (event.altKey) {
    elem.innerHTML = '2';
  }
  if (event.shiftKey) {
    elem.innerHTML = '3';
  }
}

window.addEventListener('load', () => {
  window.document.getElementById('show').addEventListener('click', go);
});