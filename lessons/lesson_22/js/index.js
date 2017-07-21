"use strict";
/*global document: false */
/*global window: false */

function start(element, dis) {
    var func = element.getAttribute('title'),
        parent = '#' + element.parentElement.getAttribute('id');
    window[func + 'ID'] =
        window.setInterval(this[func], 1000, element);
    if (dis) {
        element.disabled = true;
        document.querySelector(parent + ' .stop').disabled = false;
    }
}

function stop(element, dis) {
    var timerId = element.getAttribute('title') + 'ID',
        parent = '#' + element.parentElement.getAttribute('id');
    window.clearInterval(window[timerId]);
    if (dis) {
        element.disabled = true;
        document.querySelector(parent + ' .start').disabled = false;
    }
}

function addZero(num) {
    if (num <= 9) {
        return '0' + num;
    }
    return num;
}

function timer1() {
    var timer = document.getElementById('timer1');
    timer.innerHTML = parseInt(timer.innerHTML, 10) + 1;
}

function timer2() {
    var timer = document.getElementById('timer2');
    timer.innerHTML = parseInt(timer.innerHTML, 10) + 1;
}

function timer3() {
    var clock = document.getElementById('clock3'),
        date = new Date();
    clock.innerHTML = addZero(date.getHours()) + ':' +
            addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
}

function timer4(element) {
    var timer = document.getElementById('timer4'),
        number = parseInt(timer.innerHTML, 10) - 1;
    timer.innerHTML = number;
    document.querySelector('#block4 .start').disabled = true;
    if (number === 0) {
        stop(element, 0);
        document.querySelector('#block4 .start').disabled = false;
        timer.innerHTML = 10;
        document.getElementById('stop4').innerHTML = 'Таймер окончен!';
    }
}

function startClock() {
    window.timerId = window.setInterval(timer3, 1000);
}