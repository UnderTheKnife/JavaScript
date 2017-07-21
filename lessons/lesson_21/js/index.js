"use strict";
/*global document: false */

function getZero(num) {
    if (num > 0 && num < 10) {
        return '0' + num;
    }
    return num;
}

function showDay(day) {
    var days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    return days[day];
}

function go1() {
    var date = new Date();
    document.getElementById('result1').innerHTML = date.getDate().toString();
}

function go2() {
    var date = new Date(),
        month = date.getMonth();
    document.getElementById('result2').innerHTML = (month + 1).toString();
}

function go3() {
    var date = new Date();
    document.getElementById('result3').innerHTML = date.getFullYear().toString();
}

function go4() {
    var date = new Date(),
        element = document.getElementById('result4'),
        time = [date.getHours(), date.getMinutes(), date.getSeconds()],
        fullDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()],
        i;
    for (i = 0; i < 3; i += 1) {
        time[i] = getZero(time[i]);
        fullDate[i] = getZero(fullDate[i]);
    }
    element.innerHTML = time.join(':') + ' ' + fullDate.join('.');
}

function go5() {
    var date = new Date();
    document.getElementById('result5').innerHTML = date.getDay().toString();
}

function go6() {
    var date = new Date();
    document.getElementById('result6').innerHTML = showDay(date.getDay());
}

function go7() {
    var date = new Date(2015, 0, 7);
    document.getElementById('result7').innerHTML = showDay(date.getDay());

}

function go8() {
    var date = new Date();
    document.getElementById('result8').innerHTML =
        (Math.floor(date.getTime() / (1000 * 60))).toString();
}

function go9() {
    var time = Date.parse('1988-03-01T00:00:00'),
        date = new Date(),
        now = date.getTime(),
        result = (now - time) / (1000 * 60 * 60);
    document.getElementById('result9').innerHTML = result.toFixed(2);
}

function go10() {
    var date = new Date(),
        time = new Date(date.getFullYear(), date.getMonth(),
            date.getDate(), 0, 0, 0),
        result = Math.floor((date.getTime() - time.getTime()) / 1000);
    document.getElementById('result10').innerHTML = result.toString();
}

function go11() {
    var date = new Date(),
        time = new Date(date.getFullYear(), date.getMonth(),
            date.getDate(), 23, 59, 59),
        result = Math.floor((time.getTime() - date.getTime()) / 1000);
    document.getElementById('result11').innerHTML = result.toString();
}

function go12(element) {
    if (element.value !== '') {
        var birthday = new Date(element.value),
            date = new Date(),
            year,
            result,
            next;
        if (birthday.getMonth() < date.getMonth() ||
                birthday.getDate() < date.getDate()) {
            year = date.getFullYear() + 1;
        } else {
            year = date.getFullYear();
        }
        next = new Date(year, birthday.getMonth(), birthday.getDate());
        result = (next - date) / (1000 * 60 * 60 * 24);
        if (!isNaN(result)) {
            document.getElementById('text12').style.display = 'inline';
            document.getElementById('result12').innerHTML =
                (Math.ceil(result) + ' дней').toString();
        } else {
            document.getElementById('text12').style.display = 'none';
            document.getElementById('result12').innerHTML = 'Неверный формат!';
        }
    }
}
