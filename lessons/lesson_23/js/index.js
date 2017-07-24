"use strict";
/*global document: false */
/*global window: false */
/*jslint devel: true */

function onload(id, tag, action) {
    var elems = document.querySelectorAll('#' + id + ' ' + tag),
        i;
    for (i = 0; i < elems.length; i += 1) {
        elems[i].addEventListener(action, window[id]);
    }
}


var functions = [
    {'id' : 'block2', 'tag' : 'a', 'action' : 'mouseover'},
    {'id' : 'block3', 'tag' : 'a', 'action' : 'mouseover'},
    {'id' : 'block4', 'tag' : 'a', 'action' : 'mouseover'},
    {'id' : 'block5', 'tag' : 'input', 'action' : 'blur'},
    {'id' : 'block6', 'tag' : 'input', 'action' : 'click'},
    {'id' : 'block7', 'tag' : 'p', 'action' : 'click'},
    {'id' : 'block8', 'tag' : 'input', 'action' : 'blur'},
    {'id' : 'block9', 'tag' : 'div', 'action' : 'click'}
];
functions.forEach(function (element) {
    window.addEventListener('load', function () {
        onload(element.id, element.tag, element.action);
    }, false
        );
});

function setRed() {
    this.style.background = 'red';
    this.removeEventListener('click', setRed);
    this.addEventListener('click', setGreen);
}

function setGreen() {
    this.style.background = 'green';
    this.removeEventListener('click', setGreen);
    this.addEventListener('click', setRed);
}

function show1(elem) {
    alert(elem.src);
}

function block2() {
    this.title = this.innerHTML;
}

function block3() {
    var str = this.innerHTML;
    if (str.indexOf(this.href) <= 0) {
        this.innerHTML = str + ' (' + this.href + ')';
    }
}

function block4() {
    this.innerHTML = this.innerHTML + ' (' + this.href + ')';
    this.removeEventListener('mouseover', block4);
}

function block5() {
    var parag = document.getElementById('test5');
    parag.innerHTML = this.value;
}

function block6() {
    alert(this.value);
    this.removeEventListener('click', block6);
}

function block7() {
    var num = parseInt(this.innerHTML, 10);
    this.innerHTML = Math.pow(num, 2);
}

function block8() {
    var correctLength = parseInt(this.dataset.length, 10),
        inputDataLength = this.value.length;
    if (correctLength === inputDataLength) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
}
function block9() {
    this.addEventListener('click', setRed);
}
