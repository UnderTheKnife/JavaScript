"use strict";
/*global window: false */


function go(event) {
    var elem = window.document.getElementById('show');
    if (event.ctrlKey) {
        elem.style.backgroundColor = '#ff0000';
    } else {
        elem.style.backgroundColor = '#008000';
    }
}