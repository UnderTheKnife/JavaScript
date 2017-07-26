"use strict";
/*global window: false */

function showLi() {
    this.innerHTML += '!';
}


function onload() {
    var ul = window.document.getElementById('elem1'),
        i;
    for (i = 0; i < ul.children.length; i += 1) {
        ul.children[i].addEventListener('click', showLi);
    }
}

function add() {

    var ul = window.document.getElementById('elem1'),
        li = window.document.createElement('li');
    li.innerHTML = 'пункт';
    li.addEventListener('click', showLi);
    ul.appendChild(li);
}

