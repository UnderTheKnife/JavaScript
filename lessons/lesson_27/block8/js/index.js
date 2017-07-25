"use strict";
/*global window: false */

function go(event) {
    var show = window.document.getElementById('show'),
        input = window.document.getElementById('input');
    if (event.keyCode === 13) {
        show.innerHTML = input.value;
        input.value = '';
    }
}