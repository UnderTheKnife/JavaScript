"use strict";

/*global window: false */

function go(event) {
  window.document.getElementById('show').innerHTML = String.fromCharCode(event.which);
}

window.addEventListener('load', () => {
  window.document.getElementById('id1').addEventListener('keypress', go);
});