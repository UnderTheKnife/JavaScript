"use strict";

/*global window: false */

function go(event) {
  window.document.getElementById('show').innerHTML = event.which.toString();
}

window.addEventListener('load', () => {
  window.document.getElementById('input').addEventListener('keydown', go);
});
