"use strict";
/*global document: false */
/*global window: false */

function start(element, dis) {
    var func = element.getAttribute('title'),
        parent = '#' + element.parentElement.getAttribute('id');
    window[func + 'ID'] = window.setInterval(window[func], 1000, element);
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
    document.getElementById('stop4').innerHTML = '';
    timer.innerHTML = number;
    document.querySelector('#block4 .start').disabled = true;
    if (number === 0) {
        stop(element, 0);
        document.querySelector('#block4 .start').disabled = false;
        timer.innerHTML = 10;
        document.getElementById('stop4').innerHTML = 'Таймер окончен!';
    }
}

function timer5() {
    if (window.number === undefined || window.number === 3) {
        window.number = 1;
    } else {
        window.number = window.number + 1;
    }
    var img = document.getElementById('img5');
    img.src = 'img/smiles/' + window.number + '.png';
}

function timer6() {
    var img1 = document.getElementById('img6_1'),
        img2 = document.getElementById('img6_2'),
        img3 = document.getElementById('img6_3'),
        tmp;
    tmp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = tmp;
    document.querySelector('#block6 .start').disabled = true;
}

function timer7() {
    var tmp,
        i;
    for (i = 1; i < 6; i += 1) {
        if (i === 1) {
            tmp = document.getElementById('img7_' + i).src;
        }
        document.getElementById('img7_' + i).src =
            document.getElementById('img7_' + (i + 1)).src;

    }
    document.getElementById('img7_6').src = tmp;
}

function timer8() {
    var seconds = document.getElementById('seconds'),
        minutes = document.getElementById('minutes'),
        hours = document.getElementById('hours'),
        now = new Date(),
        midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() +
            1, 0, 0, 0),
        diff =  Math.floor((midnight - now) / 1000),
        hoursRemain   = Math.floor(diff / (60 * 60)),
        minutesRemain = Math.floor((diff - hoursRemain * 60 * 60) / 60),
        secondsRemain = Math.floor(diff % 60);
    hours.innerHTML   = hoursRemain;
    minutes.innerHTML = addZero(minutesRemain);
    seconds.innerHTML = addZero(secondsRemain);
}

function onload() {
    window.timer3Id = window.setInterval(timer3, 1000);
    window.timer5Id = window.setInterval(timer5, 1000);
    window.timer8Id = window.setInterval(timer8, 1000);
}