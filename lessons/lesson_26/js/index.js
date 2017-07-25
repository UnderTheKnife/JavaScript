"use strict";
/*global window: false */

function block1() {
    window.alert(window.document.documentElement.clientHeight);
}

function block2() {
    var height = window.innerHeight;
    window.scrollBy(0, height);
}

function block3() {
    window.alert('Текущая прокрутка сверху: ' + window.pageYOffset);
}
