"use strict";
/*global document: false */
/*global window: false */
/*global alert: false */

function block1() {
    var elem = document.getElementById('elem1');
    elem.classList.add('www');
    elem.innerHTML = 'Классы объекта : ' + elem.classList;
}

function block2() {
    var elem = document.getElementById('elem2');
    elem.classList.remove('www');
    elem.innerHTML = 'Классы объекта : ' + elem.classList;
}

function block3() {
    var elem = document.getElementById('elem3');
    elem.classList.contains('www');
    elem.innerHTML = 'Наличие класса \'www\' : ' + elem.classList.contains('www');
}

function block4() {
    var elem = document.getElementById('elem4');
    elem.classList.toggle('www');
    elem.innerHTML = 'Классы объекта : ' + elem.classList;
}

function block5() {
    var elem = document.getElementById('elem5');
    elem.innerHTML = 'Количество классов : ' + elem.classList.length;
}

function block6() {
    var elem = document.getElementById('elem6').classList;
    elem.forEach(function (element) {
        alert(element);
    });
}

function block7() {
    var elem = document.getElementById('elem7');
    elem.style.cssText = 'background-color: red; ' +
        'height : 30px;' +
        'border : 1px solid black;';
}

function block8(elem) {
    alert(elem.tagName);
}

function block9(elem) {
    alert(elem.tagName.toLowerCase());
}

function block10(elem) {
    elem.innerHTML = elem.innerHTML + ' ' + elem.tagName.toLowerCase();
}

function block11() {
    var ol = document.getElementById('ol11'),
        li = document.createElement('li');
    li.innerHTML = 'пункт';
    ol.appendChild(li);
}

function block12() {
    var ul = document.getElementById('ul12'),
        arr = [1, 2, 3],
        li,
        i;
    for (i = 0; i < arr.length; i += 1) {
        li = document.createElement('li');
        li.innerHTML = arr[i];
        ul.appendChild(li);
    }
}

function block13() {
    function showLi() {
        alert(this.innerHTML);
    }

    var ul = document.getElementById('ul13'),
        arr = [1, 2, 3],
        li,
        i;
    for (i = 0; i < arr.length; i += 1) {
        li = document.createElement('li');
        li.innerHTML = arr[i];
        li.addEventListener('click', showLi);
        ul.appendChild(li);
    }
}

function block14() {
    var ul = document.getElementById('ul14'),
        test = document.getElementById('elem14'),
        li = document.createElement('li');
    li.innerHTML = '!!!';

    ul.insertBefore(li, test);
}

function block15() {
    var elem = document.getElementById('elem15');
    elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');
}

function block16() {
    var elem = document.getElementById('elem16');
    elem.insertAdjacentHTML('afterEnd', '<span>!!!</span>');
}

function block17() {
    var elem = document.getElementById('elem17');
    elem.insertAdjacentHTML('afterBegin', '<span>!!!</span>');
}

function block18() {
    var elem = document.getElementById('elem18');
    elem.insertAdjacentHTML('beforeEnd', '<span>!!!</span>');
}

function block19() {
    var elem = document.getElementById('elem19');
    elem.firstElementChild.style.color = 'red';
}

function block20() {
    var elem = document.getElementById('elem20');
    elem.lastElementChild.style.color = 'red';
}

function block21() {
    var elem = document.getElementById('elem21'),
        i;
    for (i = 0; i < elem.children.length; i += 1) {
        elem.children[i].innerHTML += ' !';
    }
}

function block22() {
    var elem = document.getElementById('elem22'),
        prev = elem.previousElementSibling;
    prev.innerHTML = prev.innerHTML + '!';
}

function block23() {
    var elem = document.getElementById('elem23'),
        prev = elem.nextElementSibling;
    prev.innerHTML = prev.innerHTML + '!';
}

function block24() {
    var elem = document.getElementById('elem24'),
        prev = elem.nextElementSibling.nextElementSibling;
    prev.innerHTML = prev.innerHTML + '!';
}

function block25() {
    var elem = document.getElementById('elem25');
    elem.parentElement.style.color = 'red';
}

function block26() {
    var elem = document.getElementById('elem26');
    elem.parentElement.parentElement.style.color = 'red';
}

function block27() {
    var parent = document.getElementById('parent27'),
        child = document.getElementById('child27');
    parent.removeChild(child);
}

function block28() {
    var parent = document.getElementById('parent28');
    parent.removeChild(parent.lastElementChild);
}

function block29(elem) {
    elem.parentElement.removeChild(elem);
}

function block30() {
    var elems = document.querySelectorAll('#elem30 li'),
        i;

    function remove() {
        this.parentElement.removeChild(this);
    }

    for (i = 0; i < elems.length; i += 1) {
        elems[i].addEventListener('click', remove);
    }
}

function block31() {
    var input = document.getElementById('input31'),
        clone = input.cloneNode(true);
    input.parentElement.appendChild(clone);
}

function onload(element) {
    var elem = document.getElementById(element);
    elem.innerHTML = 'Классы объекта : ' + elem.classList;
}

var classes = [
    'elem1',
    'elem2',
    'elem4'
];

classes.forEach(function (element) {
    window.addEventListener('load', function () {
        onload(element);
    }, false
        );
});
window.addEventListener('load', block30);
