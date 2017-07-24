"use strict";
/*global document: false */
/*global window: false */

function block1() {
    var arr = [1, 2, 3],
        ul = document.createElement('ul'),
        i,
        li;
    for (i = 0; i < arr.length; i += 1) {
        li = document.createElement('li');
        li.innerHTML = arr[i];
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}

function block2() {
    var button = document.getElementById('button2'),
        parent,
        newInput;

    function add() {
        parent = button.parentElement;
        newInput = document.createElement('input');
        parent.appendChild(newInput);
    }

    button.addEventListener('click', add);
}

function block3() {
    var input = document.getElementById('input3'),
        digits,
        parent,
        newInput,
        i;

    function split() {
        digits = this.value.split('');
        parent = input.parentElement;

        for (i = 0; i < digits.length; i += 1) {
            newInput = document.createElement('input');
            newInput.value = digits[i];
            parent.appendChild(newInput);
        }
    }

    input.addEventListener('blur', split);
}

function block4() {
    var button = document.getElementById('button4');

    function hide() {
        this.parentElement.style.display = 'none';
    }

    button.addEventListener('click', hide);
}

function onload() {
    block1();
    block2();
    block3();
    block4();
}