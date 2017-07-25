"use strict";
/*global window: false */

function onload() {
    var header = window.window.document.getElementById('header'),
        main = window.document.getElementById('main');
    main.style.marginTop = header.offsetHeight + 'px';
}

function block1() {
    var elem = window.document.getElementById('elem');
    window.alert(elem.clientTop);
}

function block2() {
    var elem = window.document.getElementById('elem');
    window.alert(elem.clientLeft);
}

function block3() {
    var elem = window.document.getElementById('elem');
    window.alert(elem.offsetWidth);
}

function block4() {
    var elem = window.document.getElementById('elem');
    window.alert(elem.offsetHeight);
}

function block5() {
    var elem = window.document.getElementById('elem');
    window.alert(elem.clientWidth);
}

function block6() {
    var elem = window.document.getElementById('elem');
    window.alert(elem.clientHeight);
}

function block7() {
    var elem = window.document.getElementById('elem'),
        style = window.getComputedStyle(elem);
    window.alert('Ширина : ' + style.width + '; Высота : ' + style.height);
}

function block8() {
    var elem = window.document.getElementById('elem');
    window.alert(elem.scrollTop);
}

function block9() {
    var elem = window.document.getElementById('elem');
    window.alert(elem.scrollLeft);
}

function block10() {
    var elem = window.document.getElementById('elem');
    elem.scrollTop = 100;
}

function block11() {
    var elem = window.document.getElementById('elem');
    elem.scrollTop += 100;
}

function block12() {
    var elem = window.document.getElementById('elem');
    window.alert(elem.scrollHeight);
}

function block13() {
    var elem = window.document.getElementById('elem');
    window.alert(elem.scrollWidth);
}

function block14() {
    var elem = window.document.getElementById('elem');
    elem.scrollTop = elem.scrollHeight - 100;
}

function block15() {
    window.alert(window.pageYOffset);
}

function block16() {
    window.alert(window.pageXOffset);
}

function block17() {
    window.scrollTo(300, 500);
}

function block18() {
    window.scrollBy(0, 300);
}

function block19() {
    window.scrollTo(0, window.document.body.clientHeight);
}
function block20() {
    window.scrollBy(0, 400);
}

function block21() {
    var body = window.document.window.documentElement;
    if (body.scrollHeight - window.pageYOffset === body.clientHeight) {
        window.scrollTo(0, 100);
    }
}

function block22() {
    var elem = window.document.getElementById('elem'),
        width = elem.offsetWidth,
        height = elem.offsetHeight;
    elem.style.width = width * 2 + 'px';
    elem.style.height = height * 2 + 'px';
    onload();
}
