"use strict";
/*global window: false */


function go(event) {
    var elem = window.document.getElementById('show');
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