"use strict";

/*global window: false */


function go(event) {
  const elem = window.document.getElementById('show');

  if (event.ctrlKey) {
    elem.style.backgroundColor = '#ff0000';
  } else {
    elem.style.backgroundColor = '#008000';
  }
}

window.addEventListener('load', () => {
  window.document.getElementById('show').addEventListener('click', go);
});