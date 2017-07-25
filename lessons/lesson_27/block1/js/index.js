"use strict";
/*global window: false */

function go(event) {
    var elem = window.document.getElementById('show');
    elem.innerHTML = 'X:' + event.clientX + ' Y:' + event.clientY;
}

window.addEventListener('mousemove', go);
