"use strict";

/*global window: false */

function go(event) {
  const elem = window.document.getElementById('show');

  elem.style.top = event.clientY + 'px';
  elem.style.left = event.clientX + 'px';
}

window.addEventListener('click', go);
