"use strict";
/*global window: false */

function go(event) {
    var elem = window.document.getElementById('show'),
        width = elem.offsetWidth,
        height = elem.offsetHeight;
    elem.style.top = event.clientY - (height / 2) + 'px';
    elem.style.left = event.clientX - (width / 2) + 'px';
}

window.addEventListener('click', go);
