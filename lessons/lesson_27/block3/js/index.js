"use strict";

/*global window: false */

function go(event) {
  const elem = window.document.getElementById('show');
  let width = elem.offsetWidth;
  let height = elem.offsetHeight;

  elem.style.top = event.clientY - (height / 2) + 'px';
  elem.style.left = event.clientX - (width / 2) + 'px';
}

window.addEventListener('click', go);
