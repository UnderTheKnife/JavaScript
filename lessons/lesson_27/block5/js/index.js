"use strict";

/*global window: false */

function go(event) {
  let answer = String.fromCharCode(event.which);
  window.document.getElementById('show').innerHTML = answer.toString();
}

window.addEventListener('load', () => {
  window.document.getElementById('id1').addEventListener('keypress', go);
});